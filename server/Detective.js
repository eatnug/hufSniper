const util = require('util');
const EventEmitter = require('events').EventEmitter;

const makeEventHandler = function(mod) {
    util.inherits(mod, EventEmitter);
    return new mod()
}

const detecting = () => {
    this
}