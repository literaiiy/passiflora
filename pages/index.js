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
          <img id='index-logo' src="/images/passi-icon.svg" alt="Passiflora logo" />
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
          <h2>How do I use Passiflora?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat nunc quis mauris feugiat, a varius lacus facilisis. Donec egestas rhoncus euismod. Integer at eros suscipit diam euismod molestie. In hac habitasse platea dictumst. Duis bibendum tempus nisl, a cursus nibh porta vitae. Maecenas ut tristique lacus. Nulla ut quam vitae lorem suscipit dictum eu ut lectus. Mauris eget ante luctus, ornare libero dictum, feugiat justo. Quisque sollicitudin porta ullamcorper. Quisque tempor, nulla sed sagittis lacinia, neque mi malesuada dui, eu posuere felis quam sed nisi. Duis eget nibh eget nisi tempor mollis.</p>
          <p>Aenean faucibus tellus ut porta pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce rhoncus id ex vel aliquam. Maecenas nisi felis, rutrum quis vehicula non, ullamcorper nec orci. Maecenas nec sem at massa dictum volutpat quis vitae ex. Proin vulputate dui odio, non mollis sem rhoncus sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi id lacus erat. Duis ut varius metus. Phasellus convallis efficitur magna non porttitor.</p>
        </section>
      </main>
    </div>
  )
}
