const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
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
const authRouter = require("./routes/auth-router")

const swaggerOptions = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "High Performance API",
            version: "1.0.0",
            description: "Documentation of Backend API for High Performance Project"
        },
        servers: [
            {
                url: "http://localhost:3000/api"
            }
        ]
    },
    apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use('/api/salesman', salesmanRouter)
app.use('/api/record', recordRouter)
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
