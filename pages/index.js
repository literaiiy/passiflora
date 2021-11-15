import SelectCreate from "/components/select-create.js"
import Link from 'next/link'
import * as Funcs from "../functions/funcs.js"

export default function Main() {
  return (
    <div>
      <title>Home - Passiflora</title>
      <main>
        <div className="hero">
          <div className='hero-nav'>
            <a href={Funcs.defaultHref} className="nav-create-button">CREATE A SCHEDULE</a>
            <a href="https://github.com/literaiiy"><img className='nav-icon invert' src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
          </div>
          <span className='hero-text'>Passiflora</span>
        </div>
        <section>
          <h2>Welcome to Passiflora</h2>
          <p>
            Passiflora is a customizable and minimalist time organization application used to easily manage schedules and routines for work, school, day-to-day activities, and much more.
          </p>
          <p>
            To get started, either create a schedule or enter the code for a previously-existing one to track it.
          </p>
        </section>
        <SelectCreate />
        <section>
          <h2>About Passiflora</h2>
          <p>
            Named after the genus of plant commonly referred to as passionflower, Passiflora was conceptualized with the vision of being a web application that would give a quick, at-a-glance shot at a daily routine or schedule. Passiflora is written in JavaScript & HTML using the Next.js web framework.
          </p>
        </section>
      </main>
    </div>
  )
}
