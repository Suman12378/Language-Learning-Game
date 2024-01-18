var admin = require("firebase-admin");

var serviceAccount = require("./learning-game-69ed5-firebase-adminsdk-og439-b7dd8edd31.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
