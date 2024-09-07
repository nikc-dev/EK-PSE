import express from 'express';
import { checkAuth } from './utils/verifyAuthToken.js';
import securedRoutes from './routes/secured.js';
import publicRoutes from './routes/public.js';

const {
    PORT,
} = process.env;

// Creates an express app instance. 
const app = express();


// Secured route that checks for a valid Auth0 access token using checkAuth middleware function
app.use('/secured', checkAuth, securedRoutes);

// Public route that doesnt have any auth checking middleware
app.use('/public', publicRoutes);


// App instance starts to listen to the incoming requests
app.listen(PORT, ()=> {
    console.log(`Server is up...`);
    console.log(`Access Public API from - http://localhost:${PORT}/public - No Auth Required`);
    console.log(`Access Secured API from - http://localhost:${PORT}/secured - Requires a valid Auth0 Access Token`);
});
