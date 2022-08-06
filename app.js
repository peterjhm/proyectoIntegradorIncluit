require ('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config =  require('config')
const mongoose = require('mongoose')

//databases
const mongoConnectionString = config.get('dataBase.host')

mongoose.connect(mongoConnectionString,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then (()=> console.log('connected to MongoDB'))
.catch((err) =>{
  console.error(err);
  throw err
});

//routers
const addFieldRouter = require("./src/routes/index.router")
const indexRouter = require("./src/routes/index.router")
const getfieldById = require("./src/routes/index.router")
const updatefieldById = require("./src/routes/index.router")
const deletefieldById = require("./src/routes/index.router")
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use
app.use('/fields', indexRouter);
app.use('/fields', getfieldById)
app.use('/fields', addFieldRouter)
app.use('/fields', updatefieldById)
app.use('/fields', deletefieldById)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
