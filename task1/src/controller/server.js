var database = require("../model/db.js");
var ObjectID = require('mongodb').ObjectID;

var check = require("../services/check.js")




module.exports.viewProducts = function(req, res) {
	id = req.params.id;
	database.find({
		product_id: id
	}, function(err, result) {
		if (err){

			throw err;
		}
		if (result.length == 0)
			res.status(404).json({'status' : 404, 'message': "The given id doesn't exists."})
		else
			res.json({'status' : 200, 'message': "Success",'result':result})
	});
	}


module.exports.addProducts = function(req, res) {
	var newProduct = req.body;
	


	if (!(newProduct.color_code && newProduct.model_no && newProduct.product_id && newProduct.unit && newProduct.height && newProduct.waist && newProduct.chest && newProduct.region && newProduct.hip && newProduct.inseam && newProduct.size_asia && newProduct.size_us && newProduct.size_eu && newProduct.product_category && newProduct.brand)) {
		res.status(400).json({'status' : 400, 'message': "All fields are mandatory"})
	} else {
		check.check(newProduct)
		.then(function(newProduct){
			var newp = new database(newProduct);
		newp.save(function(err) {
			if (err)
				throw err;

			res.json({'status' : 200, 'message': "Success",'result':newp});

		})}, function(err){res.status(400).json()
			//,
			
	
	
	
	}

	)

	}
};





module.exports.deleteProducts = function(req, res) {
	id = req.params.id;
	if (id.length != 24)
		res.status(400).json({'status' : 400, 'message': "Invalid id"});
	else
		database.remove({
			_id: new ObjectID(id)
		}, function(err, doc) {
			if (err)
				throw err;
			if (doc.result.n == 0)
				res.status(404).json({'status' : 404, 'message': "The given id doesn't exists."})
			else
				res.json({'status' : 404, 'message': "Deletion Successful"})

		})
};





module.exports.updateProducts = function(req, res) {
	id = req.params.id;
	updateDoc = req.body
	if (id.length != 24)
		res.status(400).json({'status' : 400, 'message': "Invalid id"});
	else {
		database.update({
			_id: new ObjectID(id)
		}, {
			$set: updateDoc
		}, function(err, doc) {
			if (err)
				throw err;
			if (!doc.n)
				res.status(404).json({'status' : 404, 'message': "The given id doesn't exists."})
			else
				database.find({
					_id: new ObjectID(id)
				}, function(err, result) {
					if (err)
						throw err;



					res.json({'status' : 200, 'message': "Updation Successful",'result':result})

				});
		})
	}

}