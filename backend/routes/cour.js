const express = require('express');
const router = express.Router();

const courCtrl = require('../controllers/cour');

router.get('/', etudiantCtrl.getAllCour);
router.post('/', etudiantCtrl.createCour);
router.get('/:id', etudiantCtrl.getOneCour);
router.put('/:id', etudiantCtrl.modifyCour);
router.delete('/:id', etudiantCtrl.deleteCour);

module.exports = router;