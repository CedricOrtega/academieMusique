const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const courCtrl = require('../controllers/cour');

router.get('/', auth, courCtrl.getAllCour);
router.post('/', auth, courCtrl.createCour);
router.get('/:id', auth, courCtrl.getOneCour);
router.put('/:id', auth, courCtrl.modifyCour);
router.delete('/:id', auth, courCtrl.deleteCour);

module.exports = router;