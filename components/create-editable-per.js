import React from "react"
import * as Funcs from "../functions/funcs.js"

export default class CreateEditablePer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Funcs.getTimeFromMin(this.props.time, 'u')
    }
  }
  
  handleChange(e) {
    this.setState(
      {time: e.target.value,}, 
      () => {this.props.updateHandler([this.props.period, Funcs.deformatTime(this.state.time)], this.props.position)}
    )
  }

  render() {

    return (
      <tr className='create-editable-per-container'>
        <td><span>{Funcs.translatePeriod[this.props.period]}</span></td>
        <td><input type="time" value={this.state.time} onChange={
          (e) => {
            this.handleChange(e);
          }
        }/></td>
        <td>
          <button><i className="bi bi-caret-up-fill"></i></button>
          <button><i className="bi bi-caret-down-fill"></i></button>
          <button><i className="bi bi-x-square-fill"></i></button>
          <button><i className="bi bi-pencil-fill"></i></button>
        </td>
      </tr>
    )
  }
}