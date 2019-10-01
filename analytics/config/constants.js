const fs = require("fs");
const path = "/run/secrets/";
const secretsFiles = fs.readdirSync(path, { encoding: "utf8" });
const secrets = secretsFiles.reduce((acc, curr) => {
  acc[curr.toUpperCase()] = fs.readFileSync(`${path}${curr}`, {
    encoding: "utf8"
  });
  return acc;
}, {});
module.exports = secrets;
