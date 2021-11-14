import React from "react";
import CreateEditablePer from "../../components/create-editable-per";
import Nav from "../../components/nav";
import PeriodSettingsOption from "../../components/period-settings-option";
import PostHero from "../../components/post-hero";
import * as Funcs from "../../functions/funcs.js"

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      schedule: [],
      config: ['p','l','t']
    }

    const code = this.props.asPath.slice(3,);
    this.state.url = code;
    let urlPartition = code.split("-")
    this.settings = Funcs.decodeConfig(urlPartition[2])
    this.state.schedule = Funcs.decodeSchedule(urlPartition[0], urlPartition[1])
  }

  static getInitialProps({ asPath }) {
    return { asPath }
  }

  updateHandler = (period, position) => {
    this.state.schedule.splice(position, 1, period);
    console.log(this.state.schedule)
    const encoded = Funcs.encodeSchedule(this.state.schedule)
    this.setState({url: encoded[0] + "-" + encoded[1] + "-" + this.state.config.join("")})
  }

  updateHandler2 = (cfg) => {
    this.state.config[cfg[1]] = cfg[0];
    this.setState({url: this.state.url.slice(0, -3) + this.state.config.join("")})
    console.log(this.state.config)
  }

  componentDidUpdate() {
    console.log("Component has been re-rendered.")
  }

  render() {
    let periodList = [];
    for (let x of this.state.schedule) {
      periodList.push(
        <CreateEditablePer updateHandler={this.updateHandler} period={x[0]} time={x[1]} position={Funcs.getIndexOfArrayInArray(x, this.state.schedule)}/>
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
            <h2>Settings</h2>
            <PeriodSettingsOption updateHandler={this.updateHandler2} selects={[["p", "period"],["h", "hour"]]} name="naming-convention"/>
            <PeriodSettingsOption updateHandler={this.updateHandler2} selects={[["l", "light"],["d", "dark"]]} name="theme"/>
            <PeriodSettingsOption updateHandler={this.updateHandler2} selects={[["t", "12-hour"],["u", "24-hour"]]} name="time-format"/>
          </section>
          <section>
            <h2>Copy URL</h2>
            <input  style={{width: "80vw"}} 
              type="text" 
              value={"https://passiflora.literaiiy.me/s/" + this.state.url}
              readOnly/>
          </section>
        </main>
      </div>
    )
  }
}