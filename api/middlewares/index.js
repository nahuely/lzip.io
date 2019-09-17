module.exports = {
  cache: dbInstance => (req, res, next) => {
    console.log("ooooooo siii", dbInstance);
    next();
  }
};
