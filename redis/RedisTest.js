const redis = require('redis')
const subscriber = redis.createClient({
    url: "redis://127.0.0.1:6379/0",
    password: "lily2022",
  });
  
  subscriber
  .connect()
  .then(function (data) {
    console.log("connect");

    // subscriber.subscribe('dogs', (message) => {
    //     console.log(message);
    //   })

})

  const publisher  = redis.createClient({
    url: "redis://127.0.0.1:6379/01",
    password: "lily2022",
  });

  publisher
  .connect()
  .then(function (data) {
    console.log("connect");
    publisher.publish('dogs', 'Roger')

})

