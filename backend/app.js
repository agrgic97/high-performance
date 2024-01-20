const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

mongoose.connect('mongodb://localhost/HighPerformance').then(() => console.log("Connected to HighPerformance"));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const salesmanRouter = require("./routes/salesman-router")
const recordRouter = require("./routes/record-router")
const orangeHRMRouter = require("./routes/orange-hrm-router")
const openCRXRouter = require("./routes/open-crx-router")
const authRouter = require("./routes/auth-router")

app.use('/api/salesman', salesmanRouter)
app.use('/api/record', recordRouter)
app.use('/api/orange-hrm', orangeHRMRouter)
app.use('/api/open-crx', openCRXRouter)
app.use('/api/auth', authRouter)

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
