import React, {useEffect} from 'react';
import Link from 'next/link'

export default class SelectCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionUrl: "/",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({actionUrl: event.target.value});
    }

    render() {
        return (
            <section className='select-create'>
            <Link href="/schedule" >Create a schedule</Link>
            <hr />
            <form action={this.state.actionUrl}>
            <label htmlFor="code-input">Enter a code</label>
            <input id='code-input' type="text" placeholder="code" onChange={this.handleInputChange}/>
            </form>
        </section>
        )
    }
}