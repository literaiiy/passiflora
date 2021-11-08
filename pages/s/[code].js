import Nav from "../../components/nav";
import Clock from "../../components/clock";
import { useRouter } from "next/router";
import ScheduleView from "../../components/schedule-view";
import { withRouter } from "next/router"
import React, { useState, useEffect } from 'react';

export default class Code extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      time: new Date(),
      nextPeriod: null,
    }
  }

  static getInitialProps({ asPath }){
    return { asPath }
  }

  componentDidMount() {
    this.setState({ time: new Date() })
  }

  componentDidUpdate() {
    this.timer = setTimeout(() => {
      this.setState({
        time: new Date(),
        nextPeriod: findNextPeriod(this.state.time, this.schedule)
      })
      console.log(this.state.time)
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
    }
    
    this.settings = decodeConfig(code.slice(code.indexOf("-")+1,))    
    console.log(this.settings)  
    this.schedule = decodeSchedule(code.slice(0, code.indexOf("-")), this.settings.schedule)

    if (typeof(this.schedule) !== 'undefined') {
      for (let x of this.schedule) {
        bal.push(
          <tr key={x[0]}>
            <td className='period-name'>{translatePeriod[x[0]]}</td>
            <td className='period-time'>{getTimeFromMin(x[1], this.settings.timeFormat)}</td>
          </tr>
        )
      }
    }
    
  return (
    <div>
      <title>Schedule - Passiflora</title>
      <Nav title="View a schedule"/>
      <main id='schedule-main'>
        <section>
          <p><b>Code</b>: {code}</p>
          <h2>Current time</h2>
          <div id="schedule-clock">{this.state.time.toLocaleTimeString()}</div>
          <h2>Next period</h2>
          <div id='schedule-period-label'>3rd period</div>
          <div id='schedule-period-countdown'>in <b>0:03:15</b></div>
          <h2>Full schedule</h2>
          <table id='schedule-table'>
            <tbody>
              {bal}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    )
  }
}

// Returns object of configuration
function decodeConfig(url) {
  return {
    namingScheme: ['p','h','c','t','i'].includes(url[0]) ? url[0] : null,
    lang: ['e','s','f','c','r','i','p'].includes(url[1]) ? url[1] : null,
    schedule: url.slice(2, -2),
    theme: ['d','l','s','f'].includes(url.slice(-2,-1)[0]) ? url.slice(-2,-1)[0] : null,
    timeFormat: ['t','u','m'].includes(url.slice(-1)[0]) ? url.slice(-1)[0] : null,
  }
}

// Returns object of periods and their time occurences
function decodeSchedule(url, config) {
  let decodedSchedule = [];
  if (url.length != config.length * 2) {return null}
  let counter = 0;
  for (let x of url.match(/(..?)/g)) { // Iterates through, counts, and decodes 2-char pairs
      decodedSchedule.push([config[counter], base64ParseInt(x)]);
      counter++;
  }
  if (!validateScheduleInput(decodedSchedule)) {return null}
  decodedSchedule = decodedSchedule.sort((a,b) => {return a[1] - b[1]})
  return decodedSchedule;
}

// ! Helpers

// Returns amount of minutes represented by input base64 pair
function base64ParseInt(pair) {
  let conversion = {0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",A:"10",B:"11",C:"12",D:"13",E:"14",F:"15",G:"16",H:"17",I:"18",J:"19",K:"20",L:"21",M:"22",N:"23",O:"24",P:"25",Q:"26",R:"27",S:"28",T:"29",U:"30",V:"31",W:"32",X:"33",Y:"34",Z:"35",a:"36",b:"37",c:"38",d:"39",e:"40",f:"41",g:"42",h:"43",i:"44",j:"45",k:"46",l:"47",m:"48",n:"49",o:"50",p:"51",q:"52",r:"53",s:"54",t:"55",u:"56",v:"57",w:"58",x:"59",y:"60",z:"61","-":"62",_:"63"};
  // p1 = 
  // p2 = 
  return +conversion[pair[0]] * 64 + +conversion[pair[1]]
}

// Validates schedule array input
function validateScheduleInput(arr) {
  for (let x of arr) {
    if (x[1] >= 1440 || x[1] < 0) {
        return false;
    }
  }
  return true;
}

// Formats an integer minute value into an HH:MM a string 
function getTimeFromMin(min, format) {
  if (format == "t") {
    const hour = min < 780 ? (Math.floor(min / 60) || 12) : (Math.floor(min / 60) - 12|| 12)
    const minute = ("" + (min % 60)).padStart(2, '0');
    const ampm = min < 720 ? 'AM' : 'PM';
    return `${hour}:${minute} ${ampm}`
  }
}

function findNextPeriod(time, sch) {
  console.log(Math.floor((Math.round((time-time.getTimezoneOffset()*60000)/1000) % 86400)/60))
  if (sch) {
    // for (let x of sch) {
    //   console.log(x)
    // }
    return "gaking"
  }
  return null;
}