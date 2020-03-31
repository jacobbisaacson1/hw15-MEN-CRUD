require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT
// const methodOverride = require('method-override')

require('./db/db')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.use((req, res, next) => {
  console.log("\nHi I am custom middleware, every request passes through me");
  next()
})

app.get('*', (req, res) => {
	res.status(404).render('404.ejs')
})

app.use(bodyParser.urlencoded({ extended: false }))

// app.use(methodOverride('_method'))













app.listen(PORT, () => {
  const d = new Date()
  console.log(`${d.toLocaleString()}: Server running on port ${PORT}`)
})