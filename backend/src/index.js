const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')


const app = express()
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
const port = process.env.PORT || 5000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})