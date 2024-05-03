let express=require('express')


let router=express.Router()


let{CommentModel}=require('../controller/commentControl')
let{postController,getPost}=require('../controller/PostControl')
let {LikeControl,UnlikePost}=require('../controller/likeContol')

router.post('/comments/create',CommentModel)
router.post('/post/create',postController)
router.get('/posts',getPost)
router.post('/like/likes',LikeControl)
router.post('/like/unlike',UnlikePost)










module.exports=router