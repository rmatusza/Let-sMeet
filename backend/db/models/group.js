'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(250)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    organizer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    members: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.hasMany(models.Event, {foreignKey: "group_id"}),
    Group.hasMany(models.Group_Member, {foreignKey: "group_id"}),
    Group.belongsTo(models.Organizer, {foreignKey: "organizer_id"})
  };
  return Group;
};
