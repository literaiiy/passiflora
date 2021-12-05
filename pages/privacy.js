import Nav from "../components/nav"
import PostHero from "../components/post-hero"

export default function Privacy() {
    return (
        <>
            <title>Privacy Policy - Passiflora</title>
            <meta property="og:title" content={`Privacy Policy - Passiflora`} />
            <main>
                <Nav title="Privacy Policy"/>
                <PostHero title="Privacy Policy"/>
                <section>
                  <p>
                    <i>Last updated November 27th, 2021</i>
                  </p>
                  <p>
                    Welcome to Passiflora's privacy policy. Outlined in this document are the 
                    policies and procedures that this website ("Passiflora") follows on the disclosure of the user's ("your")
                    personal information while using the Passiflora service.
                  </p>
                  <p>
                    Personal data is information that can be used to personally identify an individual.
                  </p>
                  <h2>Types of data collected</h2>
                  <p>
                    Passiflora itself does not collect any personally identifiable information, but
                    may use third party tools such as Google Analytics to better gauge audience interaction 
                    with the website. Google's privacy policies for their products (including Analytics) can
                    be viewed <a className="styled-a" href="https://policies.google.com/privacy?hl=en-US">here</a>. Long story short,
                    information such as those regarding your visit, web browser and operating system, web technologies
                    versions, and IP address may be collected.
                  </p>
                  <h2>Use of your personal data</h2>
                  <p>
                    Personal information gathered from Google's Analytics service may be used solely for
                    the purpose of creating a better experience by gauging audience interaction. Personal
                    information reported through the Analytics service will never be used to attempt to identify
                    any specific individual.
                  </p>
                  <h2>Sharing of your personal data</h2>
                  <p>
                    Passiflora does not share your personal data with any third parties.
                  </p>
                  <h2>Retention of your personal data</h2>
                  <p>
                    Retention of your personal data in the Google Analytics service is outlined in <a className="styled-a" href="https://support.google.com/analytics/answer/7667196?hl=en">this</a> support article, which is subject to change. At the time of writing, the length of retention is 26 months.
                  </p>
                  <h2>Changes to this Privacy Policy</h2>
                  <p>
                    This privacy policy is subject to change without notice. The date of last update will
                    be posted at the top of this privacy policy.
                  </p>
                  <h2>Contact us</h2>
                  <p>
                    If you have any questions regarding this privacy policy, use the contact form located 
                    on <a className="styled-a" href="https://literaiiy.me">literaiiy.me</a>.
                  </p>
                </section>
            </main>
        </>
    )
}