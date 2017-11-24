
import React, {Component} from 'react';
import { Link } from 'react-router';
import Twitter from './Twitter.jsx';
import Toggle from './Toggle.jsx';



export default class Layout extends Component {

  constructor() {
    super();
    this.state = {name: 'realDonaldTrump'}
  }

  render() {
    return (

      <div className="user-page">
        <div className="user-info">
            <Twitter id={this.state.name}></Twitter>
        </div>
        {this.props.children}
      </div>

    )
  }
}