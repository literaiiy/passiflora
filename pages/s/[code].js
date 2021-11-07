import Nav from "../../components/nav";
import Clock from "../../components/clock";
import { useRouter } from "next/router";
import ScheduleView from "../../components/schedule-view";
import { withRouter } from "next/router"
import React, { useState, useEffect } from 'react';

export default function Code() {
    const router = useRouter();
    const code = router.query.code
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

    // const [localTime, setTime] = useState(new Date())

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(new Date()), 1000
    //     }) 
    // })
    setInterval(() => {const time = new Date(); console.log(time)}, 1000)

    if (code) {
        var settings = decodeConfig(code.slice(code.indexOf("-")+1,))
        console.log(settings)
        
        var schedule = decodeSchedule(code.slice(0, code.indexOf("-")), settings.schedule)
    }
    
    if (typeof(schedule) !== 'undefined') {
        for (let x of schedule) {
    bal.push(<tr><td className='period-name'>{translatePeriod[x[0]]}</td><td className='period-time'>{getTimeFromMin(x[1], settings.timeFormat)}</td></tr>)
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
                    {}
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

// Returns object of configuration
function decodeConfig(url) {
    return {
        namingScheme: ['p','h','c','t','i'].includes(url[0]) ? url[0] : null,
        lang: ['e','s','f','c','r','i','p'].includes(url[1]) ? url[1] : null,
        schedule: url.slice(2, -2),
        theme: ['d','l','s','f'].includes(url.at(-2)) ? url.at(-2) : null,
        timeFormat: ['t','u','m'].includes(url.at(-1)) ? url.at(-1) : null,
    }
}

// Returns object of periods and their time occurences
function decodeSchedule(url, config) {
    let decodedSchedule = [];
    console.log(url)
    console.log(config)
    if (url.length != config.length * 2) {return null}
    let counter = 0;
    for (let x of url.match(/(..?)/g)) { // Iterates through, counts, and decodes 2-char pairs
        decodedSchedule.push([config[counter], base64ParseInt(x)]);
        counter++;
    }
    console.log(decodedSchedule)
    if (!validateScheduleInput(decodedSchedule)) {return null}
    decodedSchedule = decodedSchedule.sort((a,b) => {return a[1] - b[1]})
    console.log(decodedSchedule)
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
        // if (min === 0) {
        //     return "12:00 AM";
        // } else if (min === 720) {
        //     return "12:00 PM";
        // } else if (min < 720) {
        //     return `${Math.floor(min / 60)}:${("" + min % 60).padStart(2, '0')} AM`;
        // } else {
        //     return `${Math.floor(min / 60) - 12}:${("" + min % 60).padStart(2, '0')} PM`
        // }
        const hour = min < 780 ? (Math.floor(min / 60) || 12) : (Math.floor(min / 60) - 12|| 12)
        const minute = ("" + (min % 60)).padStart(2, '0');
        const ampm = min < 720 ? 'AM' : 'PM';
        return `${hour}:${minute} ${ampm}`
    }
}