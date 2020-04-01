const mongoose = require('mongoose')

const brunaSchema = new mongoose.Schema({
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
	},
	imgURL: String
})

const Bruna = mongoose.model('Bruna', brunaSchema)
module.exports = Bruna