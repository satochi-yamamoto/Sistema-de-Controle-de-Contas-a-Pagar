const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middlewares/authMiddleware');
const accessControl = require('../middlewares/accessControl');

router.use(authMiddleware.verifyToken);
router.post('/accounts', accessControl.userOnly, accountController.createAccount);
router.get('/accounts', accessControl.userOnly, accountController.getAccounts);

module.exports = router;
