const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const methodOverride = require('method-override')

require('./db/db')

app.use((req, res, next) => {
  console.log("\nHi I am custom middleware, every request passes through me");
  next()
})

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// app.use(methodOverride('_method'))