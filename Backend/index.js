const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(bodyParser.json());

// Apply CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
}));

// Database connection
mongoose
  .connect('mongodb://localhost:27017/mern-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/auth', authRoutes);

// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
