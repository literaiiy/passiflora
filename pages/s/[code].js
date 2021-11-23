import Nav from "../../components/nav";
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
    let urlPartition = code.split('-')
    console.log(urlPartition)

    this.settings = Funcs.decodeConfig(urlPartition[2])    
    console.log(this.settings)  
    this.schedule = Funcs.decodeSchedule(urlPartition[0], urlPartition[1])

    if (typeof(this.schedule) !== 'undefined') {
      for (let x of this.schedule) {
        bal.push(
          <tr key={this.schedule.indexOf(x)}>
            <td className={
              `${
                this.schedule[(this.schedule.indexOf(x)+1)%this.schedule.length][0] 
                == this.state.nextPeriod[0] 
                && this.schedule[(this.schedule.indexOf(x)+1)%this.schedule.length][1] 
                == this.state.nextPeriod[1] 
                || this.state.nextPeriod[0] 
                == null && x[0] == this.schedule[this.schedule.length - 1][0]
                        && x[1] == this.schedule[this.schedule.length - 1][1]
                ? "period-emphasis" : "" } period-name`}
              > {Funcs.clientTranslatePeriod(x[0], this.settings.namingScheme)}
            </td>
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
              <div id='schedule-period-label'>{Funcs.clientTranslatePeriod(this.state.nextPeriod[0], this.settings.namingScheme) || "Done for the day!"}</div>
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
            <a href={"/c/" + code} className='schedule-edit-button'>
              Edit this schedule
            </a>
          </div>
        </section>
      </main>
    </div>
    )
  }
}