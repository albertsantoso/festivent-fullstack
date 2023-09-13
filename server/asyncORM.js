const { sequelize } = require("./models");

sequelize
    .authenticate()
    .then(() => {
        sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log("Database connection has been established successfully.");
    })
    .catch((error) => {
        console.log(error);
    })