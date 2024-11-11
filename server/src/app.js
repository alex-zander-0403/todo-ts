const express = require('express');
const taskRouter = require('./routers/taskRouter');

const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

//
app.use('/api/tasks', taskRouter);

//
module.exports = app;
