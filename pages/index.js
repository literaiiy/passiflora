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
            Dolor sir amet. Lorem ipsum these Saaq a-Diz. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <p>
            Dolor sir amet. Lorem ipsum these Saaq a-Diz. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <p>
            Dolor sir amet. Lorem ipsum these Saaq a-Diz. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </section>
        <SelectCreate />
        <section>
          <h2>About Passiflora</h2>
          <p>
            Dolor sir amet. Lorem ipsum these Saaq a-Diz. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </section>
      </main>
    </div>
  )
}
