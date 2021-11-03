import Nav from "../../components/nav";
import Clock from "../../components/clock";
import { useRouter } from "next/router";

export default function Code() {
    const router = useRouter();
    const code = router.query.code

    if (code) {
        const settings = decodeConfig(code.slice(code.indexOf("-")+1,))
        console.log(settings)

        const schedule = decodeSchedule(code.slice(0, code.indexOf("-")), settings.schedule)
    }
    
    return (
        <div>
            <title>Schedule - Passiflora</title>
            <Nav title="View a schedule"/>
            <main id='schedule-main'>
                <section>
                    <p><b>Code</b>: {code}</p>
                    <h2>Current time</h2>
                    <Clock />
                </section>
            </main>
        </div>
    )
}

// Returns object of configuration
function decodeConfig(url) {
    return {
        namingScheme: ['p','h','c','t','i'].includes(url[0]) ? url[0] : null,
        lang: ['e','s','f','c','r','i','p'].includes(url[1]) ? url[1] : null,
        schedule: url.slice(2, -2),
        theme: ['d','l','s','f'].includes(url.at(-2)) ? url.at(-2) : null,
        timeFormat: ['t','u','m'].includes(url.at(-1)) ? url.at(-1) : null,
    }
}

// Returns object of periods and their time occurences
function decodeSchedule(url, config) {
    let decodedSchedule = {};
    console.log(url)
    console.log(config)
    if (url.length != config.length / 2) {return null}
    let counter = 0;
    for (x of url.match(/(..?)/g)) {
        decodedSchedule[config[counter]] = base64ParseInt(x);
        counter++;
    }
    console.log(decodedSchedule)
}

// Helpers

// Returns amount of minutes represented by input base64 pair
function base64ParseInt(pair) {
    conversion = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        A: "10",
        B: "11",
        C: "12",
        D: "13",
        E: "14",
        F: "15",
        G: "16",
        H: "17",
        I: "18",
        J: "19",
        K: "20",
        L: "21",
        M: "22",
        N: "23",
        O: "24",
        P: "25",
        Q: "26",
        R: "27",
        S: "28",
        T: "29",
        U: "30",
        V: "31",
        W: "32",
        X: "33",
        Y: "34",
        Z: "35",
        a: "36",
        b: "37",
        c: "38",
        d: "39",
        e: "40",
        f: "41",
        g: "42",
        h: "43",
        i: "44",
        j: "45",
        k: "46",
        l: "47",
        m: "48",
        n: "49",
        o: "50",
        p: "51",
        q: "52",
        r: "53",
        s: "54",
        t: "55",
        u: "56",
        v: "57",
        w: "58",
        x: "59",
        y: "60",
        z: "61",
        '-': "62",
        '_': "63"
    }
    p1 = pair[0]
    p2 = pair[1]
    return +conversion[p1] * 64 + +conversion[p2]
}

// Returns formatted time from amount of minutes
function getTimeFromMin(min) {

}