'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = mergeInexact

var _MergedObjectType = _interopRequireDefault(
  require('./types/MergedObjectType')
)

// @flow
function mergeInexact() {
  for (
    var _len = arguments.length, types = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    types[_key] = arguments[_key]
  }

  return new _MergedObjectType['default'](types, false)
}
