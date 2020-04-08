const express = require('express');
const router = express.Router();

const courCtrl = require('../controllers/cour');

router.get('/', auth, etudiantCtrl.getAllCour);
router.post('/', auth, etudiantCtrl.createCour);
router.get('/:id', auth, etudiantCtrl.getOneCour);
router.put('/:id', auth, etudiantCtrl.modifyCour);
router.delete('/:id', auth, etudiantCtrl.deleteCour);

module.exports = router;