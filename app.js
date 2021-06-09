var createError = require('http-errors');
var express = require('express');


var indexRouter = require('./routes&Controllers/index');


var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


let PORT = 3000
app.listen(3000, () => {
  console.log(`Server started on port ${PORT}`)
  // console.log(process.env.NODE_ENV)
})