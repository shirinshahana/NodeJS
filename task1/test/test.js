var chai = require('chai');
var expect = chai.expect;
var superagent = require('superagent')
var api = require("./api.js");


var product = {
		"color_code" : "20",
        //"model_no" : "2",
        "product_id" : "1777548",
        "unit" : "cm",
        "height" : "165",
        "waist" : "60",
        "chest" : "75",
        "region" : "all",
        "hip" : "65",
        "inseam" : "65",
        "size_asia" : "m",
        "size_eu" : "-",
        "size_us" : "-",
        "product_category" : "tops",
        "brand" : "uq"
}

describe("task1",function(){
	it("should return 200 if there is product_id",function(done){

		superagent.get('http://localhost:5629/viewProducts/1777548').end(function(err, res) {
          
        	expect(res.status).to.equal(200);
          	done();
        });
	});
	it("should return 404 if there is no product_id",function(done){

		superagent.get('http://localhost:5629/viewProducts/').end(function(err, res) {
          
        	expect(res.status).to.equal(404);
          	done();
        });
	});

	it("should return 404 if there is invalid product_id",function(done){

		superagent.get('http://localhost:5629/viewProducts/546').end(function(err, res) {
          
        	expect(res.status).to.equal(404);
          	done();
        });
	});
	it("should return 400 if there is mandatory field missing",function(done){

		superagent.post('http://localhost:5629/addProducts/').send(product).end(function(err, res) {
          
        	expect(res.status).to.equal(400);
          	done();
        });


	});



});
