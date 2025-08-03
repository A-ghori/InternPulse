const express = require('express');
const router = express.Router();
const Application = require('../models/application');

//POST api/aplicants/register
router.post('/register', async (req, res) => {
      console.log("Received form data:", req.body);
    try {
        const newApp = new Application(req.body);
        await newApp.save();
        res.status(201).json({ message: 'Application Saved' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save application' });
    }
});

//GET /api/applicants
router.get('/', async (req,res) => {
    try{
        const all = await Application.find();
        res.json(all);

    }catch (err) {
        res.status(500).json({error: err.message });
    }
});

module.exports = router;