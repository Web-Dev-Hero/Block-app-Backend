let express=require('express')
let app=express()
let router=require('./rout/router')

require('dotenv').config()

let dbconnect=require('./config/database')

app.use(express.json())

let port=process.env.PORT || 5000

app.use('/api/v1',router)

app.listen(port,()=>{
  console.log(`runing your server at portno->${port}`)
})


dbconnect()


