'use strict';

/** gives us access to methods such as
- findAll()
- create()
- update()
- destroy()
*/

module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        //An author can have many books.

        Admin.hasMany(models.User, {
          onDelete: 'cascade' // when author is deleted, delte their books
        });

      }
    }
  });
  return Admin;
};
