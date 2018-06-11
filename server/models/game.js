'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    game: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    result: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Game.belongsTo(models.User, {});
      }
    }
  });
  return Game;
};
