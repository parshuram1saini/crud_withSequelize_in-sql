module.exports = {
  DB_HOST: "localhost",
  DB_USER: "root",
  DB_NAME: "coedifyPR",
  DB_PASSWORD: "Saini@98765",
  DB_DIALECT: "mysql",

  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:20000
  }
};
