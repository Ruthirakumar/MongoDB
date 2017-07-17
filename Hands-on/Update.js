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

//Update 
/*carModel.find({name : 'Celerio', brand : 'Suzuki'},function(err,celerioCar){
	if(!err && celerioCar)
	{
		console.log(celerioCar);
		celerioCar[0].price = 550000;
		celerioCar[0].save(function(err)
		{  
			if(err)
			{
				console.log(err)
			}
			else {
				console.log("Celerio Car Updated")
			}
			
		})
	}
})*/

/*var id = '5964d2149f08f316fc96d355';
carModel.findById(id).exec(function(err, celerioCar){
	if(!err && celerioCar)
	{
		console.log(celerioCar);
		celerioCar.price = 500000;
		celerioCar.name = "Celerio";
		celerioCar.brand = "Suzuki";
		celerioCar.save(function(err)
		{  
			if(err){
				console.log(err)
			}
			else {
				console.log("Celerio Car Updated")
			}
			
		})
	}
})*/

/*var condition = {
	_id : '5964d2149f08f316fc96d355'
}

var update = {
	price : 800000
}

var options = {
	upsert : true, //create new doc, if not exist (Def: false)
	overwrite : true // Overwrite read only (Def : false)
}

carModel.update(condition, update, options, function(err, res){
	if(err){
		console.log("Update Failed" + err)
	}
	else {
		console.log(res);
	}
})*/

var id = '596b7817bf2c61073814bb25';

var update = {
	price :700000
}

var options = {
	upsert : true, //create new doc, if not exist (Def: false)
	new : true, // return updated records (Def: True)[False -> old record]
	select :'name brand' //List of fields to be required
}

carModel.findByIdAndUpdate(id, update, options, function(err, res){
	if(err){
		console.log("Update Failed" + err)
	}
	else {
		console.log(res);
	}
})
