// Checks if schedule follows formatting rules
export function isLegitSchedule(string) {
  const sections = string.split('-')
  if (sections.length != 3 || sections[2].length != 3) { return false }
  if (sections[0].length != 2 * sections[1].length) { return false }
  for (let x of sections[0].match(/(..?)/g)) {
    if (base64ParseInt(x) >= 1440) { return false }
  }
  const periodLetters = Object.keys(translatePeriod)
  for (let y of sections[1]) {
    if (!periodLetters.includes(y)) { return false }
  }
  for (let z of sections[2]) {
    if (z !== sections[2][configAvailable[z]] ) { return false }
  }
  return true;
}


// Returns object of configuration
export function decodeConfig(url) {
  if (!url) {return null}
  return {
    namingScheme: reverseConfigConvert.hasOwnProperty(url[0]) ? url[0] : null,
    theme: reverseConfigConvert.hasOwnProperty(url[1]) ? url[1] : null,
    timeFormat: reverseConfigConvert.hasOwnProperty(url[2]) ? url[2] : null,
  }
}

// Returns object of periods and their time occurences
export function decodeSchedule(code) {
  let decodedSchedule;

  if (isLegitSchedule(code)) {
    decodedSchedule = [];
    let counter = 0;
    for (let x of code.split("-")[0].match(/(..?)/g)) { // Iterates through, counts, and decodes 2-char pairs
      decodedSchedule.push([code.split("-")[1][counter], base64ParseInt(x)]);
      counter++;
    }
    decodedSchedule = decodedSchedule.sort((a,b) => {return a[1] - b[1]})
  }
  // if (!validateScheduleInput(decodedSchedule)) {console.log("FUCK2!"); return null}
  
  return decodedSchedule || null;
}

// Encodes schedule into schedule string and config-schedule string.
export function encodeSchedule(sch) {
  let url = ""
  let settings = ""
  for (let x of sch) {
    url += base64EncodeInt(x[1]);
    settings += x[0];
  }
  return [url, settings];
}

// ! Helpers

// Returns amount of minutes represented by input base64 pair
export function base64ParseInt(pair) {
  let conversion = {0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",A:"10",B:"11",C:"12",D:"13",E:"14",F:"15",G:"16",H:"17",I:"18",J:"19",K:"20",L:"21",M:"22",N:"23",O:"24",P:"25",Q:"26",R:"27",S:"28",T:"29",U:"30",V:"31",W:"32",X:"33",Y:"34",Z:"35",a:"36",b:"37",c:"38",d:"39",e:"40",f:"41",g:"42",h:"43",i:"44",j:"45",k:"46",l:"47",m:"48",n:"49",o:"50",p:"51",q:"52",r:"53",s:"54",t:"55",u:"56",v:"57",w:"58",x:"59",y:"60",z:"61",".":"62","_":"63"};
  return +conversion[pair[0]] * 64 + +conversion[pair[1]]
}

// Returns base64 pair from amount of minutes
export function base64EncodeInt(int) {
  let conversion = {0:"0",1:"1",10:"A",11:"B",12:"C",13:"D",14:"E",15:"F",16:"G",17:"H",18:"I",19:"J",2:"2",20:"K",21:"L",22:"M",23:"N",24:"O",25:"P",26:"Q",27:"R",28:"S",29:"T",3:"3",30:"U",31:"V",32:"W",33:"X",34:"Y",35:"Z",36:"a",37:"b",38:"c",39:"d",4:"4",40:"e",41:"f",42:"g",43:"h",44:"i",45:"j",46:"k",47:"l",48:"m",49:"n",5:"5",50:"o",51:"p",52:"q",53:"r",54:"s",55:"t",56:"u",57:"v",58:"w",59:"x",6:"6",60:"y",61:"z",62:".",63:"_",7:"7",8:"8",9:"9"}
  let p1 = Math.floor(int / 64);
  let p2 = int % 64
  return conversion[p1] + conversion[p2] 
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
    return sch[0];
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

// Returns integer index of array needle in parent array haystack
export function getIndexOfArrayInArray(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i][0] == needle[0] && haystack[i][1] == needle[1]) {
      return i;
    } 
  }
  return -1;
}

// Capitalizes the character at index 0 of a string
export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

// Decides period to add to schedule based on last period in schedule
export function decideNextPeriod(lastElement) {
  console.log(lastElement)
  return (
    [
      typeof lastElement !== "undefined" ?
        nextList.includes(lastElement[0]) ? 
          "" + nextList[(nextList.indexOf(lastElement[0]) + 1) % 12] 
          : "1"
        : "1"
      ,
      typeof lastElement !== "undefined" ?
        (lastElement[1] + 30) % 1440 : 0
    ]
  )
}

// translatePeriod but for the client-side, allowing for different naming conventions
export function clientTranslatePeriod(per, f) {
  const format = per !== "l" && per !== "s" ? reverseConfigConvert[f] : '';
  const period = translatePeriod[per];
  return `${period} ${format}`;
}

// Variables & Constants

export const translatePeriod = {
  "a": "A",
  'b': 'B',
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
  6: '6th',
  7: '7th',
  8: '8th',
  9: '9th',
  0: '10th',
  'l': 'Long break',
  's': 'Short break',
}

export const reverseTranslatePeriod = {
  '10th': "0",
  '1st': "1",
  '2nd': "2",
  '3rd': "3",
  '4th': "4",
  '5th': "5",
  '6th': "6",
  '7th': "7",
  '8th': "8",
  '9th': "9",
  'A': "a",
  'B': "b",
  'Long break': "l",
  'Short break': "s",
}

export const configConvert = {
  "period": ["p", 0],
  "hour": ["h", 0],
  "class": ["c", 0],
  "task": ["a", 0],
  "light": ["l", 1],
  "dark": ["d", 1],
  "oceanic": ["o", 1],
  "forest": ["f", 1],
  "aurora": ["r", 1],
  "velvet": ["v", 1],
  "wintertide": ["w", 1],
  "vineyard": ["y", 1],
  "12-hour": ["t", 2],
  "24-hour": ["u", 2],
  "military": ["m", 2]
}

export const configAvailable = {
  "p": 0,
  "h": 0,
  "c": 0,
  "a": 0,
  "l": 1,
  "d": 1,
  "o": 1,
  "f": 1,
  "r": 1,
  "v": 1,
  "w": 1,
  "y": 1,
  "t": 2,
  "u": 2,
  "m": 2,
}

export const reverseConfigConvert = {
  "p": "period",
  "h": "hour",
  "c": "class",
  "a": "task",
  "l": "light",
  "d": "dark",
  "o": "oceanic",
  "f": "forest",
  "r": "aurora",
  "v": "velvet",
  "w": "wintertide",
  "y": "vineyard",
  "t": "12-hour",
  "u": "24-hour",
  "m": "military"
}

export const defaultCode = "000000000000-123456-plt";

export const defaultHref = "/c/" + defaultCode;

export const version = "v0.1.3-beta"

const nextList = [
  'a', 'b', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]
