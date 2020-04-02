const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')
const Owner = require('../models/owner')


router.get('/', async (req, res, next) => {
  try {
    const foundDogs = await Dog.find({}).populate('dogs')
    res.render('dogs/index.ejs', {
      dogs: foundDogs
    })
  } catch(err) {
    next(err)
  }
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})


// router.get('/', (req, res, next) => {
//     Dog.find({}, (err, foundDog) => {
//         if (err) {
//             next(err)
//         } else {
//             res.render('home.ejs')
//         }
//     })

// })

// router.post('/', (req, res, next) => {
//   console.log("\nhere is req.body -- it was added by body-parser");
//   console.dir(req.body);

//   const dogToAdd = {
//     name: req.body.name,
//     mood: req.body.mood,
//     cuteness: req.body.cuteness,
//     hungry: req.body.hungry,
//     scratchesNeed: req.body.scratchesNeed
//   }

//   req.body.hungry = "on"
//   req.body.scratchesNeed = "on"

//   Dog.create(dogToAdd, (err, createdDog) => {
//       if (err) {
//           next(err)
//       } else {
//           console.log("\n here is the dog we created");
//           console.log(createdDog);
//           res.redirect('/dog')
//           // res.send('hitting create route')
//       }
//   })
// })

module.exports = router



