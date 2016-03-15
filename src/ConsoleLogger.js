'use strict';

/* eslint-disable no-console */

/**
 * ConsoleLogger.js -- Provides basic logging functionality with all log messages posting to `console.log`.
 * Trace will also output "console.trace()" after the log message is posted.
 */
export default class ConsoleLogger
{
   /**
    * Sets the serializer; defaults to `JSON` if none supplied.
    *
    * @param {Object} serializer - An instance that conform to the JSON API.
    */
   constructor(serializer = JSON)
   {
      this.setSerializer(serializer);
   }

   /**
    * Post debug message.
    */
   debug()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = this._serializer.stringify(arguments); }
      catch (ignore) { /* ignore */ }

      if (message !== undefined) { console.log(`Debug: ${message}`); }
   }

   /**
    * Post error message.
    */
   error()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = this._serializer.stringify(arguments); }
      catch (ignore) { /* ignore */ }

      if (message !== undefined) { console.log(`Error: ${message}`); }
   }

   /**
    * Post fatal message.
    */
   fatal()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = this._serializer.stringify(arguments); }
      catch (ignore) { /* ignore */ }

      if (message !== undefined) { console.log(`Fatal: ${message}`); }
   }

   /**
    * Returns the serializer.
    *
    * @returns {Object|*}
    */
   getSerializer()
   {
      return this._serializer;
   }

   /**
    * Post info message.
    */
   info()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = this._serializer.stringify(arguments); }
      catch (ignore) { /* ignore */ }

      if (message !== undefined) { console.log(`Info: ${message}`); }
   }

   /**
    * Sets the serializer which must conform to the JSON API.
    *
    * @param {Object}   serializer - An instance of a JSON like serializer.
    */
   setSerializer(serializer)
   {
      if (typeof serializer !== 'object' || typeof serializer.stringify !== 'function' ||
       typeof serializer.parse !== 'function')
      {
         throw new TypeError('setSerializer - `serializer` does not conform to the JSON API.');
      }

      this._serializer = serializer;
   }

   /**
    * Post trace message.
    */
   trace()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = this._serializer.stringify(arguments); }
      catch (ignore) { /* ignore */ }

      if (message !== undefined) { console.log(`Trace: ${message}`); console.trace(); }
   }

   /**
    * Post warn message.
    */
   warn()
   {
      let message;

      // Attempt to convert the arguments to a string.
      try { message = this._serializer.stringify(arguments); }
      catch (ignore) { /* ignore */ }

      if (message !== undefined) { console.log(`Warn: ${message}`); }
   }
}