import express from 'express';

// Initializing express router
const router = express.Router();

// Routes for public endpoints
router.get('/', (req, res) => {
    res.send({data: 'This is a Public API endpoint and can be accessed without any Authorization'});
});

export default router;