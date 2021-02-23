const express = require('express');
const app = express();
const morgan = require('morgan');
// Morgan is a logger middlewater - It logs your requests for you

// Routes
const testRoutes = require('./api/routes/test');

app.use(morgan('dev'));

// Any route that hits your server with "/api/test" will be directed to the test.js routes file
app.use('/api/test', testRoutes);



module.exports = app;
