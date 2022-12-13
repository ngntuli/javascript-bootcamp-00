import config from './config/config.js'
import fs from 'fs'
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    fs.readFile('./template/index.html', 'utf-8', 
    (err, data) => {
        if(err){
            console.log(`Error: ${err.message}`)
            return
        }
        console.log(data)
        res.send(data)
    })
})
app.listen(config.port, () => {
    console.log(`http://${config.host}:${config.port}`)
})