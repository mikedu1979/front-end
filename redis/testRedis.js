// importing Redis libraries
const redis = require("redis");
// Use this library to connect to the Redis server
const redisClient = redis.createClient({
  url: "redis://127.0.0.1:6379/0"
});

// listening for successful or failed connections
redisClient.on("error", (err) => {
  console.log("Error " + err);
});

redisClient
  .connect()
  .then(function (data) {
    console.log("connect");

    // redisClient.hSet('user1',{''}})

    redisClient.del('visits').then((data)=>{
        console.log("delete success")

    }).catch(()=>{
        console.log("delete fail")
    });

    // redisClient
    //   .set("visits", 1, { EX: 10000 })
    //   .then(function (data) {
    //     console.log("set data", data);
    //   })
    //   .catch(function (err) {
    //     console.log("set data", err);
    //   });
    //  redisClient
    //   .get("visits")
    //   .then(function (data) {
    //     console.log("get data", data);
    //   })
    //   .catch(function (err) {
    //     console.log("get data", err);
    //   });
  })
  .catch(function (err) {
    console.log(err);
  });

  //redisClient.quit();
