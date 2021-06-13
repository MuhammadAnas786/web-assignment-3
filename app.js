var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var indexRouter = require('./routes&Controllers/index');
const path = require("path");

var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  next()
})

app.use(cors())
app.use('/api/v1/', indexRouter);

  // Set static folder
  app.use(express.static("client"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "index.html"))
  );


let PORT = 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${PORT}`)
  // console.log(process.env.NODE_ENV)
})