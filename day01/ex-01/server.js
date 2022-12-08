import config from './config/config.js'
import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('MERN Application'))
app.listen(config.port, () => console.log(`http://${config.host}:${config.port}`))