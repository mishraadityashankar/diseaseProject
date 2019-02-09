const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User =require('../models/studentdetail');
const Feed =require('../models/feed');
const Update =require('../models/updates');
const multer = require('multer');
const upload = multer({dest:'uploads/'});




const db= "mongodb://aditya:sriganesh3@ds127115.mlab.com:27115/hackathon"

mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true },function(err){
  if(err){
  	console.error("error! "+err);
  }
});



//get feeds
router.get('/',function(req,res){
	console.log('get request for feeds');
	Feed.find({})
	.exec(function(err,feed){
		if(err){console.log("error in retrieving feeds");
		}
		else{
			res.json(feed);
		}
	   });
	});   



//add feed
router.post('/addfeed',upload.single('fimage'),function(req,res){
	console.log('feed added');
  var newFeed= new Feed();
  newFeed.fimage= req.file.path; 
  newFeed.fname=req.body.fname;
  newFeed.desc=req.body.desc;

	newFeed.save(function(err,insertedFeed){
		if(err){
			console.log('error saving feed');
		}
		else
			res.json(insertedFeed);
	});
});
 //view studentlist
 
router.get('/liststudent',function(req,res){
	console.log('get request for students');
	User.find({})
	.exec(function(err,user){
		if(err){console.log("error in retrieving students");
		}
		else{
			res.json(user);
		}
	   });
	});   

//delete student


    router.delete('/liststudent/delete/:id',function(req,res){
    	console.log('delete user');
    	 User.findByIdAndRemove(req.params.id,function(err,deleteUser){
    	 	if(err)
    	 		{res.send("error deleting user");}
    	 	else
    	 		{res.json({ message: 'data Deleted' });}
    	 });
    });









//add student
router.post('/adduser',upload.single('simage'),function(req,res){
	console.log('add a user');
	var newUser= new User();
	newUser.simage=req.file.path;
	newUser.name=req.body.name;
	newUser.age=req.body.age;
	newUser.class=req.body.class;
	newUser.section=req.body.section;
	newUser.rollno=req.body.rollno;
	newUser.fname=req.body.fname;
	newUser.mname=req.body.mname;
	newUser.dob=req.body.dob;
	newUser.gender=req.body.gender;
	newUser.hobby=req.body.hobby;
    newUser.email=req.body.email;
    newUser.fmail=req.body.fmail;
    newUser.memail=req.body.memail;

    newUser.phno=req.body.phno;
    newUser.fno=req.body.fno;
    newUser.mno=req.body.mno;
    newUser.address=req.body.address;
    newUser.city=req.body.city;
    newUser.state=req.body.state;
    newUser.pincode=req.body.pincode;
    newUser.bloodgr=req.body.bloodgr;
    newUser.vision=req.body.vision;
    newUser.mentalstate=req.body.mentalstate;
    newUser.allergies=req.body.allergies;
    newUser.weight=req.body.weight;
    newUser.height=req.body.height;
    newUser.dentalstate=req.body.dentalstate;
    newUser.hearing=req.body.hearing;
    newUser.pulserate=req.body.pulserate;
    newUser.bloodpressure=req.body.bloodpressure;

	
     newUser.save(function(err,insertedUser){
		if(err){
			console.log('error saving user');
		}
		else
			res.json(insertedUser);
	});
});


//get full details of student
router.get('/liststudent/:id',function(req,res){
console.log('get request for one user');
User.findById(req.params.id)
.exec(function(err,user){
	if(err){console.log("error in retrieving user");
    }
	else{
		res.json(user);
	}
   });
});



// update student details
router.put('/liststudent/update/:id',function(req,res){
	console.log('update user');

	var ObjectforUpdate={};

	if( req.body.name) ObjectforUpdate.name= req.body.name;
	if( req.body.age) ObjectforUpdate.age= req.body.age;
	if( req.body.class) ObjectforUpdate.class= req.body.class;
	if( req.body.section) ObjectforUpdate.section= req.body.section;
	if( req.body.rollno) ObjectforUpdate.rollno= req.body.rollno;
	if( req.body.fname) ObjectforUpdate.fname=req.body.fname;
	if( req.body.mname) ObjectforUpdate.mname= req.body.mname;
	if( req.body.dob) ObjectforUpdate.dob=req.body.dob;
	if( req.body.gender) ObjectforUpdate.gender=req.body.gender;
	if( req.body.hobby) ObjectforUpdate.hobby=req.body.hobby;

	if( req.body.email) ObjectforUpdate.email=req.body.email;
	if( req.body.fmail) ObjectforUpdate.fmail=req.body.fmail;
	if( req.body.memail) ObjectforUpdate.memail=req.body.memail;
	if( req.body.phno) ObjectforUpdate.phno=req.body.phno;
	if( req.body.fno) ObjectforUpdate.fno=req.body.fno;
	if( req.body.mno) ObjectforUpdate.mno=req.body.mno;

	if( req.body.address) ObjectforUpdate.address=req.body.address;
	if( req.body.city) ObjectforUpdate.city=req.body.city;
	if( req.body.state) ObjectforUpdate.state=req.body.state;
	if( req.body.pincode) ObjectforUpdate.pincode=req.body.pincode;

	if( req.body.bloodgr) ObjectforUpdate.bloodgr=req.body.bloodgr;
	if( req.body.vision) ObjectforUpdate.vision=req.body.vision;
	if( req.body.mentalstate) ObjectforUpdate.mentalstate=req.body.mentalstate;
	if( req.body.allergies) ObjectforUpdate.allergies=req.body.allergies;
	if( req.body.weight) ObjectforUpdate.weight=req.body.weight;
	if( req.body.height) ObjectforUpdate.height=req.body.height;
	if( req.body.dentalstate) ObjectforUpdate.dentalstate=req.body.dentalstate;
	if( req.body.hearing) ObjectforUpdate.hearing=req.body.hearing;
	if( req.body.pulserate) ObjectforUpdate.pulserate=req.body.pulserate;
	if( req.body.bloodpressure) ObjectforUpdate.bloodpressure=req.body.bloodpressure;

	console.log(ObjectforUpdate);

	objForUpdate = { $set: ObjectforUpdate }

/* collection.update({_id:ObjectId(req.session.id)}, ObjectforUpdate }) */

	User.findByIdAndUpdate(req.params.id,
     
			objForUpdate,
     {
     	new:true
     },
     function(err,updateUser){
     	if(err) {
     		res.send("error updating video");
     	}
     	else{
     		res.json(updateUser);
     	}
     }

    ); 
  });
// get update

router.get('/getupdate',function(req,res){
	console.log('get request for update');
	Update.find({})
	.exec(function(err,update){
		if(err){console.log("error in retrieving updates");
		}
		else{
			res.json(update);
		}
	   });
	});   


//post update
 router.post('/newupdate',function(req,res){
	console.log('add an update');
	var newUpdate= new Update();
	newUpdate.heading=req.body.heading;
	newUpdate.date=req.body.date;
	newUpdate.desc=req.body.desc;
	newUpdate.save(function(err,insertedUpdate){
		if(err){
			console.log('error saving update');
		}
		else
			res.json(insertedUpdate);
	});
});









module.exports=router;