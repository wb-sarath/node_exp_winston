const winston = require('winston');

// Create the Winston logger instance
const logger = winston.createLogger({
  level: 'info', // Set the desired logging level (e.g., 'info', 'error', 'debug')
  format: winston.format.json(), // Choose a log format
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({filename: 'logs/error.log', level: 'error'}), // Log errors to a file
    new winston.transports.File({filename: 'logs/combined.log'}), // Log all levels to another file
  ],
});

module.exports = logger;
