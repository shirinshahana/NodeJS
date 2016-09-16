var Promise = require("bluebird");
var config = require("../../config/config.json")

module.exports.check = function(newProduct) {

    return new Promise(function(resolve, reject) {
    	h = newProduct.height
    	if(h>=config.heightLowerLimit && h<=config.heightUpperLimit){
    		resolve(newProduct);
    	}
    	else
    		reject("Invalid parameters")

    })
}