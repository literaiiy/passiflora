import React from "react"
import Link from 'next/link'

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <a href="/">logo</a>
                <span className="nav-title">{this.props.title}</span>
                <a href="https://github.com/literaiiy"><img className='nav-icon' src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
            </nav>
        )
    }
}