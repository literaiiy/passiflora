import React, {useEffect} from 'react';
import Link from 'next/link'
import * as Funcs from "../functions/funcs.js"
import InfoIcon from "../components/info-icon.js"

export default class SelectCreate extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
						actionUrl: "/",
				}

				this.handleInputChange = this.handleInputChange.bind(this);
		}

		handleInputChange(event) {
				this.setState({actionUrl: "/s/" + sanitizeCodeInput(event.target.value)});
		}

		render() {
				return (
						<section className='select-create'>
						<a href={Funcs.defaultHref} >Create a schedule</a>
						<hr />
						<form action={this.state.actionUrl}>
						<div className='code-input-label'>
              <label htmlFor="code-input">Enter a code</label>
              <InfoIcon info={`Codes can be copied when creating a schedule or from the end of the URL
              while viewing a schedule. They should contain three sections separated by
              hyphens with alphanumeric characters in each. The default code is 
              ${Funcs.defaultCode}.`}/>
            </div>
						<input id='code-input' type="text" placeholder="Code" onChange={this.handleInputChange}/>
						</form>
				</section>
				)
		}
}

function sanitizeCodeInput(inp) {
  return inp.split('/').slice(-1)[0]
}