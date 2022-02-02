const express  = require("express");

const app = express()
const port = 3000

app.listen(port,()=>{
    console.log(`start http://localhost:${port}`)
})

app.get('/home',(req,res) =>{
    res.send('Hello Home page')
})


