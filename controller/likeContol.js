let Like=require('../model/LikeModel')
let Post=require('../model/PostModel')

exports.LikeControl=async(req,res)=>{

try{

let{post,user}=req.body;


let like= new Like({
  post,user
})

let savedLike=await like.save();

//post,{$push:{comments:SaveComment._id}},{new:true})
let updatelike=  await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
.populate("likes").exec()
res.status(200).json({
  post:updatelike
})

}


catch(err){
  res.status(500).json({
    data:"errr while creating likes",
    message:err.message
  })
}



}



// unlike post


exports.UnlikePost=async(req,res)=>
{


  try
  
  {

    let {post,likes}=req.body;

    let deleteLike= await Like.findOneAndDelete({post:post,_id:likes})


    let UpdatePost= await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true})

   
    res.status(200).json({
      post:UpdatePost,
    })








  }


  catch(err){
    res.status(500).json({
      data:"errr while creating unlike",
      message:err.message
    })
  }







}


