import React from 'react';

function CreateLiElement(props) {
  const { name, photoURL } = props.node.frontmatter;
  return (
    <li key={name}>
      <img src={photoURL} alt={`${name}`} />
      {name}
    </li>
  )
}

export default ({ list }) => (
  <ul>{
    list.map(el => CreateLiElement(el))
  }</ul>
);
