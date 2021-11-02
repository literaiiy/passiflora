import SelectCreate from "/components/select-create.js"
import Link from 'next/link'


export default function Main() {
  return (
    <div>
      <title>Home - Passiflora</title>
      <main>
        <div className="hero">
          <div className='hero-nav'>
            <Link href="/schedule" className="nav-create-button">CREATE A SCHEDULE</Link>
            <a href="https://github.com/literaiiy"><img className='nav-icon invert' src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
          </div>
          <span className='hero-text'>Passiflora</span>
        </div>
        <section>
          <h2>Welcome to Passiflora</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nisl nisi. Nam eget odio non nunc tristique volutpat nec eget ligula. Cras ipsum dui, semper at porttitor rutrum, blandit in tortor. In pretium auctor lacus in dignissim. Morbi a maximus eros. In vel felis eget nisl iaculis auctor. Nunc enim diam, tincidunt id justo et, volutpat blandit massa. Cras sed massa interdum, sagittis mauris id, blandit ipsum. Aliquam non feugiat mauris. Proin semper non nulla sed tempor. Vivamus ut odio finibus turpis sagittis consectetur. Vivamus at suscipit neque, nec faucibus nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nisl nisi. Nam eget odio non nunc tristique volutpat nec eget ligula. Cras ipsum dui, semper at porttitor rutrum, blandit in tortor. In pretium auctor lacus in dignissim. Morbi a maximus eros. In vel felis eget nisl iaculis auctor. Nunc enim diam, tincidunt id justo et, volutpat blandit massa. Cras sed massa interdum, sagittis mauris id, blandit ipsum. Aliquam non feugiat mauris. Proin semper non nulla sed tempor. Vivamus ut odio finibus turpis sagittis consectetur. Vivamus at suscipit neque, nec faucibus nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nisl nisi. Nam eget odio non nunc tristique volutpat nec eget ligula. Cras ipsum dui, semper at porttitor rutrum, blandit in tortor. In pretium auctor lacus in dignissim. Morbi a maximus eros. In vel felis eget nisl iaculis auctor. Nunc enim diam, tincidunt id justo et, volutpat blandit massa. Cras sed massa interdum, sagittis mauris id, blandit ipsum. Aliquam non feugiat mauris. Proin semper non nulla sed tempor. Vivamus ut odio finibus turpis sagittis consectetur. Vivamus at suscipit neque, nec faucibus nisi.
          </p>
        </section>
        <SelectCreate />
        <section>
          <h2>About Passiflora</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nisl nisi. Nam eget odio non nunc tristique volutpat nec eget ligula. Cras ipsum dui, semper at porttitor rutrum, blandit in tortor. In pretium auctor lacus in dignissim. Morbi a maximus eros. In vel felis eget nisl iaculis auctor. Nunc enim diam, tincidunt id justo et, volutpat blandit massa. Cras sed massa interdum, sagittis mauris id, blandit ipsum. Aliquam non feugiat mauris. Proin semper non nulla sed tempor. Vivamus ut odio finibus turpis sagittis consectetur. Vivamus at suscipit neque, nec faucibus nisi.
          </p>
        </section>
      </main>
    </div>
  )
}
