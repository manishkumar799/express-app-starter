const { v4: uuidv4 } = require('uuid');

exports.generateUUID = () => uuidv4();

exports.generateRandomCode = (prefix = '', length = 6) => {
  const code = Math.random().toString().slice(2, 2 + length);
  return `${prefix}${code}`;
};
