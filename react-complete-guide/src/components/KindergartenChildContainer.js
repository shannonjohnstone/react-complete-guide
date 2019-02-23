import React, { PureComponent } from 'react';
import Person from './Person';

class KindergartenChildContainer extends PureComponent {
  resolveChildren = children => {
    console.log(children, 'children');
    return children
      .map(this.determineKindergartenAge)
      .filter(child => child.kindergartenAge);
  };

  determineKindergartenAge = child => {
    const age = Math.floor(Math.random() * child.age);
    return {
      ...child,
      age,
      kindergartenAge: age >= 2,
    };
  };

  render() {
    return this.resolveChildren(this.props.children).map(person => (
      <Person key={person.name} {...person} />
    ));
  }
}

KindergartenChildContainer.defaultProps = {
  children: [],
};

export default KindergartenChildContainer;
