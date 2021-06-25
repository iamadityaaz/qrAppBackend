const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './env/.env' });

// initalizing app
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// for environment files
const PORT = process.env.PORT || 5000;
const mongoDbUrl = process.env.mongoDbUrl || 'mongodb://localhost:27017/qrApp';

//connnecting mongoDB server
mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    if (result) {
      //if all goes right then listing to the server
      app.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`server is running at ${PORT}`);
      });
    }
  })

  .catch((err) => {
    console.log(err);
    throw err;
  });

const dataRoute = require('./src/routes/v1/data');

app.use('/api/v1/data/', dataRoute);
