const axios = require("axios");

const slackUrl = core.getInput("slack-url");
const message = core.getInput("message");

try {
  axios.post(slackUrl, {
    text: message
  });
} catch (error) {
  core.setFailed(error.message);
}
