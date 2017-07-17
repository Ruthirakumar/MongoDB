var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/test",{});

var Schema = mongoose.Schema;

var carSchema = new Schema({ 
	brand: String, 
	color: String, 
	name : String,
	price: Number

});

carSchema.add({variant : String});

var carModel = mongoose.model('car_lists', carSchema);

// Create document
var car = new carModel({name :'Baleno', brand : 'Baleno', color:'Blue', variant :'ZXI', price : 500000})
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


