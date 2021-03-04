const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1159504",
  key: "b40ccf3305c1a0013d14",
  secret: "58b83da932c06384bf3b",
  cluster: "ap1",
  useTLS: true,
});

setInterval(() => {
  pusher
    .trigger("my-channel", "my-event", {
      message: Math.random(),
    })
    .then(console.log)
    .catch((e) => console.log(e));
}, 7000);
