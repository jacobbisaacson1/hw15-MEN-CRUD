const express = require('express')
const router = express.Router()
// const Dog = require('../models/dog')
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
            res.render('owners/show.ejs', {
                owner: foundOwner
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
    Owner.findByIdAndRemove(req.params.id, (err, deletedOwner) => {
        if(err) nest(err)
            else{
                res.redirect('/owners')
            }
    })
})

// article index route: GET /articles
// router.get('/', async (req, res, next) => {
//     try {
//         const foundOwners = await Owner.find({}).populate('dog')
//         res.render('owners/index.ejs', {
//             owners: foundOwners
//         })
//     } catch (err) {
//         next(err)
//     }

// }) // index route

// // DONE
// // article new route: GET /articles/new
// router.get('/new', async (req, res, next) => {
//     try {
//         const foundDogs = await Dog.find({}).populate('owner')
//         res.render('owners/new.ejs', {
//             dogs: foundDogs
//         })
//     } catch (err) {
//         next(err)
//     }
// })



// // DONE
// // article show route: GET /articles/:id
// router.get('/:id', async (req, res, next) => {
//     try {
//         // get article with author populated
//         const foundArticle = await Article.findById(req.params.id).populate('author')
//         // render template
//         res.render('articles/show.ejs', {
//             article: foundArticle
//         })
//     } catch (error) {
//         next(error)
//     }

// }) // article show: GET /articles/:id


// // DONE
// // article create route: POST /articles
// router.post('/', async (req, res, next) => {
//     try {
//         const createdOwner = await Owner.create(req.body)
//         res.redirect('/owners')
//     } catch (err) {
//         next(err)
//     }
// })

// // article destroy route: DELETE /articles/:id
// router.delete('/:id', async (req, res, next) => {
//     try {
//         const deletedOwner = await Owner.findByIdAndRemove(req.params.id)
//         res.redirect('/dogs/' + deletedOwner.dog)
//     } catch (err) {
//         next(err)
//     }
// })

// router.get('/:id/edit', async (req, res, next) => {
//     try {
//         const foundOwner = await Owner.findById(req.params.id)
//         const foundDogs = await Dog.find({}).populate('dogs')
//         res.render('owners/edit.ejs', {
//             owner: foundOwners,
//             dogs: foundDogs
//         })
//     } catch (err) {
//         next(err)
//     }
// })


// // DONE
// // article update route: PUT /articles/:id
// router.put('/:id', async (req, res, next) => {
//     try {
//         const updatedOwner = await Owner.findByIdAndUpdate(req.params.id, req.body)
//         res.redirect('/owners/' + updatedOwner._id)
//     } catch (err) {
//         next(err)
//     }
// })


module.exports = router