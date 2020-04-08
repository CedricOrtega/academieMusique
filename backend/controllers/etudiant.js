const Etudiant = require('../models/etudiant');

exports.createEtudiant = (req, res, next) => {
  const etudiant = new Etudiant({
    nom: req.body.nom,
    prenom: req.body.prenom,
    profId: req.body.profId,
    courId: req.body.courId
  });
  etudiant.save().then(
    () => {
      res.status(201).json({
        message: 'Etudiant saved successfully!'
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

exports.getOneEtudiant = (req, res, next) => {
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
  };
  
  exports.modifyEtudiant = (req, res, next) => {
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
  };
  
  exports.deleteEtudiant = (req, res, next) => {
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
  };
  
  exports.getAllEtudiant = (req, res, next) => {
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
  };