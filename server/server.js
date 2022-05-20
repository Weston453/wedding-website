import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

// import { renderToString } from 'react-dom/server'
// import Welcome from '../src/components/welcome/Welcome'
// import EventList from '../src/components/events-list/EventList'
// import MenuMain from '../src/components/Menu/Main-Menu/MenuMain'
// import WhosWho from '../src/components/whos-who/WhosWho'
// import Seating from '../src/components/seating/Seating'

const PORT = 8000

const app = express()

app.use('^/$', (req, res, next) => {
    const appcomponent = ReactDOMServer.renderToString(<App />);
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).send("Some error occurred")
        }
        return res.send(
            data.replace(
                '<div id="root"></div>', 
                `<div id="root">${appcomponent}</div>`
            )
        )
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// app.get('/', (req, res) => {
//     const content = renderToString(<HeroPage />);

//     res.send(content)
// })

// app.get('/welcome', (req, res) => {
//     const content = renderToString(<Welcome />);

//     res.send(content)
// })

// app.get('/eventList', (req, res) => {
//     const content = renderToString(<EventList />);

//     res.send(content)
// })

// app.get('/MenuMain', (req, res) => {
//     const content = renderToString(<MenuMain />);

//     res.send(content)
// })

// app.get('/whosWho', (req, res) => {
//     const content = renderToString(<WhosWho />);

//     res.send(content)
// })

// app.get('/seating', (req, res) => {
//     const content = renderToString(<Seating />);

//     res.send(content)
// })

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })