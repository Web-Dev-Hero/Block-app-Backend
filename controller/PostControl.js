let Post=require('../model/PostModel')


exports.postController=async(req,res)=>{

try{

  let{title,body}=req.body;

  let post1= new Post({title,body})

  let result= await post1.save()

res.status(200).json({

  post:result,


})
  

}


catch(err){


  return res.status(500).json({

    data:"while error craerting post data"
  })
}




}




exports.getPost=async(req,res)=>{
try{




let resp=await Post.find().populate('comments').exec()

res.status(200).json({
  resp,
})




}

catch(err){


  return res.status(500).json({

    data:"while error craerting get data"
  })
}




}