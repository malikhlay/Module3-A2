const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController'); router
 .route('/')
 .get(usersController.getAllUsers)
 .post(usersController.createNewUsers);
router
 .route('/:id')
 .get(usersController.getUsersByID)
 .patch(usersController.patchUsersById)
 .delete(usersController.deleteUsersByID);
module.exports = router;