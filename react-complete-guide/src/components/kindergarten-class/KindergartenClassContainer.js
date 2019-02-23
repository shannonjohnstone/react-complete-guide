import React, { PureComponent } from 'react';
import KindergartenChild from './KindergartenChild';
import Button from '../Button';

import styles from './Kindergarten.module.scss';

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

  filterKindergartenAgeChildren = child => child.isKindergartenAge;

  resolveChildrenToDisplay = (persons, displayAll) => {
    return displayAll
      ? persons
      : persons
          .map(this.resolveKindergartenAgeFlag)
          .filter(this.filterKindergartenAgeChildren);
  };

  setDisplayType = () => {
    this.setState({ displayAll: !this.state.displayAll });
  };

  render() {
    return (
      <React.Fragment>
        <Button
          className={styles.buttonKindergartenChild}
          onClick={this.setDisplayType}
          text={this.state.displayAll ? 'Show kindergarten kids' : 'Show All'}
        />

        {this.resolveChildrenToDisplay(
          this.props.persons,
          this.state.displayAll,
        ).map((person, index) => (
          <KindergartenChild
            key={person.id}
            person={person}
            index={index}
            nameChangeHandler={this.props.nameChangeHandler}
            switchNameHandler={this.props.switchNameHandler}
            deletePerson={this.props.deletePerson}
          />
        ))}
      </React.Fragment>
    );
  }
}

KindergartenChildContainer.defaultProps = {
  persons: [],
};

export default KindergartenChildContainer;
