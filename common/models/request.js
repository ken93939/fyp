var path = require('path');
var app = require(path.resolve(__dirname, '../../server/server'));
var loopback=require('loopback');

module.exports = function(Request) {
	Request.addRequest=function(idk,cb){
		try{
			var ctx=loopback.getCurrentContext();
			// console.log(ctx);
			var accessToken=ctx.get('accessToken');
			// console.log(accessToken);
	    	var currentUser = ctx && ctx.get('currentUser');
	    	console.log('currentUser.username: ', currentUser);

	    	idk["memberId"]=currentUser.id;
	    	idk["time"]=new Date();
	    	if(idk.destination_name=="Hang Hau"){
	    		idk["pickup_name"]="North Gate";
	    	}
	    	else{
	    		idk["pickup_name"]="South Gate";
	    	}

	    	Request.create(idk,function(err,request){
	    		if(err)
	    			console.log(err);
	    	});
			cb(null,"fuck you");
		}
		catch(error){
			console.log(error);
		}
	}

	Request.remoteMethod(
		'addRequest',
		{
			http: {path: '/addRequest', verb: 'post'},
			accepts: {arg: 'idk', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'string'}
		}
	);
};
