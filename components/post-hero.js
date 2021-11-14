import React from "react";

export default class PostHero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='post-hero'>
        <span className="post-hero-text">{this.props.title}</span>
      </div>
    )
  }
}