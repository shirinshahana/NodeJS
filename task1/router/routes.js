var controller = require('../controller/server.js')

module.exports = function(app) {


	app.get('/viewProducts/:id', controller.viewProducts);
	app.post('/addProducts', controller.addProducts);
	app.delete('/deleteProducts/:id', controller.deleteProducts);
	app.put('/updateProducts/:id', controller.updateProducts);
}