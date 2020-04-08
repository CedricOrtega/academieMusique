const express = require('express');
const router = express.Router();

const profCtrl = require('../controllers/prof');

router.get('/', etudiantCtrl.getAllProf);
router.post('/', etudiantCtrl.createProf);
router.get('/:id', etudiantCtrl.getOneProf);
router.put('/:id', etudiantCtrl.modifyProf);
router.delete('/:id', etudiantCtrl.deleteProf);

module.exports = router;