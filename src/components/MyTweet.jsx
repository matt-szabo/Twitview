import React from 'react'
import Tweet from 'react-tweet'

export default class MyTweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const linkProps = {target: '_blank', rel: 'noreferrer'}

    return (
      <Tweet data={this.props.data} linkProps={linkProps} />
    )
  }
}
