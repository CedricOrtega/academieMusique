const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
  libelle: { type: String, required: true }
});

const profSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  instrumentEnseigne: [instrumentSchema],
  mail: { type: String, required: true },
  numeroTel: { type: String, required: true }
});

module.exports = mongoose.model('Prof', profSchema);