const express = require("express");
const cors = require("cors");
require('dotenv').config();

const axios = require("axios");

const app = express();
app.use(cors());

const port = 5000;

const url = process.env.API_ENDPOINT;

app.get("/weather-data", (request, response) => {
  axios
    .get(url)
    .then((data) => {
      response.json({
        code: data.data.cod,
        data: data.data.list,
      });
    })
    .catch((error) => {
      response.json({
        code: "404",
        error: error.message,
      });
    });
});

console.log("Server is running");

app.listen(port, () => console.log(`Listening on port ${port}`));
