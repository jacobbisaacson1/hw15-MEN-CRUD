const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	mood: {
		type: String,
		required: true,
	},
	cuteness: {
		type: Number,
		required: true,
	},
	hungry: {
		type: Boolean,
		required: true
	},
	scratchesNeed: {
		type: Boolean,
		required: true,
	}
})

const Dog = mongoose.model('Dog', dogSchema)
module.exports = Dog