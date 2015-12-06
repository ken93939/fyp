var path = require('path');
var app = require(path.resolve(__dirname, '../../server/server'));


module.exports = function(Member) {
	Member.register=function(idk,cb){
		try{
			console.log(arguments);
			// console.log(well); 		//string
			// var idk=JSON.parse(well);		//array
			console.log(idk);
			if(idk.isDriver=="yes"){		//good to go
				var veh=app.models.Vehicle;
				var data={
					"id": 0
				};
				Member.create(idk,function(err,user){
					//TODO: error handling
					if(err)
						console.log(err);
					idk.car.forEach(function(ka,index,array){
						// user.owns.create(data, function(err,own){
						// 	if(err)
						// 		console.log(err);
						// 	own.vehicles.create(ka,function(err,vehicle){
						// 		if(err)
						// 			console.log(err);
						// 	});
						// });
						veh.create(ka,function(err,vehicle){
							if(err)
								console.log(err);
							vehicle.owns.create(ka, function(err,own){
								if(err)
									console.log(err);
								own.updateAttribute("memberId",user.id,function(err,fown){
									if(err)
										console.log(err);
									if(index==array.length-1){
										cb(null,"imyourfather");
									}
								})
							});
						});
					});
				});

			}
			else{
				Member.create(idk,function(err,user){
					if(err)
						console.log(err);
					cb(null,"done2");
				});
			}
		}
		catch(err){
			console.log(err);
			cb(err,"fk");
		}
	}


	Member.remoteMethod(
		'register',
		{
			http: {path: '/register', verb: 'post'},
			accepts: {arg: 'well', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'string'}
		}
	);

};
