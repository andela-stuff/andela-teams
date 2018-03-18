/**
 * @fileOverview Event Bus
 *
 * @author Franklin Chieze
 *
 * @requires NPM:events
 * @requires NPM:lodash
 */

import EventEmitter from 'events';
import _ from 'lodash';

/**
* @class EventBus
*/
class EventBus extends EventEmitter {
  // this.emit('message', payload) if available by default

  /**
   * @method addNotification
   *
   * @param { any } type type
   * @param { string } text text
   * @param { any } options options
   *
   * @returns { undefined } undefined
   */
  addNotification(type, text, options) {
    const props = _.extend(options, {
      type,
    });

    this.emit('notification', { text, props });
  }
}

const eventBus = new EventBus();
export default eventBus;
