'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    date_start: {
      allowNull: false,
      type: DataTypes.DATE
    },
    date_end: {
      allowNull: false,
      type: DataTypes.DATE
    },
    group_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    attendes: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Group, {foreignKey: "group_id"})
    Event.hasMany(models.Event_Member, {foreignKey: "event_id"})
  };
  return Event;
};
