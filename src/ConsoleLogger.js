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
    */
   debug()
   {
      console.log(`Debug: ${JSON.stringify(arguments)}`);
   }

   /**
    * Post error message.
    */
   error()
   {
      console.error(`Error: ${JSON.stringify(arguments)}`);
   }

   /**
    * Post fatal message.
    */
   fatal()
   {
      console.error(`Fatal: ${JSON.stringify(arguments)}`);
   }

   /**
    * Post info message.
    */
   info()
   {
      console.log(`Info: ${JSON.stringify(arguments)}`);
   }

   /**
    * Post trace message.
    */
   trace()
   {
      console.log(`Trace: ${JSON.stringify(arguments)}`);
      console.trace();
   }

   /**
    * Post warn message.
    */
   warn()
   {
      console.warn(`Warn: ${JSON.stringify(arguments)}`);
   }
}