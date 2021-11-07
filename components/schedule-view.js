// import React from "react";

// export default class ScheduleView extends React.Component {
//     constructor(props) {
//         super(props);
//     }

    
//     translateList = {

//     }
    
//     render() {
//         let bal = [];
//         let schedule = this.props.schedule
//         console.log(typeof(schedule))
        
//         for (let [x, y] of Object.entries(this.props.schedule)) {
//             bal.push(<tr><td>{x}</td><td>{getTimeFromMin(y)}</td></tr>)
//         }

//         return (

//         )
//     }
// }

// // Returns formatted time from amount of minutes
// function getTimeFromMin(min, format) {
//     if (format == "t") {
//         if (min === 0) {
//             return "12:00 AM";
//         } else if (min === 720) {
//             return "12:00 PM";
//         } else if (min < 720) {
//             return `${Math.floor(min / 60)}:${("" + min % 60).padStart(2, '0')} AM`;
//         } else {
//             return `${Math.floor(min / 60) - 12}:${("" + min % 60).padStart(2, '0')} PM`
//         }
//     }
// }