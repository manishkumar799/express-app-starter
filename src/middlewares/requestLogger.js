const morgan = require('morgan');
const logger = require('../config/logger');

// Create a stream object for morgan to use winston
const stream = {
  write: (message) => logger.http(message.trim())
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development'; // Skip in prod if needed
};

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

module.exports = morganMiddleware;
