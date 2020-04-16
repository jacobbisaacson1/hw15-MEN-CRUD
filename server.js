require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = process.env.PORT


// connect to db
require('./db/db')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) // urlencoded is for forms
app.use(methodOverride('_method'))

const dogController = require('./controllers/dogController')
app.use('/dogs', dogController)

// NEED TO UNCOMMENT once it's made

const ownerController = require('./controllers/ownerController')
app.use('/owners', ownerController)

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







