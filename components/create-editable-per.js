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

  shiftUp = () => {
    this.props.updateShiftUp([this.props.period, Funcs.deformatTime(this.state.time)])
  }

  shiftDown = () => {
    this.props.updateShiftDown([this.props.period, Funcs.deformatTime(this.state.time)])
  }

  die = () => {
    this.props.die([this.props.period, Funcs.deformatTime(this.state.time)])
  }

  edit() {
    this.props.edit([this.props.period, Funcs.deformatTime(this.state.time)])
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
          <button onClick={this.shiftUp}><i className="bi bi-caret-up-fill"></i></button>
          <button onClick={this.shiftDown}><i className="bi bi-caret-down-fill"></i></button>
          <button onClick={this.die}><i className="bi bi-x-square-fill"></i></button>
          <button onClick={this.edit}><i className="bi bi-pencil-fill"></i></button>
        </td>
      </tr>
    )
  }
}

