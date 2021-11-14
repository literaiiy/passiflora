import React from "react";
import CreateEditablePer from "../../components/create-editable-per";
import Nav from "../../components/nav";
import PostHero from "../../components/post-hero";
import * as Funcs from "../../functions/funcs.js"

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      schedule: [],
    }

    const code = this.props.asPath.slice(3,);
    this.state.url = code;
    this.settings = Funcs.decodeConfig(code.slice(code.indexOf("-")+1,))
    this.state.schedule = Funcs.decodeSchedule(code.slice(0, code.indexOf("-")), this.settings.schedule)
  }

  static getInitialProps({ asPath }) {
    return { asPath }
  }

  componentDidUpdate() {
    console.log(this.state.schedule);
  }

  updateHandler = (period, position) => {
    console.log("UpdateHandler has been called.")
    this.state.schedule.splice(position, 1, period);
    console.log({period, position})
    console.log(this.state.schedule)
    console.log("This should have been executed.")
  }

  render() {
    let periodList = [];
    for (let x of this.state.schedule) {
      periodList.push(
        <CreateEditablePer updateHandler={this.updateHandler} period={x[0]} time={x[1]} position={Funcs.getIndexOfArrayInArray(x, this.state.schedule)} />
      )
    }

    return (
      <div>
        <title>Create schedule - Passiflora</title>
        <Nav title="Create a schedule"/>
        <PostHero/>
        <main id="create-main">
          <section id='create-editable-per-periods'>
            <h2>Edit schedule</h2>
            <table id='create-editable-per-table'>
              <tbody>
                {periodList}
              </tbody>
            </table>
          </section>
          <section id='create-editable-per-settings'>
            <label htmlFor="Language">Language:</label>
            <select name="Language" id="">
              <option value="English"></option>
            </select>
          </section>
          <section>
            <h2>Copy URL</h2>
            <input style={{width: "80vw", textAlign: "center"}} type="text" value={"https://passiflora.literaiiy.me/s/" + this.state.url} readOnly/>
          </section>
        </main>
      </div>
    )
  }
}