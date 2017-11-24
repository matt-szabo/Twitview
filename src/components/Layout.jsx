
import React, {Component} from 'react';
import Twitter from './Twitter.jsx';



export default class Layout extends Component {

  constructor() {
    super();
    this.state = {name: 'realDonaldTrump'}
  }

  render() {
    return (

      <div className="twitter-page">
        <div className="tweet-info">
            <Twitter id={this.state.name}></Twitter>
        </div>
        {this.props.children}
      </div>

    )
  }
}