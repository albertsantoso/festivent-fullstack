'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ event, ticket, ref_code }) {
      // define association here
      this.hasMany(event, { foreignKey: "userId" })
      this.hasMany(ticket, { foreignKey: "userId" })
      this.hasMany(ref_code, { foreignKey: "userId" })
    }
  }
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ref_points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    verification_code: {
      type: DataTypes.STRING,
      defaultValue: "0"
    },
    status: {
      type: DataTypes.ENUM("Unverified", "Verified"),
      defaultValue: "Unverified"
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};