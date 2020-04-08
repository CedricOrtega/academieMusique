const mongoose = require('mongoose');

const courSchema = mongoose.Schema({
  dateDebut: { type: String, required: true },
  dateFin: { type: String, required: true },
  profId: { type: String, required: true },
  etudiantId: { type: String, required: true },
  salleId: { type: String, required: true },
});

module.exports = mongoose.model('Cour', courSchema);