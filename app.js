const express = require('express');
const checkAuth = require('./utils/verifyAuthToken');
const securedRoutes = require('./routes/secured');
const publicRoutes = require('./routes/public');

// Creates an express app instance. 
const app = express();

// Secured route that checks for a valid Auth0 access token using checkAuth middleware function
app.use('/secured', checkAuth, securedRoutes);

// Public route that doesnt have any auth checking middleware
app.use('/public', publicRoutes);

module.exports = app;