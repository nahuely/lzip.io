const app = require("./app");
const connect = require("./helpers/connect");

const startServer = () => {
  connect(process.env.MONGODB_URL)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.info(`app listening on port ${process.env.PORT}`);
      });
    })
    .catch(console.error);
};

startServer();
