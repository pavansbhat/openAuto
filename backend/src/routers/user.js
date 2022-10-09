const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).json({status:201, user: user})
    } catch (e) {
        res.status(400).json({status:400, message: e})
    }
})
module.exports = router