const Queue = require("bull");
const { newUserEmail } = require("./tasks/sendEmail");

const userQueue = new Queue("user:sendEmail", process.env.REDIS_URL);

userQueue.process(async (job, done) => {
  try {
    await newUserEmail("nahuelamendola@gmail.com", "nahuel");
    done();
  } catch (error) {
    done(error);
  }
});
