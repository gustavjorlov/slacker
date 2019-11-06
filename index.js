const axios = require("axios");
const core = require("@actions/core");
const github = require("@actions/github");

const slackUrl = core.getInput("slack-url");
const message = core.getInput("message");

console.log(slackUrl, message, github.context.payload.pull_request.head.ref);

try {
  axios.post(slackUrl, {
    text: `[PR ${github.context.payload.pull_request.head.ref}]: ${message}`
  });
} catch (error) {
  core.setFailed(error.message);
}
