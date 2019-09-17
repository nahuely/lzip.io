const app = require("./app");
const connect = require("./helpers/connect");
const redis = require("./service/redis");

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

// order of startup
// 1. start mongodb
// 2. start redis
// 3. start express
