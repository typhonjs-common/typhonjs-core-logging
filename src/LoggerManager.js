'use strict';

import Logger        from './Logger.js';
import ConsoleLogger from './ConsoleLogger.js';

const logger = new Logger();

logger.setLogger('default', new ConsoleLogger());

export default logger;