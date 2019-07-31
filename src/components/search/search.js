import React, { Component } from 'react';
import ListPhotographers from '../listPhotographers/listPhotographers';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initElems: [],
      elems: []
    }
    for (let index = 0; index < props.list.length; index += 1) {
      const { name, picture } = props.list[index].node.frontmatter;
      const { slug } = props.list[index].node.fields;
      this.state.initElems.push([name, picture, slug]);
      this.state.elems.push([name, picture, slug]);
    }
  }

  filter(event) {
    const updateElems = this.state.initElems.filter(item => {
      return item[0].toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({elems: updateElems});
  }

  componentDidMount() {
    this.setState({elems: this.state.elems});
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          onChange={(event) => this.filter(event)}
        ></input>
        <ListPhotographers elems={this.state.elems} />
      </div>
    )
  }
}

export default Search;