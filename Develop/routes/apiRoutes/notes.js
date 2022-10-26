const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

router.use(notesRoutes);
router.use(require('./notesRoutes'));

module.exports = router;