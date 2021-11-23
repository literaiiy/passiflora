import React from "react";
import * as Funcs from "../functions/funcs.js"

export default class Footer extends React.Component {
  render() {

    let currentYear = new Date().getFullYear();

    return (
      <footer>
        <div id='footer-versioning'>{Funcs.version}</div>
        <div id='footer-lower'>
          <div id='footer-left'>
            <div class='footer-logo-text'>
              <img src="/images/passi-icon-white.svg" alt="Passiflora icon"/>
              <span>Passiflora</span>
            </div>
            <div>
              <div>Copyright © {currentYear} <a className='styled-a' href="https://literaiiy.me">literaiiy</a></div>
              <div>Photo credits: <a className="styled-a" href="https://unsplash.com/@the_bracketeer">Hendrik Cornelissen</a>.</div>
            </div>
          </div>
          <div id='footer-links'>
            <div><a className='styled-a' href="">Create a schedule</a></div>
            <div><a className='styled-a' href="/tos">Terms of Service</a></div>
            <div><a className='styled-a' href="/privacy">Privacy Policy</a></div>
          </div>
          <div id='footer-logos'>
            <a href="https://github.com/literaiiy"><img class='footer-github-logo'src="/images/github.svg" alt="GitHub" /></a>
            <a href="https://nextjs.org"><img class='footer-nextjs-logo' src="/images/nextjs-logotype-dark.svg" alt="Next.js" /></a>
            <a href="https://vercel.com"><img class='footer-vercel-logo' src="/images/vercel-logotype-dark.svg" alt="Vercel" /></a>
          </div>
        </div>
      </footer>
    )
  }
}