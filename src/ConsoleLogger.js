'use strict';

/* eslint-disable no-console */

/**
 * ConsoleLogger.js -- Provides basic logging functionality with all log messages posting to `console.log`.
 * Trace will also output "console.trace()" after the log message is posted.
 */
export default class ConsoleLogger
{
   /**
    * Post debug message.
    *
    * @param {string}   message - The log message.
    */
   debug(message)
   {
      console.log(`Debug: ${message}`);
   }

   /**
    * Post error message.
    *
    * @param {string}   message - The log message.
    */
   error(message)
   {
      console.error(`Error: ${message}`);
   }

   /**
    * Post fatal message.
    *
    * @param {string}   message - The log message.
    */
   fatal(message)
   {
      console.error(`Fatal: ${message}`);
   }

   /**
    * Post info message.
    *
    * @param {string}   message - The log message.
    */
   info(message)
   {
      console.log(`Info: ${message}`);
   }

   /**
    * Post trace message.
    *
    * @param {string}   message - The log message.
    */
   trace(message)
   {
      console.log(`Trace: ${message}`);
      console.trace();
   }

   /**
    * Post warn message.
    *
    * @param {string}   message - The log message.
    */
   warn(message)
   {
      console.warn(`Warn: ${message}`);
   }
}