import SelectCreate from "/components/select-create.js"
import Link from 'next/link'
import * as Funcs from "../functions/funcs.js"

export default function Main() {
  return (
    <div>
      <title>Home - Passiflora</title>
      <meta property="og:title" content={`Home- Passiflora`} />
      <main>
        <div className="hero">
          <div className='hero-nav'>
            <a href={Funcs.defaultHref} className="nav-create-button">CREATE A SCHEDULE</a>
            <a href="https://github.com/literaiiy"><img width="32" height="32" className='nav-icon invert' src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
          </div>
          <span className='hero-text'>Passiflora</span>
        </div>
        <section>
          <img id='index-logo' src="/images/passi-icon.svg" alt="Passiflora logo" />
          <h2>Welcome to Passiflora</h2>
          <p>
            Passiflora is a customizable and minimalist time organization application used to easily manage schedules and routines for work, school, day-to-day activities, and much more.
          </p>
          <p>
            To get started, either create a schedule or enter the code for a previously existing one to track it.
          </p>
        </section>
        <SelectCreate />
        <section>
          <h2>About Passiflora</h2>
          <p>
            Named after the genus of plant commonly referred to as passionflower, Passiflora was conceptualized with the vision of being a web application that would give a quick, at-a-glance shot at a daily routine or schedule. Passiflora is written in JavaScript & HTML using the Next.js web framework.
          </p>
          <h2>How do I use Passiflora?</h2>
          <p>
            To get started with creating a schedule, create a schedule with the 
            <em> Create Schedule</em> button above. From there, you can add, edit, or remove
            periods of time from a schedule until it fits your needs. Settings to
            personalize your schedule a bit more are also available to be changed. 
            When you're done, copy the schedule URL from the bottom of the page and 
            save it for when you want to view the schedule.
          </p>
          <p>
            To view a schedule, visit the URL you obtained from creating a schedule or
            enter either the URL or the code into the <em>Enter a code</em> box above.
            From there, you will be able to view the full schedule detailing at what
            times each period starts and a countdown to the next occuring period.
          </p>
        </section>
      </main>
    </div>
  )
}
