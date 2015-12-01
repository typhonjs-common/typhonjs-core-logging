'use strict';

const s_ALL_LOGGING_ENABLED = true;

const s_LOG_LEVELS =
{
   off: 7,
   fatal: 6,
   error: 5,
   warn: 4,
   info: 3,
   debug: 2,
   trace: 1,
   all: 0
};

const s_IS_LEVEL_ENABLED = (currentLevel, requestedLevel) =>
{
   return currentLevel <= requestedLevel && s_ALL_LOGGING_ENABLED;
};

/* eslint-disable no-console */

/**
 * Logger.js -- Provides dispatch to logging plugins. Logging can be turned off via invoking "setLogLevel('off')".
 * By default all logging is enabled and the context is set to `default`. Add one or more logger plugins by invoking
 * the `setLogger` method. Change the logging context by invoking `setContext`.
 *
 * The following log levels are available in order of precedence: `off, fatal, error, warn, info, debug, trace, all`.
 */
export default class Logger
{
   /**
    * Create the Logger with default values and all logging enabled.
    */
   constructor()
   {
      this._context = 'default';
      this._logLevel = s_LOG_LEVELS['all'];
      this._loggerMap = new Map();
   }

   /**
    * Dispatch to the `logger->debug` if it exists and the log level is enabled.
    */
   debug()
   {
      const enabled = s_IS_LEVEL_ENABLED(this._logLevel, s_LOG_LEVELS['debug']);
      const logger = this._loggerMap.get(this._context);

      if (enabled && logger && logger.debug)
      {
         logger.debug(...arguments);
      }
   }

   /**
    * Dispatch to the `logger->error` if it exists and the log level is enabled.
    */
   error()
   {
      const enabled = s_IS_LEVEL_ENABLED(this._logLevel, s_LOG_LEVELS['error']);
      const logger = this._loggerMap.get(this._context);

      if (enabled && logger)
      {
         logger.error(...arguments);
      }
   }

   /**
    * Dispatch to the `logger->fatal` if it exists and the log level is enabled.
    */
   fatal()
   {
      const enabled = s_IS_LEVEL_ENABLED(this._logLevel, s_LOG_LEVELS['fatal']);
      const logger = this._loggerMap.get(this._context);

      if (enabled && logger)
      {
         logger.fatal(...arguments);
      }
   }

   /**
    * Get the current context.
    *
    * @returns {string|*}
    */
   getContext()
   {
      return this._context;
   }

   /**
    * Get the logger by the given context.
    *
    * @param {*}  context - the context to use for logger retrieval.
    * @returns {*}
    */
   getLogger(context)
   {
      return this._loggerMap.get(context);
   }

   /**
    * Returns whether a logger is defined by the given context.
    *
    * @param {*}  context - the context to check.
    * @returns {*}
    */
   hasContext(context)
   {
      return this._loggerMap.get(context) !== undefined;
   }

   /**
    * Returns whether the given log level is enabled.
    *
    * @param {string}   level - log level
    * @returns {boolean}
    */
   isLevelEnabled(level)
   {
      const requestedLevel = s_LOG_LEVELS[level];

      if (typeof requestedLevel === 'undefined' || requestedLevel === null)
      {
         console.log(`isLevelEnabled - unknown log level: ${level}`);
         return false;
      }

      return s_IS_LEVEL_ENABLED(this._logLevel, requestedLevel);
   }

   /**
    * Dispatch to the `logger->info` if it exists and the log level is enabled.
    */
   info()
   {
      const enabled = s_IS_LEVEL_ENABLED(this._logLevel, s_LOG_LEVELS['info']);
      const logger = this._loggerMap.get(this._context);

      if (enabled && logger)
      {
         logger.info(...arguments);
      }
   }

   /**
    * Removes the logger by the given context.
    *
    * @param {*}  context - The context to check.
    */
   removeLogger(context)
   {
      this._loggerMap.delete(context);
   }

   /**
    * Sets the current context
    *
    * @param {*}  context - The context to set.
    * @returns {boolean}
    */
   setContext(context)
   {
      if (typeof context === 'undefined' || context === null)
      {
         console.log(`setContext - context is not defined or null: ${context}`);
         return false;
      }

      this._context = context;
   }

   /**
    * Sets the current log level.
    *
    * @param {string}   level - log level
    * @returns {boolean}
    */
   setLogLevel(level)
   {
      const requestedLevel = s_LOG_LEVELS[level];

      if (typeof requestedLevel === 'undefined' || requestedLevel === null)
      {
         console.log(`setLogLevel - unknown log level: ${level}`);
         return false;
      }

      this._logLevel = requestedLevel;
   }

   /**
    * Sets the logger for the give context.
    *
    * @param {*}  context - The context to set.
    * @param {*}  logger - The logger to set.
    */
   setLogger(context, logger)
   {
      this._loggerMap.set(context, logger);
   }

   /**
    * Dispatch to the `logger->trace` if it exists and the log level is enabled.
    */
   trace()
   {
      const enabled = s_IS_LEVEL_ENABLED(this._logLevel, s_LOG_LEVELS['trace']);
      const logger = this._loggerMap.get(this._context);

      if (enabled && logger)
      {
         logger.trace(...arguments);
      }
   }

   /**
    * Dispatch to the `logger->warn` if it exists and the log level is enabled.
    */
   warn()
   {
      const enabled = s_IS_LEVEL_ENABLED(this._logLevel, s_LOG_LEVELS['warn']);
      const logger = this._loggerMap.get(this._context);

      if (enabled && logger)
      {
         logger.warn(...arguments);
      }
   }
}