import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import HeroPage from '../src/components/hero-page/HeroPage'
import Welcome from '../src/components/welcome/Welcome'
import EventList from '../src/components/events-list/EventList'
import MenuMain from '../src/components/Menu/Main-Menu/MenuMain'
import WhosWho from '../src/components/whos-who/WhosWho'
import Seating from '../src/components/seating/Seating'

const app = express()

app.get('/', (req, res) => {
    const content = renderToString(<HeroPage />);

    res.send(content)
})

app.get('/welcome', (req, res) => {
    const content = renderToString(<Welcome />);

    res.send(content)
})

app.get('/eventList', (req, res) => {
    const content = renderToString(<EventList />);

    res.send(content)
})

app.get('/MenuMain', (req, res) => {
    const content = renderToString(<MenuMain />);

    res.send(content)
})

app.get('/whosWho', (req, res) => {
    const content = renderToString(<WhosWho />);

    res.send(content)
})

app.get('/seating', (req, res) => {
    const content = renderToString(<Seating />);

    res.send(content)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})