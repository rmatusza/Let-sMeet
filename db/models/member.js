'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50)
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
    Member.hasMany(models.Event_Member, {foreignKey: "member_id"})
    Member.hasMany(models.Group_Member, {foreignKey: "member_id"})
    Member.hasOne(models.Organizer, {foreignKey: "member_id"})
  };
  return Member;
};
