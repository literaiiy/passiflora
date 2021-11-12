import Nav from "../../components/nav";
import Clock from "../../components/clock";
import { useRouter } from "next/router";
import ScheduleView from "../../components/schedule-view";
import { withRouter } from "next/router"
import React, { useState, useEffect } from 'react';
import PostHero from "../../components/post-hero";
import * as Funcs from "../../functions/funcs.js"

export default class Code extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      time: new Date(),
      nextPeriod: [null, null],
    }
  }

  static getInitialProps({ asPath }){
    return { asPath }
  }

  componentDidMount() {
    this.setState({ 
      time: new Date(), 
      nextPeriod: Funcs.findNextPeriod(this.state.time, this.schedule),
    })
  }

  componentDidUpdate() {
    this.timer = setTimeout(() => {
      this.setState({
        time: new Date(),
        nextPeriod: Funcs.findNextPeriod(this.state.time, this.schedule),
      })
      console.log(this.state.nextPeriod)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const code = this.props.asPath.slice(3,)
    let bal = [];
    const translatePeriod = {
      "a": "A period",
      'b': 'B period',
      1: '1st period',
      2: '2nd period',
      3: '3rd period',
      4: '4th period',
      5: '5th period',
      6: '6th period',
      7: '7th period',
      8: '8th period',
      9: '9th period',
      0: '10th period',
      'l': 'Long break',
      's': 'Short break',
      null: "Tomorrow",
    }
    
    this.settings = Funcs.decodeConfig(code.slice(code.indexOf("-")+1,))    
    console.log(this.settings)  
    this.schedule = Funcs.decodeSchedule(code.slice(0, code.indexOf("-")), this.settings.schedule)

    if (typeof(this.schedule) !== 'undefined') {
      for (let x of this.schedule) {
        bal.push(
          <tr key={this.schedule.indexOf(x)}>
            <td className={`${this.schedule[(this.schedule.indexOf(x)+1)%this.schedule.length][0] == this.state.nextPeriod[0] && this.schedule[(this.schedule.indexOf(x)+1)%this.schedule.length][1] == this.state.nextPeriod[1] ? "period-emphasis" : ""} period-name`}>{translatePeriod[x[0]]}</td>
            <td className="period-time">{Funcs.getTimeFromMin(x[1], this.settings.timeFormat)}</td>
          </tr>
        )
      }
    }
    
  return (
    <div>
      <title>Schedule - Passiflora</title>
      <Nav title="View a schedule"/>
      <PostHero title={code}/>
      <main id='schedule-main'>
        <section id='schedule-sections'>
          <div id="schedule-sections-left">
            <div>
              <h2>Current time</h2>
              <div id="schedule-clock">{this.state.time.toLocaleTimeString()}</div>
            </div>
            <div>
              <h2>Next period</h2>
              <div id='schedule-period-label'>{translatePeriod[this.state.nextPeriod[0]] || "Done for the day!"}</div>
              <div id='schedule-period-countdown'>in <b>{Funcs.formatSecAsHMS(this.state.nextPeriod[1] * 60 - Funcs.getSecFromTime(this.state.time)) || ""}</b></div>
            </div>
          </div>
          <div>
            <h2>Full schedule</h2>
            <table id='schedule-table'>
              <tbody>
                {bal}
              </tbody>
            </table>
          </div>
        </section>
        <hr />
        <section id='schedule-edit-section'>
          <div>
            <a href={"/c/" + code} class='schedule-edit-button'>
              Edit this schedule
            </a>
          </div>
        </section>
      </main>
    </div>
    )
  }
}