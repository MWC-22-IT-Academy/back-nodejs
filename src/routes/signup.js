const { Router } = require('express');
const router = Router();
const { signupPost } = require('../controllers/signup');

router.post('/', signupPost);

module.exports = router;