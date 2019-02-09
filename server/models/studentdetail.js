const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const userSchema = new Schema({


   simage: String,

   name:String,
   age: String,
   class: String,
   section: String,
   rollno: String,
   fname:String,
   mname: String,
   dob:String,
   gender:String,
   hobby:String,

   email:String,
   fmail:String,
   memail:String,
   phno:String,
   fno:String,
   mno:String,

   address:String,
   city:String,
   state:String,
   pincode:String,

   bloodgr:String,
   vision:String,
   mentalstate:String,
   allergies:String,
   weight:String,
   height:String,
   dentalstate:String,
   hearing:String,
   pulserate:String,
   bloodpressure:String
  
});
module.exports=mongoose.model('user',userSchema,'user');