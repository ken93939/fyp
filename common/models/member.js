var path = require('path');
var app = require(path.resolve(__dirname, '../../server/server'));


module.exports = function(Member) {
	Member.register=function(idk,cb){
		try{
			// console.log(arguments);
			// console.log(well); 		//string
			// var idk=JSON.parse(well);		//array
			// console.log(idk);
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
										cb(null,user);
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
					cb(null,user);
				});
			}
		}
		catch(err){
			console.log(err);
			cb(err,"fk");
		}
	}

	Member.afterRemote('register',function(ctx,obj,next){
		try{
			console.log('> user.afterRemote triggered');

			Member.findById(obj.status.id,function(err,mem){
				if(err)
					console.log(err);
				var options = {
					type: 'email',
					to: "kenkwoktszting@gmail.com",
					from: 'hkustfyp2016@gmail.com',
					subject: 'Thanks for registering.',
					user: mem,
					template: path.resolve(__dirname, '../../server/views/verify.ejs'),
					redirect: '/verified'	//TODO:change it
				};
				console.log(mem);
				mem.verify(options, function(err, response, next) {
					if (err){
						console.log(err);
						if(next!=null)
							return next(err);
					}
					console.log('> verification email sent:', response);
				});	
			})	//TODO: callback?
			next();
		}
		catch(err){
			console.log(err);
		}
	})


	Member.remoteMethod(
		'register',
		{
			http: {path: '/register', verb: 'post'},
			accepts: {arg: 'well', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'object'}
		}
	);

};
