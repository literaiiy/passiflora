// Returns object of configuration
export function decodeConfig(url) {
  return {
    namingScheme: ['p','h','c','t','i'].includes(url[0]) ? url[0] : null,
    lang: ['e','s','f','c','r','i','p'].includes(url[1]) ? url[1] : null,
    schedule: url.slice(2, -2),
    theme: ['d','l','s','f'].includes(url.slice(-2,-1)[0]) ? url.slice(-2,-1)[0] : null,
    timeFormat: ['t','u','m'].includes(url.slice(-1)[0]) ? url.slice(-1)[0] : null,
  }
}

// Returns object of periods and their time occurences
export function decodeSchedule(url, config) {
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
export function base64ParseInt(pair) {
  let conversion = {0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",A:"10",B:"11",C:"12",D:"13",E:"14",F:"15",G:"16",H:"17",I:"18",J:"19",K:"20",L:"21",M:"22",N:"23",O:"24",P:"25",Q:"26",R:"27",S:"28",T:"29",U:"30",V:"31",W:"32",X:"33",Y:"34",Z:"35",a:"36",b:"37",c:"38",d:"39",e:"40",f:"41",g:"42",h:"43",i:"44",j:"45",k:"46",l:"47",m:"48",n:"49",o:"50",p:"51",q:"52",r:"53",s:"54",t:"55",u:"56",v:"57",w:"58",x:"59",y:"60",z:"61","-":"62",_:"63"};
  // p1 = 
  // p2 = 
  return +conversion[pair[0]] * 64 + +conversion[pair[1]]
}

// Validates schedule array input
export function validateScheduleInput(arr) {
  for (let x of arr) {
    if (x[1] >= 1440 || x[1] < 0) {
        return false;
    }
  }
  return true;
}

// Formats an integer minute value into an HH:MM a string 
export function getTimeFromMin(min, format) {
  if (format == "t") {
    const hour = min < 780 ? (Math.floor(min / 60) || 12) : (Math.floor(min / 60) - 12|| 12)
    const minute = ("" + (min % 60)).padStart(2, '0');
    const ampm = min < 720 ? 'AM' : 'PM';
    return `${hour}:${minute} ${ampm}`
  } else if (format == 'u') {
    return `${("" + Math.floor(min / 60)).padStart(2, '0')}:${("" + (min % 60)).padStart(2,'0')}`
  } else if (format == 'm') {
    return `${("" + Math.floor(min / 60)).padStart(2, '0')}${("" + (min % 60)).padStart(2,'0')}`
  }
}

// Returns the name and time of the next period 
export function findNextPeriod(time, sch) {
  let timeInMin = Math.floor((Math.round((time-time.getTimezoneOffset()*60000)/1000) % 86400)/60)
  console.log(timeInMin)
  console.log(sch)
  if (sch) {
    let nextPeriod = ["", 0];
    for (let x of sch) {
      nextPeriod = x;
      if (x[1] > timeInMin) {
        return nextPeriod;
      }
    }
  }
  return [null, null];
}

// Returns an integer amount of minutes since 12:00 AM local.
export function getSecFromTime(unix) {
  return Math.floor((Math.round((unix-unix.getTimezoneOffset()*60000)/1000) % 86400))
}

export function formatSecAsHMS(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

// Turns a HH:MM string into an integer amount of minutes.
export function deformatTime(str) {
  return 60 * +str.slice(0,2) + +str.slice(3,5)
}

export function getIndexOfArrayInArray(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i][0] == needle[0] && haystack[i][1] == needle[1]) {
      return i;
    } 
  }
  return -1;
}

// Variables & Constants

export const translatePeriod = {
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