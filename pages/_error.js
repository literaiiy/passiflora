import Nav from "../components/nav"
import Link from 'next/link'

export default function Error({ statusCode }) {
    return (
        <main id='error-main'>
            <h1>{statusCode}</h1>
            <h2>An error has occured.</h2>
            <p>{ (statusCode == 404) ? "This page wasn't found." : "Oops. Something went wrong. Try again later."}</p>
            <a className='styled-a' href="/">Back</a>
        </main>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}