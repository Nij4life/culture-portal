import React from 'react';
import { Link } from 'gatsby';

const PersonsList = ({ persons }) => (
  <ul>
    {persons.map(person => {
      const { firstName } = person.node;
      const { lastName } = person.node;
      const { id } = person.node;
      const { slug } = person.node.fields;
      return (
        <li>
          <Link to={slug} key={id}>
            {`${firstName} ${lastName}`}
          </Link>
        </li>
      );
    })}
  </ul>
);

export default PersonsList;