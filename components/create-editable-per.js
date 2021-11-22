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
    // this.props.updateShiftUp([this.props.period, Funcs.deformatTime(this.state.time)])
    this.props.updateShiftUp(this.props.position)
    console.log(this.props.position)
  }

  shiftDown = () => {
    // this.props.updateShiftDown([this.props.period, Funcs.deformatTime(this.state.time)])
    this.props.updateShiftDown(this.props.position)
  }

  die = () => {
    // this.props.die([this.props.period, Funcs.deformatTime(this.state.time)])
    this.props.updateDie(this.props.position)
  }

  edit = (e) => {
    this.props.updateEdit(Funcs.reverseTranslatePeriod[e.target.value], this.props.position)
  }

  render() {
    return (
      <tr className='create-editable-per-container'>
        <td>
          <select className="period-name-select" onChange={this.edit} value={Funcs.translatePeriod[this.props.period]}>
            <option >A period</option>
            <option >B period</option>
            <option >1st period</option>
            <option >2nd period</option>
            <option >3rd period</option>
            <option >4th period</option>
            <option >5th period</option>
            <option >6th period</option>
            <option >7th period</option>
            <option >8th period</option>
            <option >9th period</option>
            <option >10th period</option>
            <option >Short break</option>
            <option >Long break</option>
          </select>
        </td>
        <td>
          <input type="time" value={this.state.time} onChange={
            (e) => {
              this.handleChange(e);
            }
          }/>
        </td>
        <td>
          <button onClick={this.shiftUp}><i className="bi bi-caret-up-fill"></i></button>
          <button onClick={this.shiftDown}><i className="bi bi-caret-down-fill"></i></button>
          <button onClick={this.die}><i className="bi bi-x-square-fill"></i></button>
          {/* <select onClick={this.edit}><i className="bi bi-pencil-fill"></i></select> */}
        </td>
      </tr>
    )
  }
}

