import React from "react";
import Nav from "./nav";
import PostHero from "./post-hero";
import * as Funcs from "../functions/funcs.js"

export default class InvalidSchedule extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <PostHero title={this.props.code}/>
          <section>
            <h2>Invalid code</h2>
            <p>This schedule code doesn't seem to be valid. Try a different one or <a className='styled-a' href={Funcs.defaultHref}>create your own schedule</a>.</p>
          </section>
        </main>
      </div>
    )
  }
}