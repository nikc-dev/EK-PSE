const express = require('express');

// Initializing express router instance
const router = express.Router();

// Routes for secured endpoints
router.get('/', (req, res) => {
    res.send({data: 'Your Access-Token is authorized successfully to use this API endpoint. Try removing / modifying authorization value from the postman header to test unauthorized case'});
});

module.exports = router;