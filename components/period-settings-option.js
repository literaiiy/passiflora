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
    console.log(Funcs.configConvert[e.target.value])
    this.setState(
      {config: Funcs.configConvert[e.target.value]},
      () => this.props.updateHandler(this.state.config)
    )
  }

  render() {
    let array = [];

    for (let x of this.props.selects) {
      array.push(
        <option name={x[0]} value={x[1]}>{Funcs.capitalize(x[1])}</option>
      )
    }

    return (
      <div>
        <label htmlFor={this.props.name}>{Funcs.capitalize(this.props.name.replace("-", " "))}</label>
        <select onChange={this.handleChange} name={this.props.name} value={Funcs.reverseConfigConvert[this.props.default]}>
          {array}
        </select>
      </div>
    )
  }
}