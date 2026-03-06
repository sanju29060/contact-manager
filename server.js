import express from 'express';
import dotenv from 'dotenv';
import connectDB from './dbConfig/dbConfig.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('backend is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log("server is running on port 5000");
});

