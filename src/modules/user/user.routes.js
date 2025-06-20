// user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("./user.controller");
const asyncHandler = require("../../middlewares/asyncHandler");
const validate = require("../../middlewares/validate");
const userSchema = require("./user.validation");

router.post(
  "/register",
  validate(userSchema.registerSchema),
  asyncHandler(userController.register)
);
router.post(
  "/login",
  validate(userSchema.loginSchema),
  asyncHandler(userController.login)
);
// const { authenticate, authorize } = require("../../core/auth/middleware");

// router.get("/me", authenticate, userController.getMe); // protected route
// router.get(
//   "/admin",
//   authenticate,
//   authorize("admin"),
//   adminController.getDashboard
// );

module.exports = router;
