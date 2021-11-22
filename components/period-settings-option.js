import React from "react";
import * as Funcs from "../functions/funcs.js"

export default class PeriodSettingsOption extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      config: ['p','l','t']
    }
  }

  handleChange = (e) => {
    const configConvert = {
      "period": ["p", 0],
      "hour": ["h", 0],
      "light": ["l", 1],
      "dark": ["d", 1],
      "12-hour": ["t", 2],
      "24-hour": ["u", 2],
    }
    console.log(configConvert[e.target.value])
    this.setState(
      {config: configConvert[e.target.value]},
      () => this.props.updateHandler(this.state.config)
    )
  }

  render() {
    let array = [];

    const reverseConfigConvert = {
      "p": "period",
      "h": "hour",
      "l": "light",
      "d": "dark",
      "t": "12-hour",
      "u": "24-hour",
    }

    for (let x of this.props.selects) {
      array.push(
        <option name={x[0]} value={x[1]}>{Funcs.capitalize(x[1])}</option>
      )
    }

    return (
      <div>
        <label htmlFor={this.props.name}>{Funcs.capitalize(this.props.name.replace("-", " "))}</label>
        <select onChange={this.handleChange} name={this.props.name} value={reverseConfigConvert[this.props.default]}>
          {array}
        </select>
      </div>
    )
  }
}