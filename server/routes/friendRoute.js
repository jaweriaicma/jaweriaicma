const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController.js');

router.get('/get', friendController.getFriend);
router.post('/submit', friendController.createFriend);
router.put('/update/:id', friendController.editFriend);
router.delete('/delete/:id', friendController.deleteFriend);

module.exports = router;
