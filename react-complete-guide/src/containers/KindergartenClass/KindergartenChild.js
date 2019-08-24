import React, { Component, PureComponent } from 'react';
// import Person from '../../components/Person/Person';
import PersonClass from '../../components/Person/PersonClass';
import Button from '../../components/Button';

class KindergartenChild extends PureComponent {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    const { person } = this.props;
    console.log({ person });
    return (
      <div key={person.id}>
        <PersonClass {...person} />
        <form>
          <fieldset>
            <label htmlFor="nameChange">Update child's name</label>
            <input
              name="nameChange"
              type="text"
              ref={this.inputElementRef}
              onChange={e =>
                this.props.nameChangeHandler(e.target.value, person.id)
              }
            />
          </fieldset>
        </form>
        <Button
          onClick={() => this.props.switchNameHandler(person.name, person.id)}
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

export default KindergartenChild;
