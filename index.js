const express = require('express');
const app = express();
const port = 5000;
const studentRoute = require('./routes/studentRoute.js');
const connectDB = require('./config/db.js')

connectDB();

app.use(express.json());
app.use('/api/student', studentRoute);

app.listen(port,() =>  console.log(`Server started at port -> ${port}`));