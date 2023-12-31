var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//cross-platform
var bodyparser=require("body-parser")
var cors = require('cors')

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var reportRouter = require('./routes/Reports')
var authRouter = require('./routes/Auth');
var projectRouter = require('./routes/Projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyparser.json()); // Parse JSON bodies

//API endpoint
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reports' , reportRouter);
app.use('/authenticate', authRouter);
app.use('/projects', projectRouter);

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
