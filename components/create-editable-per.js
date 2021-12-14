import React from "react"
import * as Funcs from "../functions/funcs.js"

export default class CreateEditablePer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleChange = (e) => {
    this.props.updateHandler([this.props.period, Funcs.deformatTime(e.target.value)], this.props.position)
  }

  shiftUp = () => {
    this.props.updateShiftUp(this.props.position)
  }

  shiftDown = () => {
    this.props.updateShiftDown(this.props.position)
  }

  die = () => {
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
            <option >A</option>
            <option >B</option>
            <option >1st</option>
            <option >2nd</option>
            <option >3rd</option>
            <option >4th</option>
            <option >5th</option>
            <option >6th</option>
            <option >7th</option>
            <option >8th</option>
            <option >9th</option>
            <option >10th</option>
            <option >Short break</option>
            <option >Long break</option>
          </select>
        </td>
        <td>
          <input type="time" value={Funcs.getTimeFromMin(this.props.time, 'u')} onChange={
            (e) => {
              this.handleChange(e);
            }
          }/>
        </td>
        <td>
          <button onClick={this.shiftUp}><i className="bi bi-caret-up-fill"></i></button>
          <button onClick={this.shiftDown}><i className="bi bi-caret-down-fill"></i></button>
          <button onClick={this.die}><i className="bi bi-x-square-fill"></i></button>
        </td>
      </tr>
    )
  }
}

