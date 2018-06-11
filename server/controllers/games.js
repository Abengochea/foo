Game = require('../models/').Game;

module.exports= {
  index(req, res) {
    Game.findAll()
      .then(function (books) {
        res.status(200).json(games);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  show(req, res) {
    Game.findById(req.params.id)
    .then(function (game) {
      res.status(200).json(game);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  create(req, res) {
    Game.create(req.body)
      .then(function (newGame) {
        res.status(200).json(newGame);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  },

  update(req, res) {
    Game.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  delete(req, res) {
    Game.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};
