let Like=require('../model/LikeModel')
let Comment=require('../model/CommentModel')



let mongoose=require('mongoose');
let Schema=mongoose.Schema

let PostModel= new Schema({

title:{
  type:String,
  required:true,
},
body:{
  type:String,
  required:true,
},

likes:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Like"


}],

comments:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Comment"
}]




})


module.exports=mongoose.model('Post',PostModel)
