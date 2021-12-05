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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

          <meta property="og:title" content="Home - Passiflora" />
          <meta property="og:site_name" content="Passiflora" />
          <meta property="og:url" content="https://passiflora.literaiiy.me" />
          <meta property="og:description" content="Passiflora is a customizable and minimalist time organization application used to easily manage schedules and routines for work, school, day-to-day activities, and much more." />
          <meta property="og:type" content="wesite" />
          <meta property="og:image" content="" />
        </Head>
        <Main />
        <NextScript />
        <Footer />
      </Html>
    )
  }
}

export default MyDocument