const userService = require("./user.service");
const { signToken } = require("../../core/auth/jwt");
const messages = require("../../core/constants/message");
const { response } = require("../../app");

exports.register = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return response.success(
      res,
      {
        user: { id: user.id, email: user.email, role: user.role },
        token,
      },
      messages.USER_CREATED,
      201
    );
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    res.json({
      success: true,
      message: messages.LOGIN_SUCCESS,
      user: { id: user.id, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    next(err);
  }
};
