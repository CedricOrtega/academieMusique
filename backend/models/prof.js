const mongoose = require('mongoose');

const profSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true }
});

module.exports = mongoose.model('Prof', profSchema);