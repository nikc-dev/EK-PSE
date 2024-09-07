const express = require('express');

// Initializing express router instance
const router = express.Router();

// Routes for public endpoints
router.get('/', (req, res) => {
    res.send({data: 'This is a Public API endpoint and can be accessed without any Authorization'});
});

module.exports = router;