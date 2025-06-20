// jwt.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'super-secret-key';
const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

exports.signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};
