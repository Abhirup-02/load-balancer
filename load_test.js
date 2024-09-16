import http from "k6/http"
import { check } from "k6"

const URL = "http://localhost:80"

export let options = {
    duration: "20s",
    vus: 18,
}

export default function () {
    const getResponse = http.get(URL)

    if (getResponse.status == 200) {
        check(getResponse, {
            "response time is less than 50ms": (res) => res.timings.duration < 50,
        })
    }
    else {
        console.error("Case failed:", getResponse.status)
        return
    }
}