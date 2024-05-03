let mongoose=require('mongoose');
let Schema=mongoose.Schema

let LikeModel=new Schema({

post:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Post"
},

user:{
  type:String,
  required:true,
}



})

module.exports=mongoose.model("Like",LikeModel)