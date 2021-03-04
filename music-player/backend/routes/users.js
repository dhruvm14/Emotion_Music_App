const router = require("express").Router();
let User = require("../models/user.model");
const md5 = require("md5");
router.route("/register").post((req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: md5(req.body.password),
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
