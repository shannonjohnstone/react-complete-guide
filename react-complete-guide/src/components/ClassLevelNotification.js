import React, { PureComponent } from 'react';

const LEVELS = {
  FULL: 'full',
  LOW: 'low',
  EMPTY: 'empty',
};

class ClassLevelNotification extends PureComponent {
  resolveLevel = () => {
    const personsLength = this.props.persons.length;
    return personsLength > 2
      ? LEVELS.FULL
      : personsLength <= 1
      ? LEVELS.EMPTY
      : LEVELS.LOW;
  };
  resolveConfigOptions = () => {
    const currentLevel = this.resolveLevel();

    // return config
    switch (currentLevel) {
      case LEVELS.LOW:
        return { styles: 'red', text: 'Class numbers getting low' };
      case LEVELS.EMPTY:
        return {
          styles: 'red bold',
          text: 'Not enough children to make a class',
        };
      default:
        return {
          styles: '',
          text: 'Class numbers ok',
        };
    }
  };

  render() {
    const { styles, text } = this.resolveConfigOptions();
    return <p className={styles}>{text}</p>;
  }
}

export default ClassLevelNotification;
