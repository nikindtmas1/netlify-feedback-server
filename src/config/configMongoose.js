const mongoose = require("mongoose");

const { development } = require("../config/config");

const connection = development.dbAtlas;

module.exports = (app) => {
  async function main() {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Data base connected!!!");
  }
  main().catch((err) => console.log(err));
};
