'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.keyToString = keyToString

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'))

function keyToString(key) {
  switch ((0, _typeof2['default'])(key)) {
    case 'symbol':
      return '['.concat(String(key), ']')

    case 'number':
      return String(key)

    case 'string':
      if (/^[_a-z][_a-z0-9]*$/i.test(key)) return key
  }

  return JSON.stringify(key)
}
