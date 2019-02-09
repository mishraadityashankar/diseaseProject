const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const updateSchema = new Schema({
       headind:String,

       date:String,
  
       desc: String

      

   

});
module.exports=mongoose.model('update',updateSchema,'update');