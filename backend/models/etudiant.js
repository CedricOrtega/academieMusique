const mongoose = require('mongoose');

const etudiantSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  profId: { type: String, required: true },
  courId: { type: String, required: true }
});

module.exports = mongoose.model('Etudiant', etudiantSchema);