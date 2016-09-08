var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/production');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({

	color_code: Number,
	model_no: String,
	product_id: String,
	unit: String,
	height: String,
	waist: String,
	chest: String,
	region: String,
	hip: String,
	inseam: String,
	size: String,
	product_category: String,
	brand: String
});


module.exports = mongoose.model('products', ProductSchema);