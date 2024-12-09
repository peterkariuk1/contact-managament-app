const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();
const connectDB = require('./config/dbConnection');

connectDB();
app.use(express.json());

app.use(errorHandler);
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/users',require('./routes/userRoutes'));

app.post('/test',(req,res) => {
    console.log('Request received');
    console.log('Request Body:', req.body); 
    res.status(200).json({ message: 'POST successful' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});