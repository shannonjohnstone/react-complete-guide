import React, { useState, useEffect } from 'react';
import KindergartenChild from './KindergartenChild';
import ClassLevelNotification from '../../components/ClassLevelNotification';
import FetchData from '../../renderProps/FetchDataWithHooks';
import { useDataFetching } from '../../hooks/index';
import Button from '../../components/Button';

import styles from './Kindergarten.module.scss';

import { mockFetchStudents } from '../../api/students';

const KindergartenChildContainer = props => {
  const [displayAll, setDisplayAll] = useState(true);
  const [persons, setPersons] = useState([]);

  const switchNameHandler = (name, id) => {
    console.log('switchNameHandler', name);
    console.log('switchNameHandler', id);
    /**
     * this condition is for demonstrating when KindergartenChildContainer
     * does and does not update as a pure component
     * setPerson will only run when it is fox, which means KindergartenChildContainer
     * only updates with that update
     */
    if (name.toLowerCase() === 'dustin') {
      // update persons array, replace Dustin with Fox
      console.log({ persons });
      const updatedPersons = persons.map(person =>
        person.name.toLowerCase() === 'dustin'
          ? { ...person, name: 'Fox' }
          : person,
      );
      console.log({ updatedPersons });
      setPersons(updatedPersons);
    }
  };

  const nameChangeHandler = (name, id) => {
    const updatedPersons = persons.map(person =>
      person.id === id ? { ...person, name: name } : person,
    );
    setPersons(updatedPersons);
  };

  const deletePerson = id => {
    const updatedPersons = persons.filter(person => person.id !== id);
    setPersons(updatedPersons);
  };

  const resolveKindergartenAgeFlag = child => {
    return {
      ...child,
      isKindergartenAge: child.age >= 2,
    };
  };

  const filterKindergartenAgeChildren = child => child.isKindergartenAge;

  const resolveChildrenToDisplay = (persons, displayAll) => {
    return displayAll
      ? persons
      : persons
          .map(resolveKindergartenAgeFlag)
          .filter(filterKindergartenAgeChildren);
  };

  const setDisplayType = () => {
    setDisplayAll(!displayAll);
  };

  return (
    <section className={styles.kindergartenChild}>
      <FetchData
        setData={setPersons}
        fetchData={mockFetchStudents}
        render={() => {
          console.log('re render...');
          return (
            <>
              <ClassLevelNotification persons={persons} />

              <Button
                className={styles.buttonKindergartenChild}
                onClick={setDisplayType}
                text={displayAll ? 'Show kindergarten kids' : 'Show All'}
              />

              <div>{!persons.length && 'No student data found.'}</div>
              {resolveChildrenToDisplay(persons, displayAll).map(
                (person, index) => (
                  <KindergartenChild
                    key={person.id}
                    person={person}
                    index={index}
                    nameChangeHandler={nameChangeHandler}
                    switchNameHandler={switchNameHandler}
                    deletePerson={deletePerson}
                  />
                ),
              )}
            </>
          );
        }}
      />
    </section>
  );
};

export default React.memo(KindergartenChildContainer);
