import config  from './config.js'
import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('MERN Application'))
app.listen(config.port, () => console.log(`Host: ${config.host}\n Port: ${config.port}`))