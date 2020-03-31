const express = require('express')
const router = express.Router()
const Bruna = require('../models/bruna.js')

router.get('/', (req, res, next) => {
  Bruna.find({}, (err, foundBruna) => {
    if(err) {
      next(err)
    } else {
      res.send('home.ejs')
    }
  })

})

router.get('/new', (req, res) => {
  res.render('new.ejs')

})