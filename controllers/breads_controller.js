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

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    // res.send(Bread[req.params.arrayIndex])
   if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.render('error404')
    }
})

// EXPORT
module.exports = breads