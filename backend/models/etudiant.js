const mongoose = require('mongoose');

const etudiantSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  emailTuteur: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  courInstrument: { type: String, required: true },
  numeroTelephone: { type: String, required: true },
  profId: { type: String, required: true }
});

module.exports = mongoose.model('Etudiant', etudiantSchema);