const express = require('express')
const router = express.Router()
const Bruna = require('../models/bruna.js')


router.get('/new', (req, res) => {
    res.render('new.ejs')

})

router.get('/', (req, res, next) => {
    Bruna.find({}, (err, foundBruna) => {
        if (err) {
            next(err)
        } else {
            res.render('home.ejs')
        }
    })

})

router.post('/', (req, res, next) => {
  console.log("\nhere is req.body -- it was added by body-parser");
  console.dir(req.body);

  const brunaToAdd = {
    mood: req.body.mood,
    cuteness: req.body.cuteness,
    hungry: req.body.hungry,
    scratchesNeed: req.body.scratchesNeed
  }

  req.body.hungry = "on"
  req.body.scratchesNeed = "on"


  Bruna.create(brunaToAdd, (err, createdBruna) => {
      if (err) {
          next(err)
      } else {
          console.log("\n here is the bruna we created");
          console.log(createdBruna);
          res.redirect('/bruna')
          // res.send('hitting create route')
      }
  })
})

module.exports = router



