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

  renderPersonBlock = () =>
    this.resolveChildrenToDisplay(
      this.props.persons,
      this.state.displayAll,
    ).map((person, index) => (
      <div className="kindergarten-child">
        <Person key={person.name} {...person} />
        <div>
          <input
            type="text"
            onChange={e => this.props.nameChangeHandler(e.target.value, index)}
          />
        </div>
        <button onClick={() => this.props.switchNameHandler(person.name)}>
          Switch name
        </button>
      </div>
    ));

  render() {
    return (
      <React.Fragment>
        <button onClick={this.displayType}>{this.buttonText()}</button>
        {this.renderPersonBlock()}
      </React.Fragment>
    );
  }
}

KindergartenChildContainer.defaultProps = {
  persons: [],
};

export default KindergartenChildContainer;
