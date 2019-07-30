import React from 'react';

import PersonsList from './persons-list';

const KEYS = ['firstName', 'lastName', 'city'];

const normalizeText = text => text.trim().toLocaleLowerCase();

const filterPersons = (persons, text) => {
  const normText = normalizeText(text);
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const person of persons) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of KEYS) {
      const fieldValue = person.node[key] || '';
      if (normalizeText(fieldValue).includes(normText)) {
        result.push(person);
        break;
      }
    }
  }
  return result;
};

class PersonsContainer extends React.Component {
  constructor({ persons }) {
    super();
    this.persons = persons;
    this.state = { persons: this.persons };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = e => {
    const text = e.target.value || '';
    this.setState(prevState => ({
      ...prevState,
      persons: filterPersons(this.persons, text),
    }));
  };

  render() {
    const { persons } = this.state;
    return (
      <div className={styles.container}>
        <input
          className={styles.search}
          type="search"
          placeholder="імя / прозвішча / горад"
          onChange={this.handleInput}
        />
        <PersonsList persons={persons} />
      </div>
    );
  }
}

export default PersonsContainer;