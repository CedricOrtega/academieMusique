const Cour = require('../models/cour');

exports.createCour = (req, res, next) => {
  const cour = new Cour({
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    profId: req.body.profId,
    etudiantId: req.body.etudiantId,
    salleId: req.body.salleId
  });
  cour.save().then(
    () => {
      res.status(201).json({
        message: 'Cour saved successfully!'
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

exports.getOneCour = (req, res, next) => {
    Cour.findOne({
      _id: req.params.id
    }).then(
      (cour) => {
        res.status(200).json(cour);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyCour = (req, res, next) => {
    const cour = new Cour({
      _id: req.params.id,
      dateDebut: req.body.dateDebut,
      dateFin: req.body.dateFin,
      profId: req.body.profId,
      etudiantId: req.body.etudiantId,
      salleId: req.body.salleId
    });
    Cour.updateOne({_id: req.params.id}, cour).then(
      () => {
        res.status(201).json({
          message: 'Cour updated successfully!'
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
  
  exports.deleteCour = (req, res, next) => {
    Cour.deleteOne({_id: req.params.id}).then(
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
  
  exports.getAllCour = (req, res, next) => {
    Cour.find().then(
      (cours) => {
        res.status(200).json(cours);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };