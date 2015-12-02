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
      let message;

      // Attempt to convert the arguments to a string.
      try { message = JSON.stringify(arguments); }
      catch(ignore) { /* ignore */}

      if (message !== undefined) { console.log(`Debug: ${message}`); }
   }

   /**
    * Post error message.
    */
   error()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = JSON.stringify(arguments); }
      catch(ignore) { /* ignore */}

      if (message !== undefined) { console.log(`Error: ${message}`); }
   }

   /**
    * Post fatal message.
    */
   fatal()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = JSON.stringify(arguments); }
      catch(ignore) { /* ignore */}

      if (message !== undefined) { console.log(`Fatal: ${message}`); }
   }

   /**
    * Post info message.
    */
   info()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = JSON.stringify(arguments); }
      catch(ignore) { /* ignore */}

      if (message !== undefined) { console.log(`Info: ${message}`); }
   }

   /**
    * Post trace message.
    */
   trace()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = JSON.stringify(arguments); }
      catch(ignore) { /* ignore */}

      if (message !== undefined) { console.log(`Trace: ${message}`); console.trace(); }
   }

   /**
    * Post warn message.
    */
   warn()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = JSON.stringify(arguments); }
      catch(ignore) { /* ignore */}

      if (message !== undefined) { console.log(`Warn: ${message}`); }
   }
}