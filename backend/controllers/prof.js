const Prof = require('../models/prof');

exports.createProf = (req, res, next) => {
  const prof = new Prof({
    nom: req.body.nom,
    prenom: req.body.prenom,
  });
  prof.save().then(
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
};

exports.getOneProf = (req, res, next) => {
    Prof.findOne({
      _id: req.params.id
    }).then(
      (prof) => {
        res.status(200).json(prof);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyProf = (req, res, next) => {
    const prof = new Prof({
      _id: req.params.id,
      nom: req.body.nom,
      prenom: req.body.prenom
    });
    Prof.updateOne({_id: req.params.id}, prof).then(
      () => {
        res.status(201).json({
          message: 'Prof updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.deleteProf = (req, res, next) => {
    Prof.deleteOne({_id: req.params.id}).then(
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
  };
  
  exports.getAllProf = (req, res, next) => {
    Etudiant.find().then(
      (profs) => {
        res.status(200).json(profs);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };