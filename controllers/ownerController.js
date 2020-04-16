const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')
const Owner = require('../models/owner')

// index
router.get('/', (req, res) => {
    Owner.find({}, (err, foundOwners) => {
        if(err) {
            next(err)
        } else {
            // console.log(foundOwners);
            res.render('owners/index.ejs', {
                owners: foundOwners
            })
        }
    })
})
//owner new route, get 
router.get('/new', (req, res) => {
    res.render('owners/new.ejs')
})

//show owner page get
router.get('/:id', (req, res, next) => {
    Owner.findById(req.params.id, (err, foundOwner) => {
        if(err) next(err)
        else {
            Dog.find({ owner: req.params.id }, (dogFindErr, foundDogs) => {
                if(dogFindErr) next(dogFindErr)
                  else {
                     res.render('owners/show.ejs', {
                        owner: foundOwner,
                        dogs: foundDogs
                    })
                }
            })
        }
    })
})



//create
router.post('/', (req, res, next) => {
    Owner.create(req.body, (err, createdOwner) => {
        if(err) {
            next(err)
        } else {
            // console.log("\nhere's the created owner");
            // console.log(createdOwner);
            res.redirect('/owners')
        }
    })

})

// destroy
router.delete('/:id', (req, res, next) => {
    Owner.remove({ owner: req.params.id }, (dogDeleteError, result) => {
        if(dogDeleteError) next(dogDeleteError)
            else {
                Owner.findByIdAndRemove(req.params.id, (err, deletedOwner) => {
                    if(err) next(err)
                        else {
                            res.redirect('/owners')
                        }
                })
            }
    })
})

// edit

router.get('/:id/edit', (req, res, next) => {
    Owner.findById(req.params.id, (err, foundOwner) => {
        if(err) next(err)
            else {
                res.render('owners/edit.ejs', {
                    owner: foundOwner
                })
            }
    })
})


//update
router.put('/:id', (req, res, next) => {
    Owner.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedOwner) => {
          if(err) next(err) 
            else {
                res.redirect(`/owners/${updatedOwner._id}`)
            }
        }
    )
})


module.exports = router