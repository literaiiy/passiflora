import Nav from "../components/nav"

export default function Custom404() {
  return (
    <div>
      <title>404 - Passiflora</title>
      <meta property="og:title" content={`404 - Passiflora`} />
      <Nav></Nav>
      <main id='error-main'>
        <h1>404</h1>
        <h2>An error has occured.</h2>
        <p>This page wasn't found.</p>
      </main>
    </div>
  )
}