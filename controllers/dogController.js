const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')
const Owner = require('../models/owner')


router.get('/', async (req, res, next) => {
  try {
    const foundDogs = await Dog.find({}).populate('dogs')
    console.log("\nfound dogs")
    console.log(foundDogs);
    res.render('dogs/index.ejs', {
      dogs: foundDogs
    })
  } catch(err) {
    next(err)
  }
})

router.get('/new', (req, res) => {
    res.render('dogs/new.ejs')
})

router.get('/:id', async (req, res, next) => {
    try {
      
        const foundDog = await Dog.findById(req.params.id)
        const foundOwners = await Owner.find({
            dog: req.params.id
        })
        res.render('dogs/show.ejs', {
            dog: foundDog,
            owners: foundOwners
        })
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        
        const createdDog = await Dog.create(req.body)
        console.log("dogogogogogogoogogog");
        res.redirect('/dogs')
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {

        const ownerDeleteError = await owner.remove({
            dog: req.params.id
        })
        const deletedDog = await Dog.findByIdAndRemove(req.params.id)
        res.redirect('/dogs')
    } catch (err) {
        next(err)
    }
})

router.get('/:id/edit', async (req, res, next) => {
    try {

        const foundDog = await Dog.findById(req.params.id)
        res.render('dogs/edit.ejs', {
            dog: foundDog
        })
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.redirect(`/dogs/${updatedDog._id}`)
    } catch (err) {
        next(err)
    }
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



