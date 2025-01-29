const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('./routes/routes.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));  // Update CORS as needed

// Hardcoding the port value directly (Render typically uses 10000, but this can vary)
const PORT = 10000;  // Explicitly setting to 10000 for deployment on Render

// Start the server
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

// Routes
app.use('/employees', routes);
