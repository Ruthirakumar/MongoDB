var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/test",{});

var Schema = mongoose.Schema;

var nameStandard =/^[a-z]$/;

var carSchema = new Schema({ 
	brand: {type :String, required: [true, 'Brand name is mandatory'] }, 
	name : {type :String, match : [nameStandard, 'Pattern is not matched']},
	color: {type :String, enum :['Blue', 'White', 'Red']},
	price: {type :Number, min :[300000, 'Minimum price should be 300000'], max : 1000000}

});

carSchema.path('color').required(true,'Color is Required');

var carModel = mongoose.model('validation_demo', carSchema);

// Create document
var car = new carModel({brand : 'Hundai', name :'t',  color:'Red', price : 500000})
car.save(function(err,doc,numberOfRowAffected ){
	if(err)
	{
		console.log(err)
	}
	else if(numberOfRowAffected == 1)
	{
		console.log(doc + "is created");
	}
	else {
		console.log("Document not inserted");
	}

}); 


