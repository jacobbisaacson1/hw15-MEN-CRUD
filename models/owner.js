const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	scratchesToGive: {
		type: Number,
		required: true,
  	}, 
  	posted: {
    	type: Date,
    	default: Date.now
  	},
  	dog: {
    	type: mongoose.Schema.Types.ObjectId,
    	required: true,
    	ref: 'Dog'
  }
})

const Owner = mongoose.model('Owner', ownerSchema)
module.exports = Owner




