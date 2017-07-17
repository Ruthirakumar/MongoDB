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

/*var carModel = mongoose.model('car_lists', carSchema);

var condition  = {
	name :'Celerio'
}; 

carModel.remove(condition, function(err){
	if(err){
		console.log("Delete Failed" + err)
	}
})*/

/*var carModel = mongoose.model('car_lists', carSchema);

var condition  = {
	name :'Baleno'
}; 

var query = carModel.remove(condition);

query.exec(function(err){
	if(err){
		console.log("Delete Failed" + err)
	}
})*/

var carModel = mongoose.model('car_lists', carSchema);

var id = "596b86762c9fc400a41c340b";

var options  = {
	select :'name brand'
};

carModel.findByIdAndRemove(id, options, function(err,res){
	if(err){
		console.log("Delete Failed" + err)
	}
	else {
		console.log("Res " + res)
	}
});

