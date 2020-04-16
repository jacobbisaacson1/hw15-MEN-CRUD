const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
	dogName: {
		type: String,
		required: true,
	},
	mood: {
		type: String,
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Owner"
	}
})

const Dog = mongoose.model('Dog', dogSchema)
module.exports = Dog