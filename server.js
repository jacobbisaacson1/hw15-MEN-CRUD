require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT
console.log(PORT);
// const methodOverride = require('method-override')

require('./db/db')

app.use((req, res, next) => {
  console.log("\nI am middleware, requests pass through me");
  next()
})

app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('home.ejs')
})


const brunaController = require('./controllers/brunaController')
app.use('/bruna', brunaController)


// app.use(methodOverride('_method'))

app.get('/', (req, res) => {
	res.render('home.ejs')
})

app.get('*', (req, res) => {
	res.status(404).render('404.ejs')
})


app.listen(PORT, () => {
  const d = new Date()
  console.log(`${d.toLocaleString()}: Server running on port ${PORT}`)
})







