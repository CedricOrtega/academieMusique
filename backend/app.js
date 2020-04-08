const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const etudiantRoutes = require('./routes/etudiant');
const profRoutes = require('./routes/prof');
const courRoutes = require('./routes/cour');


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

app.use('/api/auth', userRoutes);
app.use('/api/etudiant', etudiantRoutes);
app.use('/api/prof', profRoutes);
app.use('/api/cour', courRoutes);
app.use(bodyParser.json());

module.exports = app;