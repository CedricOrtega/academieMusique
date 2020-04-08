const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const etudiantCtrl = require('../controllers/etudiant');

router.get('/', auth, etudiantCtrl.getAllEtudiant);
router.post('/', auth, etudiantCtrl.createEtudiant);
router.get('/:id', auth, etudiantCtrl.getOneEtudiant);
router.put('/:id', auth, etudiantCtrl.modifyEtudiant);
router.delete('/:id', auth, etudiantCtrl.deleteEtudiant);

module.exports = router;