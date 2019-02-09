const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const feedSchema = new Schema({
      fimage:String,
  
      fname: String,

      desc: String

   

});
module.exports=mongoose.model('feed',feedSchema,'feed');