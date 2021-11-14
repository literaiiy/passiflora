import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    let currentYear = new Date().getFullYear();

    return (
      <Html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Noto+Serif+Display:ital,wght@1,500&display=swap" rel="stylesheet"/>
            <link href="http://fonts.cdnfonts.com/css/qaitan-serif-font" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        </Head>
        <Main />
        <NextScript />
        <footer>
          <span>
              Copyright © {currentYear} <a className='styled-a' href="https://literaiiy.me">literaiiy</a>. All rights reserved. Created with <a className='styled-a' href="https://nextjs.org">Next.js</a>. Powered by <a className='styled-a' href="https://vercel.com">Vercel</a>.<br />
              <a className='styled-a' href="/tos">Terms of Service</a>. <a className='styled-a' href="/privacy">Privacy Policy</a>.
          </span>
        </footer>
      </Html>
    )
  }
}

export default MyDocument