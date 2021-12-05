import Nav from "../components/nav"

export default function Custom404() {
  return (
    <>
      <title>404 - Passiflora</title>
      <meta property="og:title" content={`404 - Passiflora`} />
      <Nav></Nav>
      <main id='error-main'>
        <img id='passi-404' src="/images/passi-404.svg" alt="404" />
        <h2>An error has occured.</h2>
        <p>This page wasn't found.</p>
      </main>
    </>
  )
}