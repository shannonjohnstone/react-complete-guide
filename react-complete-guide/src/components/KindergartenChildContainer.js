import React, { Component } from 'react';
import Person from './Person';

class KindergartenChildContainer extends Component {
  state = { kindergartenChildren: [] };

  componentDidMount() {
    const kindergartenChildren = this.props.children
      .map(this.determineKindergartenAge)
      .filter(child => child.kindergartenAge);

    this.setState({ kindergartenChildren: kindergartenChildren });
  }

  determineKindergartenAge = child => {
    console.log({ child });
    const age = Math.floor(Math.random() * child.age);
    return {
      ...child,
      age,
      kindergartenAge: age >= 2,
    };
  };

  render() {
    return this.state.kindergartenChildren.map(person => (
      <Person key={person.name} {...person} />
    ));
  }
}

KindergartenChildContainer.defaultProps = {
  kindergartenChildren: [],
};

export default KindergartenChildContainer;
