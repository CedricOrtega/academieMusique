const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const profCtrl = require('../controllers/prof');

router.get('/',  profCtrl.getAllProf);
router.post('/',  profCtrl.createProf);
router.get('/:id',  profCtrl.getOneProf);
router.put('/:id',  profCtrl.modifyProf);
router.delete('/:id',  profCtrl.deleteProf);

module.exports = router;