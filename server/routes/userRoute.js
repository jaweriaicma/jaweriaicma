const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/userController.js');

router.get('/get', usercontroller.getUser);
router.post('/submit', usercontroller.createUser);
router.put('/update/:id', usercontroller.editUser);
router.delete('/delete/:id', usercontroller.deleteUser);

module.exports = router;
