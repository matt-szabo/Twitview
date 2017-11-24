import React from 'react'
import Tweet from 'react-tweet'

// this component manages the rendering of each tweet in their appropriate media format
// thanks to the react-tweet node module

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
