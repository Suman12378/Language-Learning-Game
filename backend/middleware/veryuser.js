const admin = require("firebase-admin");

exports.verifyUser = async (req, res, next) => {
	try {
		const { authtoken } = req.headers;
		if (!authtoken) {
			res.status(400).json({ message: "token is null" });
			return;
		}
		const userData = await admin.auth().verifyIdToken(authtoken);
		//  console.log(userData);
		req.userData = userData;
		
		next();
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: err.message });
	}
};