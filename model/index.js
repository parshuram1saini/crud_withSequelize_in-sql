const dbconfig = require("../config/dbconfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbconfig.DB_NAME,
  dbconfig.DB_USER,
  dbconfig?.DB_PASSWORD,
  {
    host: dbconfig.DB_HOST,
    dialect: dbconfig.DB_DIALECT,
    operatorsAliases: false, ///if any error our application it will be override the error

    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle,
    },
  }
);

///-----it check that  for connection of database or not------//
sequelize
  .authenticate()
  .then(() => console.log("database is connected"))
  .catch((err) => console.log("Error" + err));

///---- make db object for connecting controller folder and export there ----///
db = {};
db.Sequelize = Sequelize; /// this is the Sequelize contructor
db.sequelize = sequelize; /// this is instance sequelize of the Sequelize contructor

db.students = require("./studentModal.js")(sequelize, DataTypes);

///-----sync method-----///
db.sequelize
  .sync({ force: false}) //here force is false bcoz if table is exist,
  // then it'll not create again and again
  .then(() => {
    console.log("yes,sync done");
  });

module.exports = db;
