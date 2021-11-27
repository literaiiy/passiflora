import React from "react";

export default class PassiAlert extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fading: this.props.display,
      display: this.props.display,
    }
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          fading: false,
        })
        setTimeout(
          () => {
            this.setState({
              display: false
            })
          }, 1500
        )
      }, 5000
    );
  }

  render() {
    return (
      <div className={`passi-alert ${!this.state.display ? 'display-none' : ''} ${!this.state.fading ? 'opacity-fade' : ''}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.message}</p>
      </div>
    )
  }
}