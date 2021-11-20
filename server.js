const express = require('express');

const app = express();

const ejs = require('ejs') ;
const path = require('path');
const expresslayot = require('express-ejs-layouts');
const { dirname } = require('path');
const PORT = process.env.PORT || 3000;
  
app.get('/', (req,res) => {

  res.render('home');

})

app.use(expresslayot); 
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs');
app.listen( PORT ,() => {
    console.log("listen the server on port 3000");
})