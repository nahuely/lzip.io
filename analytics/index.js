const app = require("./app");
const connect = require("./helpers/connect");
const { DB_URL, API_PORT } = require("./config/constants");

const startServer = () => {
  connect(DB_URL)
    .then(() => {
      app.listen(API_PORT, () => {
        console.info(`app listening on port ${API_PORT}`);
      });
    })
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
};

startServer();
