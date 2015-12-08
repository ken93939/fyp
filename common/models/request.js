var path = require('path');
var app = require(path.resolve(__dirname, '../../server/server'));
var loopback=require('loopback');
var req=require('request');

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

	//userId,matchicon,ridetime,destination
	//header: X-Ionic-Application-Id: d38fa26f
	//Content type: application/json
	Request.push=function(ride,cb){
		try{
			var obj={};
			var Ride=app.models.Ride;
			Ride.findOne({where: {"id": ride.id}},function(err,rid){
				if(err){
					console.log(err);
					cb(err,null);
				}
				console.log(rid);
				rid.member(function(err,Mem){
					if(err){
						console.log(err);
						cb(err,null);
					}
					var array=[];
					console.log(Mem.deviceToken);
					array.push(Mem.deviceToken+"");
					obj["tokens"]=array;

					obj["notification"]={
						"alert":"FUCKU",
						"matchicon": "FUCKUPKHIN",
						"ridetime": ride.time,
						"destination": ride.destination_name
					};

					var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
					var auth="basic "+Base64.encode("83203dab26c5e0e1904d2d822f6eef3efb4eebc0b16bea7d"+":");

					console.log(obj);

					req.post({
						url: "https://push.ionic.io/api/v1/push",
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'X-Ionic-Application-Id': "2d9c3ded",
							'Authorization': auth
						},
						json: obj
					},function(err,res,body){
						if(err){
							console.log("req error:",err);
							cb(err,null);
						}
						console.log(res);
						console.log(res.statusCode);
						cb(null,"OK");
					});
				});
			});


		}
		catch(err){
			console.log(err);
		}
	}

	Request.remoteMethod(
		'addRequest',
		{
			http: {path: '/addRequest', verb: 'post'},
			accepts: {arg: 'ride', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'string'}
		}
	);

	Request.remoteMethod(
		'push',
		{
			http: {path: '/push', verb: 'post'},
			accepts: {arg: 'idk', type: 'object', http:{source:'body'}},
			returns: {arg: 'status', type: 'string'}
		}
	);
};
