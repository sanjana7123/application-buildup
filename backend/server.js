require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('./models/User'); // This registers the model
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/test-model', async (req, res) => {
  try {
    const testUser = await User.findOne({});
    res.json(testUser ? 'Model works!' : 'No users found');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});