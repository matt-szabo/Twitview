import React from 'react'


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={ () => {this.props.click(this.props.name)}}>
        {this.props.name}
      </button>
    );
  }
}

export default Toggle;
