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
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#fffef3" />
          <meta name="description" content="Passiflora is a customizable and minimalist time organization application used to easily manage schedules and routines for work, school, and much more." /> 
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Noto+Serif+Display:ital,wght@1,500&display=swap" rel="stylesheet"/>
          <link rel="stylesheet preload" as="style" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

          <meta property="og:site_name" content="Passiflora" />
          <meta property="og:url" content="https://passiflora.literaiiy.me" />
          <meta property="og:description" content="Passiflora is a customizable and minimalist time organization application used to easily manage schedules and routines for work, school, day-to-day activities, and much more." />
          <meta property="og:type" content="wesite" />
          <meta property="og:image" content="https://user-images.githubusercontent.com/64048778/144762674-247cbb50-e074-4df7-9648-a550d5120d1c.png" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-8V90F1W1YG`}></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-8V90F1W1YG', { 'anonymize_ip': true });`
          }}></script>
        </Head>
        <Main />
        <NextScript />
        <Footer />
      </Html>
    )
  }
}

export default MyDocument
