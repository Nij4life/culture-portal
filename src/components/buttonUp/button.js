import React from 'react';
import style from './style.module.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }

    this._hendlerClick = this._hendlerClick.bind(this);
  }

  test() {
    if(document.documentElement.scrollTop > 0) {
      this.setState({display: 'block'});
    } else {
      this.setState({display: 'none'});
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', ()=> {this.test()});
  }

   
  _hendlerClick() {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
  }
  
  render() {
    const display = this.state.display;
    return (
      <button id='up' style={{display: `${display}` }}  className={style.buttonUp} onClick={this._hendlerClick}>{ String.fromCharCode(8679) }</button>
    )
  }
}

