+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';

  var Module = scope.Module,
    proto;

  function IRLed(board, encode) {
    Module.call(this);
    this._board = board;
    this._encode = encode;
    this._board.send([0xf4, 0x09, 0x03, 0xe9, 0x00, 0x00]);
  }

  IRLed.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: IRLed
    },
    code: {
      get: function () {
        return this._value.value;
      },
      set: function (val) {
        this._value = val;
      }
    },
    state: {
      get: function () {
        return this._state;
      },
      set: function (val) {
        this._state = val;
      }
    }
  });

  proto.on = function (callback) {
    this._board.sendSysex(0x04, [0x09, 0x04, 0x20, 0x20, 0xdf, 0x10, 0xef]);
    this._state = 'on';
  };

  proto.off = function (callback) {
    this._state = 'off';
  };

  scope.module.IRLed = IRLed;
}));