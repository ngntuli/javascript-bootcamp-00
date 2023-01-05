import config from '../config/config.js'
import express from 'express'
let template = ejs.compile()

const app = express()

app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile)

app.get('/name', (req, res) => {
    res.send("Test")
})

app.listen(config.port, console.log(`http://${config.host}:${config.port}`))