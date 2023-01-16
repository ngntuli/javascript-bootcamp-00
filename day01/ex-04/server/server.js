import config from '../config/config.js'
import express from 'express'
import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'


const app = express()
const router = Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

router.get('/name', (req, res) => {
    let data = 'Hello Unkown'
    res.render('index', {data})
})
router.get('/name/:name', (req, res) => {
    let name = req.params.name
    let data = 'Hello ' + name
    res.render("index", {data})
})

app.use('/', router)

app.listen(config.port, console.log(`http://${config.host}:${config.port}`))