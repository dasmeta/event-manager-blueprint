exports.subscribe = require("@dasmeta/event-manager-platform-helper").wrapHandler(require("./handler"), process.env.DEPLOYER_PLATFORM)