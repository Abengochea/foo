'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    admin_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Admin, {});
        User.hasMany(models.Game, {
          onDelete: 'cascade' // when author is deleted, delte their books
        });
      }
    }
  });
  return User;
};
