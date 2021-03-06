import React from 'react';
import './Person.css';

/**
 * this a demo component to display working lifecycle methods
 */
class Person extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('PersonsClass: constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('PersonsClass: getDerivedStateFromProps');
    return state;
  }
  componentDidMount() {
    console.log('PersonsClass: componentDidMount');
  }
  // shouldComponentUpdate(nextProps) {
  //   console.log('PersonsClass: shouldComponentUpdate');
  //   // if (nextProps.persons !== this.props.persons) {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('PersonsClass: getSnapshotBeforeUpdate');
    return { message: 'SNAPSHOT!' };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('PersonsClass: componentDidUpdate');
    console.log(snapshot);
  }
  render() {
    return (
      <div className="person">
        <code>
          My name is {this.props.name}, i'm {this.props.age} years old!
          <div>{this.props.children}</div>
        </code>
      </div>
    );
  }
}

export default Person;
