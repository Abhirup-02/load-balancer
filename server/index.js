import express from 'express'
import morgan from 'morgan'
import { networkInterfaces } from 'node:os'

let app = express()
app.use(morgan('tiny'))

// const IPV4 = networkInterfaces()['Wi-Fi'][1].address


app.get('/', (req, res) => {
    res.send('Hello World🌍')
})


app.listen(5000, () => {
    console.log('Server PORT : 5000')
})