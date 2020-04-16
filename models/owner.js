const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	scratches: {
		type: String,
		required: true,
  	}
  // 	dog: {
  //   	type: mongoose.Schema.Types.ObjectId,
  //   	required: true,
  //   	ref: 'Dog'
  // }
})

const Owner = mongoose.model('Owner', ownerSchema)
module.exports = Owner




