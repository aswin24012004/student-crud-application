const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/student')
        console.log('Database connected')
    } catch (error) {
        console.error("Error occured"+error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
