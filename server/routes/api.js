const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User =require('../models/user');



const db= "mongodb://aditya:sriganesh3@ds123465.mlab.com:23465/disease"
mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true },function(err){
  if(err){
  	console.error("error! "+err);
  }
});






router.get('/user',function(req,res){
console.log('get request for all user');
User.find({})
.exec(function(err,user){
	if(err){console.log("error in retrieving user");
    }
	else{
		res.json(user);
	}
   });
});   

router.get('/user/:id',function(req,res){
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


router.post('/adduser',function(req,res){
	console.log('add a user');
	var newUser= new User();
	newUser.name=req.body.name;
	newUser.age=req.body.age;
	newUser.save(function(err,insertedUser){
		if(err){
			console.log('error saving user');
		}
		else
			res.json(insertedUser);
	});
});


router.put('/updateuser/:id',function(req,res){
	console.log('update user');
	User.findByIdAndUpdate(req.params.id,
     {
     	$set : { name:req.body.name,age : req.body.age}
     },
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
    


    router.delete('/delete/:id',function(req,res){
    	console.log('delete user');
    	 User.findByIdAndRemove(req.params.id,function(err,deleteUser){
    	 	if(err)
    	 		{res.send("error deleting user");}
    	 	else
    	 		{res.json({ message: 'data Deleted' });}
    	 });
    });



   
   







module.exports=router;