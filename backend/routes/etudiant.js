const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const etudiantCtrl = require('../controllers/etudiant');

router.get('/',  etudiantCtrl.getAllEtudiant);
router.post('/',  etudiantCtrl.createEtudiant);
router.get('/:id',  etudiantCtrl.getOneEtudiant);
router.put('/:id',  etudiantCtrl.modifyEtudiant);
router.delete('/:id',  etudiantCtrl.deleteEtudiant);

module.exports = router;