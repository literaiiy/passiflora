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
        </Head>
        <Main />
        <NextScript />
        <footer>
          <span>
              Copyright © {currentYear} <a className='styled-a' href="https://literaiiy.me">literaiiy</a>. All rights reserved. Created with <Link className='styled-a' href="https://nextjs.org">Next.js</Link>. Powered by <Link className='styled-a' href="https://vercel.com">Vercel</Link>.<br />
              <Link className='styled-a' href="/tos">Terms of Service</Link>. <Link className='styled-a' href="/privacy">Privacy Policy</Link>.
          </span>
        </footer>
      </Html>
    )
  }
}

export default MyDocument