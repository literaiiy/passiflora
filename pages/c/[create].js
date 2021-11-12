import React from "react";
import Nav from "../../components/nav";
import PostHero from "../../components/post-hero";

export default class Create extends React.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps({ asPath }) {
    return { asPath }
  }

  render() {
    const code = this.props.asPath.slice(3,);
    return (
      <div>
        <title>Create schedule - Passiflora</title>
        <Nav title="Create a schedule"/>
        <PostHero title={code} />
      </div>
    )
  }
}