const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Etudiant = require('./models/etudiant');
const etudiantRoutes = require('./routes/etudiant');


const app = express();


mongoose.connect('mongodb+srv://CeceSpana:test@cluster0-tgfsx.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// middleware permettant de faire communiquer le front et le back en configurant le CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/etudiant', etudiantRoutes);
app.use(bodyParser.json());

app.post('/api/etudiant', (req, res, next) => {
  // a enlever car depend du front pour les tests
  delete req.body._id;
  const etudiant = new Etudiant({
    ...req.body
  });
  etudiant.save()
    .then(() => res.status(201).json({ message: 'Etudiant enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.use('/api/etudiant', (req, res, next) => {
  Etudiant.find()
    .then(etudiants => res.status(200).json(etudiants))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/etudiant/:id', (req, res, next) => {
  Etudiant.findOne({ _id: req.params.id })
    .then(etudiant => res.status(200).json(etudiant))
    .catch(error => res.status(404).json({ error }));
});

app.put('/api/etudiant/:id', (req, res, next) => {
  Etudiant.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Etudiant modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/etudiant/:id', (req, res, next) => {
  Etudiant.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = app;