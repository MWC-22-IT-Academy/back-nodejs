const { Router } = require('express');
const { fullDataPost } = require('../controllers/fullData');

const router = Router();

router.post('/', fullDataPost);

module.exports = router;