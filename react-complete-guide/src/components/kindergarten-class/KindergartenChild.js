import React, { PureComponent } from 'react';
import Person from '../Person';
import Button from '../Button';

import styles from './Kindergarten.module.scss';

class Kindergarten extends PureComponent {
  render() {
    const { person } = this.props;
    return (
      <div className={styles.kindergartenChild} key={person.id}>
        <Person {...person} />
        <form>
          <fieldset>
            <label htmlFor="nameChange">Update child's name</label>
            <input
              name="nameChange"
              type="text"
              onChange={e =>
                this.props.nameChangeHandler(e.target.value, person.id)
              }
            />
          </fieldset>
        </form>
        <Button
          onClick={() => this.props.switchNameHandler(person.name)}
          text="Switch name"
        />
        <Button
          onClick={() => this.props.deletePerson(person.id)}
          text="Delete"
        />
      </div>
    );
  }
}

export default Kindergarten;
