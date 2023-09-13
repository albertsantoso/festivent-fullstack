'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, event_category, city, ticket, ref_code }) {
      // define association here
      this.belongsTo(user, { foreignKey: "userId" })
      this.belongsTo(city, { foreignKey: "cityId" })
      this.belongsTo(event_category, { foreignKey: "categoryId" })
      this.hasMany(ticket, { foreignKey: "eventId" })
      this.hasMany(ref_code, { foreignKey: "eventId" })
    }
  }
  event.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    summary: DataTypes.STRING,
    description: DataTypes.STRING(1234),
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    dateTimeStart: DataTypes.STRING,
    dateTimeEnd: DataTypes.STRING,
    count: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
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
    modelName: 'event',
  });
  return event;
};