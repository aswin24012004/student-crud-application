const express = require('express');
const app = express.Router();
const {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controller/studentController.js');


app.get('/',getStudents);
app.post('/',createStudent);
app.put('/:id',updateStudent);
app.delete('/:id',deleteStudent);

module.exports = app;