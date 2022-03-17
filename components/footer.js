import React from "react";
import * as Funcs from "../functions/funcs.js"

export default class Footer extends React.Component {
  render() {

    let currentYear = new Date().getFullYear();

    return (
      <footer>
        <div id='footer-left'>
          <a href='/' className='footer-logo-text'>
            <img src="/images/passi-icon.svg" alt="Passiflora icon"/>
            <span>Passiflora</span>
          </a>
          <div>
            <span>{Funcs.version}</span>
            <div>Copyright © {currentYear} <a className='styled-a' href="https://literaiiy.me">literaiiy</a>.</div>
          </div>
        </div>
        <div id='footer-links'>
          <div>Links</div>
          <div><a className='styled-a' href={Funcs.defaultHref}>Create a schedule</a></div>
          <div><a className='styled-a' href="/privacy">Privacy Policy</a></div>
        </div>
        <div className="footer-credits">
          <div>Photography</div>
          <div><a className='styled-a' href="https://unsplash.com/@the_bracketeer">Hendrik Cornelissen</a></div>
          <div><a className='styled-a' href="https://unsplash.com/@emcomeau">Ezra Jeffrey-Comeau</a></div>
          <div><a className='styled-a' href="https://unsplash.com/@pinewatt">pine watt</a></div>
          <div><a className='styled-a' href="https://unsplash.com/@vidarnm">Vidar Nordli-Mathisen</a></div>
        </div>
        <div className="footer-credits">
          <br />
          <div><a className='styled-a' href="https://unsplash.com/@nelly">Nelly Volkovich</a></div>
          <div><a className='styled-a' href="https://unsplash.com/@estefaniaef">Estefanía Fernández</a></div>
          <div><a className='styled-a' href="https://unsplash.com/@art_maltsev">Artem Maltsev</a></div>
          <div><a className='styled-a' href="https://unsplash.com/@timmossholder">Tim Mossholder</a></div>
        </div>
        <div id='footer-logos'>
          <a href="https://github.com/literaiiy/passiflora"><img width="32" height="32" className='footer-github-logo'src="https://unpkg.com/simple-icons@5.21.1/icons/github.svg" alt="GitHub" /></a>
          <a href="https://nextjs.org"><img className='footer-nextjs-logo' src="/images/nextjs-logotype-dark.svg" alt="Next.js" /></a>
          <a href="https://vercel.com"><img className='footer-vercel-logo' src="/images/vercel-logotype-dark.svg" alt="Vercel" /></a>
        </div>
      </footer>
    )
  }
}
