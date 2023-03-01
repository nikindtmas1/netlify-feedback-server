const express = require("express");
const cors = require("cors");
const router = express.Router()
const app = express();
const serverless = require('serverless-http');
app.use(express.json());

// const { development } = require("./config/config");
const {auth} = require('./middleware/authMidd');
// const port = development.PORT;

const mongooseConfig = require("./config/configMongoose");
const routes = require('./routes/routes');

const port = process.env.PORT || 5000

app.use(auth);
app.use(cors());
app.use(routes);
app.use('/.netlify/functions/api',router);

mongooseConfig(app);
serverless(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
