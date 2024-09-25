import http from "k6/http"
import { check } from "k6"

const URL = "http://localhost:80"

export let options = {
    duration: "20s",
    vus: 12,
    thresholds: {
        http_req_failed: ['rate<0.0001'], // http errors should be less than 0.01%
        http_req_duration: ['p(97)<50'] // 99% of requests should be below 50ms
    }
}

export default function () {
    const getResponse = http.get(URL)

    if (getResponse.status == 200) {
        check(getResponse, {
            "Response time is less than 50ms": (res) => res.timings.duration < 50,
        })
    }
    else {
        console.error("Case failed:", getResponse.status)
        return
    }
}