const router = require('express').Router()
const { Post, User } = require('../models')

// homepage
router.get('/', async (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        id = req.params.id
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router