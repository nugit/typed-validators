'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _Validation = require('../Validation')

var RuntimeTypeErrorItem =
  /*#__PURE__*/
  (function() {
    function RuntimeTypeErrorItem(path, valueAtPath, expectedTypeAtPath) {
      var depth =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : path.length
      ;(0, _classCallCheck2['default'])(this, RuntimeTypeErrorItem)
      ;(0, _defineProperty2['default'])(this, 'path', void 0)
      ;(0, _defineProperty2['default'])(this, 'valueAtPath', void 0)
      ;(0, _defineProperty2['default'])(this, 'expectedTypeAtPath', void 0)
      ;(0, _defineProperty2['default'])(this, 'depth', void 0)
      this.path = path
      this.valueAtPath = valueAtPath
      this.expectedTypeAtPath = expectedTypeAtPath
      this.depth = depth
    }

    ;(0, _createClass2['default'])(RuntimeTypeErrorItem, [
      {
        key: 'toString',
        value: function toString() {
          return ''
            .concat((0, _Validation.stringifyPath)(this.path), ' ')
            .concat(this.messageAtPath())
        },
      },
    ])
    return RuntimeTypeErrorItem
  })()

exports['default'] = RuntimeTypeErrorItem
;(0, _defineProperty2['default'])(RuntimeTypeErrorItem, 'code', '')
