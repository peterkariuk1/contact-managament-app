const express = require('express');
const router = express.Router();
const { 
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact} = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');
router.use(validateToken);//All routes are now private using the following middleware
router.route('/').get(getAllContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;