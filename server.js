var profile = require("./profile");

var users = process.argv.slice(2);
users.forEach(profile.getProfile);

//run this command in the terminal to request josh timeonen profile from teamtreehouse
//node server.js joshtimonen
