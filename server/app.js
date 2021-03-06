const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())


app.use((req, res, next) => {
    const error = new HttpError("could not find this route", 404);
    throw error;
  });
  

app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "an unknown error occured" });
  });


  mongoose
  .connect(
    "mongodb+srv://gavin:Password123@cluster0.d3tnt.mongodb.net/chemat?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
