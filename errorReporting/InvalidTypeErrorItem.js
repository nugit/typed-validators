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

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
)

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
)

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits')
)

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _RuntimeTypeErrorItem2 = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

var InvalidTypeErrorItem =
  /*#__PURE__*/
  (function(_RuntimeTypeErrorItem) {
    ;(0, _inherits2['default'])(InvalidTypeErrorItem, _RuntimeTypeErrorItem)

    function InvalidTypeErrorItem(path, valueAtPath, expectedTypeAtPath) {
      ;(0, _classCallCheck2['default'])(this, InvalidTypeErrorItem)
      return (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(InvalidTypeErrorItem).call(
          this,
          path,
          valueAtPath,
          expectedTypeAtPath
        )
      )
    }

    ;(0, _createClass2['default'])(InvalidTypeErrorItem, [
      {
        key: 'messageAtPath',
        value: function messageAtPath() {
          return 'must be '.concat(
            this.expectedTypeAtPath.toString({
              formatForMustBe: true,
            })
          )
        },
      },
    ])
    return InvalidTypeErrorItem
  })(_RuntimeTypeErrorItem2['default'])

exports['default'] = InvalidTypeErrorItem
;(0, _defineProperty2['default'])(InvalidTypeErrorItem, 'code', void 0)
