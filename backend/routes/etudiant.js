const express = require('express');
const router = express.Router();

const Etudiant = require('../models/etudiant');

router.post('/', (req, res, next) => {
  const etudiant = new Etudiant({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    profId: req.body.profId,
    courId: req.body.courId
  });
  etudiant.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/:id', (req, res, next) => {
    Etudiant.findOne({
    _id: req.params.id
  }).then(
    (etudiant) => {
      res.status(200).json(etudiant);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});

router.put('/:id', (req, res, next) => {
  const etudiant = new Etudiant({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    profId: req.body.profId,
    courId: req.body.courId
  });
  Etudiant.updateOne({_id: req.params.id}, etudiant).then(
    () => {
      res.status(201).json({
        message: 'Etudiant updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.delete('/:id', (req, res, next) => {
    Etudiant.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/' +
  '', (req, res, next) => {
  Etudiant.find().then(
    (etudiants) => {
      res.status(200).json(etudiants);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = router;