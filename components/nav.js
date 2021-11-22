import React from "react"
import Link from 'next/link'

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <a href="/"><img src="/images/passi-full.svg" className="nav-icon" alt="passiflora icon" /></a>
                <a href="https://github.com/literaiiy"><img className='nav-icon' src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
            </nav>
        )
    }
}