const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const url = "mongodb://127.0.0.1";
let user = {};
mongoose
  .connect(url, {
    dbName: "TestMongoDB",
    user: "useradmin",
    pass: "adminpassword",
  })
  .then(function (o) {
    console.log("connect success!");
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
      name: String,
      age: Number,
      gender: String,
      loginDate: Date,
    });

    user = mongoose.model("user", userSchema);
  });

app.get("/user/getAll", function (req, res) {});

app.get("/user/get/:id", function (req, res) {});

app.post("/user/add", function (req, res) {
  let addUser = req.body;

  let u = new user({
    name: addUser.name,
    age: addUser.age,
    gender: addUser.gender,
    loginDate: new Date(),
  });
  u.save();

  res.send({ message: "add" });

});

app.delete("/user/del/:id", (req, res) => {
  res.send({ message: "delete" });
});

app.put("/user/edit", (req, res) => {
    let putUser=req.body;
     user.updateOne({ name: putUser.name }, { age: putUser.age })
      .then(function (res) {
        console.log("res",res);

      })
      .catch(function (err) {
        console.log("err",err);
      });

  res.send({ message: "put" });
});

app.listen(8888, function () {
  console.log("Express server running at http://127.0.0.1:8888");
});
