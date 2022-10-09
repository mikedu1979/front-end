const mongoose = require("mongoose");
//const mongoDB ="mongodb://useradmin:adminpassword@127.0.0.1/TestMongoDB?authSource=admin";
const url = 'mongodb://127.0.0.1';
mongoose
  .connect(url,{dbName:'TestMongoDB',user:'useradmin',pass:'adminpassword'})
  .then(function (o) {
    console.log("connect success!");
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
      name: String,
      age: Number,
      gender: String,
      loginDate: Date,
    });
    
    const user = mongoose.model("user", userSchema);
    // let u=new user({name:"Tom",age:40,gender:"M",loginDate:new Date()});
    // u.save();
    // let u1=new user({name:"Mike",age:45,gender:"M",loginDate:new Date()});
    // u1.save();

    // user.updateOne({ name: "Tom" }, { name: "Lily" })
    //   .then(function (res) {
    //     console.log("res",res);

    //   })
    //   .catch(function (err) {
    //     console.log("err",err);
    //   });

      // user.deleteOne({ name: "Tom" })
      // .then(function (res) {
      //   console.log("res",res);

      // })
      // .catch(function (err) {
      //   console.log("err",err);
      // });

    const query = user.where({ name: "Tom" });
    query.findOne(function (err, obj) {
      if (err) {
        return console.log(err);
      }
      console.log(obj);
    });
  })
  .catch(function (e) {
    console.log("error", e);
  });
