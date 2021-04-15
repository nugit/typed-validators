'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _AnyType = _interopRequireDefault(require('./AnyType'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

class UnknownType extends _AnyType.default {
  constructor(...args) {
    super(...args)

    _defineProperty(this, 'typeName', 'UnknownType')
  }

  toString() {
    return 'unknown'
  }
}

exports.default = UnknownType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Vbmtub3duVHlwZS50cyJdLCJuYW1lcyI6WyJVbmtub3duVHlwZSIsIkFueVR5cGUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFZSxNQUFNQSxXQUFOLFNBQTBCQyxnQkFBMUIsQ0FBMkM7QUFBQTtBQUFBOztBQUFBLHNDQUM3QyxhQUQ2QztBQUFBOztBQUd4REMsRUFBQUEsUUFBUSxHQUFXO0FBQ2pCLFdBQU8sU0FBUDtBQUNEOztBQUx1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbnlUeXBlIGZyb20gJy4vQW55VHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5rbm93blR5cGUgZXh0ZW5kcyBBbnlUeXBlPHVua25vd24+IHtcbiAgdHlwZU5hbWUgPSAnVW5rbm93blR5cGUnXG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3Vua25vd24nXG4gIH1cbn1cbiJdfQ==
