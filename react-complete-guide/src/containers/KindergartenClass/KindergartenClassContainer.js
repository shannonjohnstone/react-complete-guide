import React, { PureComponent } from 'react';
import KindergartenChild from './KindergartenChild';
import ClassLevelNotification from '../../components/ClassLevelNotification';
import FetchData from '../../renderProps/FetchData';
import Button from '../../components/Button';

import styles from './Kindergarten.module.scss';

import { mockFetchStudents } from '../../api/students';

class KindergartenChildContainer extends PureComponent {
  state = {
    displayAll: true,
    persons: [],
  };

  componentDidMount() {
    this.fetchStudentData();
  }

  fetchStudentData = async () => {
    try {
      const { data } = await mockFetchStudents();
      this.setState({ persons: data });
    } catch (error) {
      console.log(error);
    }
  };

  switchNameHandler = name => {
    /**
     * this condition is for demonstrating when KindergartenChildContainer
     * does and does not update as a pure component
     * setPerson will only run when it is fox, which means KindergartenChildContainer
     * only updates with that update
     */

    if (name.toLowerCase() === 'dustin') {
      // update persons array, replace Dustin with Fox
      const updatedPersons = this.state.persons.map(person =>
        person.name.toLowerCase() === 'dustin'
          ? { ...person, name: 'Fox' }
          : person,
      );
      this.setState({ persons: updatedPersons });
    }
  };

  nameChangeHandler = (name, id) => {
    const persons = this.state.persons.map(person =>
      person.id === id ? { ...person, name: name } : person,
    );
    this.setState({ persons });
  };

  deletePerson = id => {
    const persons = this.state.persons.filter(person => person.id !== id);
    this.setState({ persons });
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
      <section className={styles.kindergartenChild}>
        <FetchData
          fetchData={this.fetchStudentData}
          render={() => (
            <React.Fragment>
              <ClassLevelNotification persons={this.state.persons} />

              <Button
                className={styles.buttonKindergartenChild}
                onClick={this.setDisplayType}
                text={
                  this.state.displayAll ? 'Show kindergarten kids' : 'Show All'
                }
              />

              <div>
                {!this.state.persons.length && 'No student data found.'}
              </div>
              {this.resolveChildrenToDisplay(
                this.state.persons,
                this.state.displayAll,
              ).map((person, index) => (
                <KindergartenChild
                  key={person.id}
                  person={person}
                  index={index}
                  nameChangeHandler={this.nameChangeHandler}
                  switchNameHandler={this.switchNameHandler}
                  deletePerson={this.deletePerson}
                />
              ))}
            </React.Fragment>
          )}
        />
      </section>
    );
  }
}

export default KindergartenChildContainer;
