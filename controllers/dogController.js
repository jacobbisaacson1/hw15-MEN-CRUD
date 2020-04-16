const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')
const Owner = require('../models/owner')

//index
router.get('/', (req, res, next) => {
    Dog.find({}).populate('owner').exec((err, foundDogs) => {
        if(err) next(err)
            else {
                res.render('dogs/index.ejs', {
                    dogs: foundDogs
                })
            }
    })
})

router.get('/new', (req, res, next) => {
    Owner.find({}, (err, foundOwners) => {
        if(err) next(err)
            else {
                res.render('dogs/new.ejs', {
                    owners: foundOwners
                })
            }
    })
})

router.get('/:id', (req, res, next) => {
    Dog.findById(req.params.id).populate('owner').exec((err, foundDog) => {
        if(err) next(err)
        else {
            res.render('dogs/show.ejs', {
                dog: foundDog
            })
        }
    })
})

router.post('/', (req, res, next) => {
    Dog.create(req.body, (err, createdDog) => {
        if(err) next(err)
            else {
                res.redirect('/dogs')
            }
    })
})

//delete
router.delete('/:id', (req, res, next) => {
    Dog.findByIdAndRemove(req.params.id, (err, deletedDog) => {
        if(err) next(err)
            else {
                res.redirect('/owners/' + deletedDog.owner)
            }
        })
    })


router.get('/:id/edit', (req, res, next) => {
  Dog.findById(req.params.id, (err, foundDog) => {
    if(err) next(err);
    else {
      Owner.find({}, (err2, foundOwners) => {
        if(err2) next(err2);
        else {
          res.render('dogs/edit.ejs', {
            dog: foundDog,
            owners: foundOwners
          })
        }        
      })
    }
  })
})

router.put('/:id', (req, res, next) => {
  Dog.findByIdAndUpdate(req.params.id, req.body, (err, updatedDog) => {
    if(err) next(err);
    else {
      // redirect back to article show page so user can see updates
      res.redirect('/dogs/' + updatedDog._id)
    }    
  })
})



module.exports = router



