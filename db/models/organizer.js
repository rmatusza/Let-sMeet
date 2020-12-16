'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organizer = sequelize.define('Organizer', {
    member_id: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Organizer.associate = function(models) {
    // associations can be defined here
    Organizer.hasMany(models.Group, {foreignKey: "organizer_id"})
    Organizer.belongsTo(models.Member, {foreignKey: "member_id"})
  };
  return Organizer;
};
