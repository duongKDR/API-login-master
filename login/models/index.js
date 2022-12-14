const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.user = require("./userModel");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
