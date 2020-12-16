'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event_Member = sequelize.define('Event_Member', {
    event_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    member_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Event_Member.associate = function(models) {
    // associations can be defined here
    Event_Member.belongsTo(models.Event, {foreignKey: "event_id"})
    Event_Member.belongsTo(models.Member, {foreignKey: "member_id"})
  };
  return Event_Member;
};
