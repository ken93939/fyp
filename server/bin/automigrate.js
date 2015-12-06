var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var loopback = require('loopback');

var dataSource = app.dataSources.mySQL;

var destination_array=[
{
	"location_name": "hkust"
},
{
	"location_name": "hk"
},
{
  "location_name": "hku"
}
];

var member_array=[
{
  "first_name": "ken",
  "last_name": "kwok",
  "phone_number": 51191726,
  "gender": "male",
  "gender_preference": "yes",
  "authorized": "yes",
  "isDriver": "yes",
  "password": "123456",
  "email": "ken@ken.com"
},
{
  "first_name": "sam",
  "last_name": "wong",
  "phone_number": 999123,
  "gender": "male",
  "gender_preference": "yes",
  "authorized": "yes",
  "isDriver": "yes",
  "password": "123456",
  "email": "sam@sam.com"
}
];

var join_array=[
{
  "id": 1
},
{
  "id": 2
}
];

var own_array=[
{
  "id": 1,
  "memberId": 1,
  "license_number": "D7689"
},
{
  "id": 2,
  "memberId": 1,
  "license_number": "FUCK FYP"
}
]

var pickup_array=[
{
  "location_name": "Choi Hung"
},
{
  "location_name": "Hang Hau"
}
]

var ride_array=[
{
  "id": 1,
  "time": new Date("December 1, 2015 11:13:00"),
  "seat_number": 3,
  "beforeArrive": 15
},
{
  "id": 2,
  "time": new Date(),
  "seat_number": 2,
  "beforeArrive": 10
}
]

var vehicle_array=[
{
  "license_number": "D7689",
  "color": "black",
  "maker": "audi"
},
{
  "license_number": "FUCK FYP",
  "color": "blue",
  "maker": "tesla"
}
]

var request_array=[
{
  "id": 1,
  "time": new Date("December 1, 2015 11:13:00")
},
{
  "id": 2,
  "time": new Date()
}
]


dataSource.automigrate('destination', function(err) {
  if(err) throw err;
  console.log("Destination!");

  var destination=app.models.destination;
  var count=destination_array.length;
  destination_array.forEach(function(Destination){
    destination.create(Destination,function(err,record){
      if(err) 
        return console.log(err)
      console.log("done",record);
      count--;
      if(count==0){
        console.log("ko");
        //dataSource.disconnect(); 
      }
    })

  });
});

dataSource.automigrate('Member', function(err) {
  if(err) throw err;
  console.log("Member!");

  var member=app.models.Member;
  var count=member_array.length;
  member_array.forEach(function(Mem){
    member.create(Mem,function(err,record){
      if(err)
        return console.log(err)
      console.log("member_done",record);
      count--;
      if(count==0){
        console.log("member_ko");
      }

    })
  });
});


dataSource.automigrate('Join', function(err) {
  if(err) throw err;
  console.log("Join!");

  var join=app.models.Join;
  var count=join_array.length;
  join_array.forEach(function (Jo){
    join.create(Jo,function(err,record){
      if(err)
        return console.log(err)
      console.log("join_done",record);
      count--;
      if(count==0){
        console.log("join_ko");
      }

    });
  });
});

dataSource.automigrate('Own', function(err) {
  if(err) throw err;
  console.log("Own!");
  var own=app.models.Own;
  var count=own_array.length;
  own_array.forEach(function(Own){
    own.create(Own,function(err,record){
      if(err)
        return console.log(err);
      console.log("own_done",record);
      count--;
      if(count==0){
        console.log("own_ko");
      }
    })
  });
});

dataSource.automigrate('pickup', function(err) {
  if(err) throw err;
  console.log("Pickup!");
  var pickup=app.models.pickup;
  var count=pickup_array.length;
  pickup_array.forEach(function(Pick){
    pickup.create(Pick,function(err,record){
      if(err)
        return console.log(err);
      console.log("pickup_done",record);
      count--;
      if(count==0){
        console.log("pickup_ko");
      }
    })
  });
});

dataSource.automigrate('Ride', function(err) {
  if(err) throw err;
  console.log("Ride!");
  var ride=app.models.Ride;
  var count=ride_array.length;
  ride_array.forEach(function(Ride){
    ride.create(Ride,function(err,record){
      if(err)
        return console.log(err);
      console.log("ride_done",record);
      count--;
      if(count==0){
        console.log("ride_ko");
      }
    })
  });
});

dataSource.automigrate('Vehicle', function(err) {
  if(err) throw err;
  console.log("Vehicle!");
  var vehicle=app.models.Vehicle;
  var count=vehicle_array.length;
  vehicle_array.forEach(function(Vehicle){
    vehicle.create(Vehicle,function(err,record){
      if(err)
        return console.log(err)
      console.log("vehicle_done",record);
      count--;
      if(count==0){
        console.log("vehicle_ko");
      }
    });
  });
});

dataSource.automigrate('request', function(err) {
  if(err) throw err;
  console.log("Request!");
  var request=app.models.request;
  var count=request_array.length;
  request_array.forEach(function(Req){
    request.create(Req,function(err,record){
      if(err)
        return console.log(err);
      console.log("Request_done",record);
      count--;
      if(count==0){
        console.log("request_ko");
      }
    });
  });
});