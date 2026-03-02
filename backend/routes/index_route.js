const app = require('express');
const router = app.Router();
const { IndexController } = require('../controllers/index_controller');

router.get('/', IndexController);

module.exports = router;