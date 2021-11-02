import Nav from "../components/nav"
import Link from 'next/link'

export default function Error({ statusCode }) {
    return (
        <main id='error-main'>
            <h1>{statusCode}</h1>
            <h2>An error has occured.</h2>
            <p>That&apos;s not supposed to happen.</p>
            <Link href="/">Back</Link>
        </main>
    )
}