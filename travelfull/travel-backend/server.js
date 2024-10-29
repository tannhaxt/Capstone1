const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import các route
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tripadvisorRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sử dụng các route
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// Route TripAdvisor
app.use('/api', tripadvisorRoutes);


// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
