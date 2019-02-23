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

  renderChildBlock = () =>
    this.resolveChildrenToDisplay(
      this.props.persons,
      this.state.displayAll,
    ).map((person, index) => (
      <div className="kindergarten-child" key={person.id}>
        <Person {...person} />
        <form>
          <fieldset>
            <label htmlFor="nameChange">Update child's name</label>
            <input
              name="nameChange"
              type="text"
              onChange={e =>
                this.props.nameChangeHandler(e.target.value, index)
              }
            />
          </fieldset>
        </form>
        <button onClick={() => this.props.switchNameHandler(person.name)}>
          Switch name
        </button>
        <button onClick={() => this.props.deletePerson(person.id)}>
          Delete
        </button>
      </div>
    ));

  render() {
    console.log('PURE');
    return (
      <React.Fragment>
        <button onClick={this.displayType}>{this.buttonText()}</button>
        {this.renderChildBlock()}
      </React.Fragment>
    );
  }
}

KindergartenChildContainer.defaultProps = {
  persons: [],
};

export default KindergartenChildContainer;
