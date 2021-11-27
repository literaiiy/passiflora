import React from "react"
import Link from 'next/link'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <a className='nav-logo' href="/">
          <img src="/images/passi-icon.svg" className="nav-icon" alt="passiflora icon" />
          <span className="nav-title">Passiflora</span>
        </a>
        <a href="https://github.com/literaiiy"><img id='github-icon' className='nav-icon' src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
      </nav>
    )
  }
}