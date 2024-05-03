let mongoose=require('mongoose');
require('dotenv').config()
let dbconnect=()=>{
  mongoose.connect(process.env.DATABASE_URL)

.then(()=>console.log('your connection is successfully connect to mongodb'))
.catch((error)=>{console.log('not coonect in mongodb')
console.error(error)
process.exit(1)
})




}
module.exports=dbconnect;