const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "",
  key: "",
  secret: "",
  cluster: "",
  useTLS: true,
});

pusher.trigger("my-channel", "my-event", {
  message: "hello pusher",
});
