var path = require('path');
var app = require(path.resolve(__dirname, '../../server/server'));
var loopback=require('loopback');

module.exports = function(Ride) {
	Ride.addRide=function(idk,cb){
		try{
			var ctx=loopback.getCurrentContext();
			// console.log(ctx);
			var accessToken=ctx.get('accessToken');
			// console.log(accessToken);
			var currentUser = ctx && ctx.get('currentUser');
			// console.log('currentUser.username: ', currentUser);

			var d=new Date();
			idk["time"]=new Date(d.getTime()+idk.beforeArrive*60000);

			idk["memberId"]=currentUser.id;
			if(idk.destination_name=="Hang Hau"){
	    		idk["pickup_name"]="North Gate";
	    	}
	    	else{
	    		idk["pickup_name"]="South Gate";
	    	}
	    	
			var ownModel=app.models.Own;
			ownModel.find({"memberId": currentUser.id, "license_number": idk.license_number},function(err,owns){
				if(err)
					console.log(err);
				if(owns[0]!=null){
					idk["ownId"]=owns[0].id;
					Ride.create(idk,function(err,ride){
						if(err)
							console.log(err);
						cb(null,ride);
					});
				}
				else{
					console.log("well..");
					cb(null,"well");
				}
			});
		}
		catch(err){
			cb(null,err);
		}

	}
	Ride.push=function(idk,cb){

	}
	Ride.remoteMethod(
		'push',
		{
			http: {path: '/push', verb: 'post'},
			accepts: {arg: 'well', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'string'}
		}
	);

	Ride.remoteMethod(
		'addRide',
		{
			http: {path: '/addRide', verb: 'post'},
			accepts: {arg: 'well', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'object'}
		}
	);
};
