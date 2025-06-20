const { User } = require("../../models");
const bcrypt = require("bcrypt");
const AppError = require("../../core/utils/AppError");
const messages = require("../../core/constants/message");

exports.registerUser = async (data) => {
  const existing = await User.findOne({ where: { email: data.email } });
  if (existing) throw new AppError(messages.USER_EXISTS, 409);

  const user = await User.create(data);
  return user;
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new AppError(messages.USER_NOT_FOUND, 404);

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new AppError(messages.INVALID_PASSWORD, 401);

  return user;
};
