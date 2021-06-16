const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "",
  key: "",
  secret: "",
  cluster: "",
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
