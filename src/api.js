const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require('serverless-http');
app.use(express.json());

// const { development } = require("./config/config");
const {auth} = require('./middleware/authMidd');
// const port = development.PORT;

const mongooseConfig = require("./config/configMongoose");
const routes = require('./routes/routes');


app.use(auth);
app.use(cors());
app.use(routes);
app.use('/.netlify/functions/api');
mongooseConfig(app);

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}...`);
// });

module.exports.handler = serverless(app);