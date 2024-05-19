const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const path = require('path')
const cors=require('cors')

const indexRouter=require('./api/index')


//initialized express app
const app=express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use(cors())

//for api routes
app.use('/api',indexRouter)

//connect to database and listen to port
port=process.env.PORT||3030
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
          console.log('connected to db')

          // listening to port
          app.listen(port,()=>{
            console.log(`listening to port ${port}`)
            })
        })
        .catch((err)=>{
          console.log(err)
        })

        
