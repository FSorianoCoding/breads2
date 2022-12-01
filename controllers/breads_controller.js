const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

// INDEX
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    // res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// SHOW
breads.get('/:index', (req, res) => {
    if (Bread[req.params.index]) {
        res.render('Show', {
            bread: Bread[req.params.index],
            index: req.params.index,
        })
    } else {
        res.render('error404')
    }
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

// DELETE
breads.delete('/:index', (req, res) => {
    Bread.splice(req.params.index, 1)
    res.status(303).redirect('/breads')
})

// EXPORT
module.exports = breads