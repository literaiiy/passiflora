import React from "react"

export default class CopyButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    this.setState({clicked: true})
    setTimeout(() => {
      this.setState({clicked: false})
    }, 1500)
  }

  render() {
    return (
      <div>

        <button onClick={this.handleClick} className='copy-url-button'>{this.state.clicked ? "Copied!" : "Copy"}</button>
      </div>
    )
  }
}