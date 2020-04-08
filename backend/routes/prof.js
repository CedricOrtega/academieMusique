const express = require('express');
const router = express.Router();

const profCtrl = require('../controllers/prof');

router.get('/', auth, etudiantCtrl.getAllProf);
router.post('/', auth, etudiantCtrl.createProf);
router.get('/:id', auth, etudiantCtrl.getOneProf);
router.put('/:id', auth, etudiantCtrl.modifyProf);
router.delete('/:id', auth, etudiantCtrl.deleteProf);

module.exports = router;