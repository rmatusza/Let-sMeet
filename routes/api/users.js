const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const {asyncHandler} = require('../../utils.js')
const db = require('../../db/models')
const jwt = require('jsonwebtoken');
const {Member} = db
const router = express.Router();
const { secret, expiresIn } = require('../../config').jwtConfig;

const sharedAuthValidations = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("A valid email address is required")
    .isLength({ max: 100 })
    .withMessage("Email address must be less than 100 characters"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("User password is required"),
];

getUserToken = (user) => {

  const userData = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(
    { data: userData },
    secret,
    { expiresIn: parseInt(expiresIn, 10) }
  );

  return token;
};


router.post("/token", asyncHandler(async(req, res) => {
    console.log('hello')
    // console.log(Member)
    console.log(req.body)
    const { email } = req.body;
    console.log(email)
    const user = await Member.findOne(
      {
        where: { email }
      }
    );
    console.log(user)
    res.json({user})

    // if (!user || !user.validatePassword(password)) {
    //   const error = new Error("Invalid credentials");
    //   error.status = 401;
    //   error.title = "Invalid credentials";
    //   error.errors = ["Unable to authenticate provided information. Please check user name and/or password."];
    //   return next(error);
    // }

    // const token = getUserToken(user);
    // console.log(token)
    // res.cookie("accessToken", token, { httpOnly: true });
    // res.json({ token, user: { id: user.id, userName: user.userName }});
  })
);

module.exports = router;
