'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group_Member = sequelize.define('Group_Member', {
    group_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    member_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Group_Member.associate = function(models) {
    // associations can be defined here
    Group_Member.belongsTo(models.Group, {foreignKey: "group_id"})
    Group_Member.belongsTo(models.Member, {foreignKey: "member_id"})

  };
  return Group_Member;
};
