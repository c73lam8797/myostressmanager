const express = require('express');
const router = express.Router();
const User = require('../models/user');

// All sensor data on same day
router.get('/', async (req, res) => {
    try {
        res.send("Request received");
        const data = await User.find({
            name: req.name,
            date: (Date()).getDate(),
        }, 'name sensorData sensorTime');
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// All sensor data for a certain date
router.get('/:date', async (req, res) => {
    try {
        const data = await User.find({
            name: req.name,
            date: req.date.getDate(),
        }, 'name sensorData sensorTime');
        res.json(data);
    } catch (error) {
        res.status(500).json({message: err.essage});
    }
});

router.get('/user', async (req, res) => {
    res.send("Post new user with post request");
});

// Create new user
router.post('/user', async (req, res) => {
    const user = new User({
        name: req.body.name,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message:err.message});
    }
});

// Comments to be posted in database
router.post('/comments', async (req, res) => {
    const comments = req.body.comments;
    db.User.update(
        { user: req.body.user },
        { $set:
           {
             comments: comments,
           }
        }
    )
});

// Update comments
router.patch('/comments', async (req, res) => {
    const comments = req.body.comments;
    db.User.update(
        { user: req.user.body },
        { $set:
           {
             comments: comments,
           }
        }
    )
});

// Delete comments
router.delete('/comments', async (req, res) => {
    
});

module.exports = router;