import React, { PureComponent } from 'react';
import Person from './Person';

import './Kindergarten.css';

class KindergartenChildContainer extends PureComponent {
  state = {
    displayAll: true,
  };

  resolveKindergartenAgeFlag = child => {
    return {
      ...child,
      isKindergartenAge: child.age >= 2,
    };
  };

  resolveChildrenToDisplay = (persons, displayAll) => {
    return displayAll
      ? persons
      : persons
          .map(this.resolveKindergartenAgeFlag)
          .filter(child => child.isKindergartenAge);
  };

  displayType = () => {
    this.setState({ displayAll: !this.state.displayAll });
  };
  buttonText = () =>
    this.state.displayAll ? 'Show kindergarten kids' : 'Show All';

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    };

    const { persons, switchNameHandler, nameChangeHandler } = this.props;
    const { displayAll } = this.state;

    return (
      <React.Fragment>
        <button style={style} onClick={this.displayType}>
          {this.buttonText()}
        </button>

        {this.resolveChildrenToDisplay(persons, displayAll).map(
          (person, index) => (
            <div className="kindergarten-child">
              <Person key={person.name} {...person} />
              <div>
                <input
                  type="text"
                  onChange={e => nameChangeHandler(e.target.value, index)}
                />
              </div>
              <button onClick={() => switchNameHandler(person.name)}>
                Switch name
              </button>
            </div>
          ),
        )}
      </React.Fragment>
    );
  }
}

KindergartenChildContainer.defaultProps = {
  persons: [],
};

export default KindergartenChildContainer;
