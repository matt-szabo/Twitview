import React from 'react'
import Tweet from 'react-tweet'

export default class MyTweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // use linkProps if you want to pass attributes to all links
    const linkProps = {target: '_blank', rel: 'noreferrer'}

    return (
      <Tweet data={this.props.data} linkProps={linkProps} />
    )
  }
}
