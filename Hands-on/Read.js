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

//Read Document
/*carModel.find(function(err, result){
	console.log("Read All Cars");
	console.log(result);
})

carModel.find({brand :'Nissan'}, function(err, result)
{	console.log("Read Nissan Cars");
	console.log(result)

})

carModel.find({brand :'Nissan'}, 'name brand', function(err, result)
{	console.log("Read Nissan Cars");
	console.log(result)

})*/


/*var query = carModel.find()
query.exec(function(err, result){
	console.log("Read All Cars");
	console.log(result);
});

carModel.find({brand : 'Nissan'}).exec(function(err, result){
	console.log("Read Nissan Cars");
	console.log(result);
});

var nissanQuery = carModel.find({brand : 'Nissan'}, 'name brand')
nissanQuery.exec(function(err, result){
	console.log("Read Nissan Cars");
	console.log(result);
});*/

/*//FindOne and FindById
carModel.findOne({brand : 'Suzuki'}, function(err, result){
	console.log("First Occurance");
	console.log(result);
})

var id = '5964d2149f08f316fc96d355';
carModel.findById(id, function(err, result){
	console.log("Matched By Id Field");
	console.log(result);
})*/

/*
//Comparison
carModel.find({price :{$gt : 700000}}).exec(function(err, result){
	console.log("Price  > 700000");
	console.log(result);
});
carModel.find({price :{$gte : 700000}}).exec(function(err, result){
	console.log("Price  >= 700000");
	console.log(result);
});
carModel.find({price :{$lt : 700000}}).exec(function(err, result){
	console.log("Price  < 700000");
	console.log(result);
});
carModel.find({price :{$lte : 700000}}).exec(function(err, result){
	console.log("Price  <= 700000");
	console.log(result);
});
carModel.find({price :{$ne : 700000}}).exec(function(err, result){
	console.log("Price  != 700000");
	console.log(result);
});
carModel.find({price :{$in : [700000, 800000]}}).exec(function(err, result){
	console.log("Price  in 700000 800000");
	console.log(result);
});
carModel.find({price :{$nin : [700000, 800000]}}).exec(function(err, result){
	console.log("Price  not in 700000 800000");
	console.log(result);
});*/

/*//where Key
carModel.where('price').gt(700000).exec(function(err, result){
	console.log("Price  > 700000");
	console.log(result);
});
carModel.where('price').gt(600000).lte(800000).exec(function(err, result){
	console.log("600000 > Price  <= 800000");
	console.log(result);
});
carModel.where('price', 700000).exec(function(err, result){
	console.log("Price  == 700000");
	console.log(result);
});*/

//Sort & Limit
carModel.find().sort({name :'desc'}).limit(1).exec(function(err, result){
	if(err){
		console.log("Error " + err)
	}else 
	{
		console.log(result);
	}
});