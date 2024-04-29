
const express = require("express")
const app = express()


/**
* this route for Home Page
*/


app.get('/', (req,res)=> {
   res.send("hello to the vercel")
})

/**

*/
app.listen(3000, ()=> {
    console.log('this application is wokring on port 3000')
})