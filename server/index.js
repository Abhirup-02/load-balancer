const express = require('express')
const morgan = require('morgan')

require('dotenv').config()


const app = express()


app.use(morgan('tiny'))



app.get('/', (req, res) => {
    res.send('Hello World🌍')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server PORT : ${port}`)
})
