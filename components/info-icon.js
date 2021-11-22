import React from "react";

export default class InfoIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span>
        <i data-tooltip={this.props.info}
        className="bi bi-info-circle info-button"></i>
      </span>
    )
  }
} 