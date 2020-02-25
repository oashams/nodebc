const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hello Node.js `);
logger.info(`Node.js is Great!!!`);
logger.warn(`Warning, Warning`);
logger.error(`Mayday Mayday, we have an error, repeat... we have an error`);