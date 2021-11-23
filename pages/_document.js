import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import Footer from '../components/footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#bb4667" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Noto+Serif+Display:ital,wght@1,500&display=swap" rel="stylesheet"/>
          <link href="http://fonts.cdnfonts.com/css/qaitan-serif-font" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        </Head>
        <Main />
        <NextScript />
        <Footer />
      </Html>
    )
  }
}

export default MyDocument