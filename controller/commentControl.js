let Comment=require('../model/CommentModel')
let Post=require('../model/PostModel')


exports. CommentModel=async(req,res)=>{

try{

let {post,user,body}=req.body
let comment=new Comment({
  post,user,body
})

let SaveComment= await comment.save()



let UpdatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:SaveComment._id}},{new:true})
.populate('comments')
.exec()

res.status(200).json({
  post:UpdatedPost,
})


}

catch(err){

  return res.status(500).json({
    err:"error while creating comments",
    message:err.message
  })




}




}