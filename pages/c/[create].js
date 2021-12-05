import React from "react";
import CreateEditablePer from "../../components/create-editable-per";
import Nav from "../../components/nav";
import PeriodSettingsOption from "../../components/period-settings-option";
import PostHero from "../../components/post-hero";
import * as Funcs from "../../functions/funcs.js"
import CopyButton from "../../components/copy-button";
import PassiAlert from "../../components/passi-alert";

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    let code = this.props.asPath.slice(3,);
    // let urlPartition = code.split("-")
    this.invalidCode = !Funcs.isLegitSchedule(code)
    if (!Funcs.isLegitSchedule(code)) { code = Funcs.defaultCode }

    this.state = {
      url: code || Funcs.defaultCode,
      schedule: Funcs.decodeSchedule(code) || [],
      config: code.slice(-3,).split('') || ['p', 'l', 't'],
      clicked: false,
    }
  }

  static getInitialProps({ asPath }) {
    return { asPath }
  }

  masterUpdate = () => {
    const encoded = Funcs.encodeSchedule(this.state.schedule)
    this.setState({url: encoded[0] + "-" + encoded[1] + "-" + this.state.config.join("")})
  }

  updateHandler = (period, position) => {
    console.log(period)
    console.log(position)
    this.state.schedule.splice(position, 1, period);
    this.masterUpdate();
  }

  updateHandler2 = (cfg) => {
    this.state.config[cfg[1]] = cfg[0];
    this.setState({
      url: this.state.url.slice(0, -3) + this.state.config.join("")
    }, this.masterUpdate)
  }

  handleCbClick = () => {
    this.setState({clicked: true})
    navigator.clipboard.writeText("https://passiflora.literaiiy.me/s/" + this.state.url)
    setTimeout(() => {
      this.setState({clicked: false})
    }, 1500)
  }

  updateShiftUp = (pos) => {
    if (pos > 0) {
      this.setState({
        schedule:
          [...this.state.schedule.slice(0, pos - 1), this.state.schedule[pos],
          this.state.schedule[pos - 1], ...this.state.schedule.slice(pos + 1)],
      }, this.masterUpdate)
    }
  }

  updateShiftDown = (pos) => {
    if (pos < this.state.schedule.length - 1) {
      this.setState({
        schedule:
        [...this.state.schedule.slice(0, pos), this.state.schedule[pos + 1],
      this.state.schedule[pos], ...this.state.schedule.slice(pos + 2)]
      }, this.masterUpdate)
    }
  }

  updateDie = (pos) => {
    // const i = Funcs.getIndexOfArrayInArray(periodArray, this.state.schedule);
    this.setState({
      schedule: this.state.schedule.slice(0, pos).concat(this.state.schedule.slice(pos + 1, this.state.schedule.length))
    }, this.masterUpdate)
  }

  updateEdit = (choice, pos) => {
    console.log(choice)
    console.log(pos)
    this.setState({
      schedule: this.state.schedule.slice(0, pos).concat([[choice, this.state.schedule[pos][1]]]).concat(this.state.schedule.slice(pos + 1, this.state.schedule.length))
    }, this.masterUpdate)
  }

  addPeriod = () => {
    this.setState({
      schedule: [...this.state.schedule, Funcs.decideNextPeriod(this.state.schedule[this.state.schedule.length - 1])]
    }, this.masterUpdate)
  }

  componentDidUpdate() {
    console.log("Component has been re-rendered.")
  }

  render() {
    let periodList = [];
    console.dir(this.state.schedule)
    for (let x of this.state.schedule) {
      periodList.push(
        <CreateEditablePer 
          updateHandler={this.updateHandler}
          updateShiftUp={this.updateShiftUp}
          updateShiftDown={this.updateShiftDown}
          updateDie={this.updateDie}
          updateEdit={this.updateEdit}
          period={x[0]} 
          time={x[1]} 
          // position={Funcs.getIndexOfArrayInArray(x, this.state.schedule)}
          position={periodList.length}
        />
      )
    }

    return (
      <div>
        <title>Create schedule - Passiflora</title>
        <meta property="og:title" content="Create a schedule - Passiflora" />
        <Nav/>
        <PostHero title="Create a schedule"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        <main id="create-main">
          <PassiAlert display={this.invalidCode} title="Alert" message="The code you entered was invalid, so you were given the default schedule to edit."/>
          <section id='create-editable-per-periods'>
            <h2>Edit schedule</h2>
            <table id='create-editable-per-table'>
              <tbody>
                {periodList}
              </tbody>
            </table>
            <button onClick={this.addPeriod} className="add-button">+</button>
          </section>
          <section id='create-editable-per-settings'>
            <h2>Settings</h2>
            <PeriodSettingsOption 
              updateHandler={this.updateHandler2} 
              selects={[["p", "period"],["h", "hour"], ["c", "class"], ["a", "task"]]}
              default={this.state.config[0]} 
              name="naming-convention"
            />
            <PeriodSettingsOption 
              updateHandler={this.updateHandler2} 
              selects={
                [
                  ["l", "light"], 
                  ["d", "dark"], 
                  ["o", "oceanic"], 
                  ["f", "forest"],
                  ["r", "aurora"],
                  ["v", "velvet"],
                  ["w", "wintertide"],
                  ["y", "vineyard"]
                ]
              }
              default={this.state.config[1]} 
              name="theme"
            />
            <PeriodSettingsOption 
              updateHandler={this.updateHandler2}
              selects={[["t", "12-hour"], ["u", "24-hour"], ["m", "military"]]}
              default={this.state.config[2]} 
              name="time-format"
            />
          </section>
          <section>
            <h2>Copy schedule URL</h2>
            <div className="copy-url">
            <input
              className='copy-url-input'
              type="text"
              value={"https://passiflora.literaiiy.me/s/" + this.state.url}
              readOnly/>
              <button onClick={this.handleCbClick} className='copy-url-button'>{this.state.clicked ? "Copied!" : "Copy"}</button>
            </div>
          </section>
        </main>
      </div>
    )
  }
}