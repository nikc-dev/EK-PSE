import express from 'express';

// Initializing express router
const router = express.Router();

// Routes for secured endpoints
router.get('/', (req, res) => {
    res.send({data: 'Your Access-Token is authorized successfully to use this API endpoint'});
});

export default router;