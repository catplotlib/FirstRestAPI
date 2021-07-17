const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});
//start listening to the servwe

app.listen(8000);
