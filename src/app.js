
const express = require("express")
const app = express()
const path = require('path');

/**
* this route for Home Page
*/


module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'final.js',
    },
    target: 'node',
  };

app.get('/', (req,res)=> {
   res.send("hello to the vercel")
})

/**

*/
app.listen(3000, ()=> {
    console.log('this application is wokring on port 3000')
})