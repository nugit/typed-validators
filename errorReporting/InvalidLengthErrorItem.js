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

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
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

var _Validation = require('../Validation')

var InvalidLengthErrorItem =
  /*#__PURE__*/
  (function(_RuntimeTypeErrorItem) {
    ;(0, _inherits2['default'])(InvalidLengthErrorItem, _RuntimeTypeErrorItem)

    function InvalidLengthErrorItem(
      path,
      valueAtPath,
      expectedTypeAtPath,
      expectedLength
    ) {
      var _this

      ;(0, _classCallCheck2['default'])(this, InvalidLengthErrorItem)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(InvalidLengthErrorItem).call(
          this,
          path,
          valueAtPath,
          expectedTypeAtPath,
          path.length + 1
        )
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'valueAtPath',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'expectedLength',
        void 0
      )
      _this.valueAtPath = valueAtPath
      _this.expectedLength = expectedLength
      return _this
    }

    ;(0, _createClass2['default'])(InvalidLengthErrorItem, [
      {
        key: 'messageAtPath',
        value: function messageAtPath() {
          return 'length must be '
            .concat(this.expectedLength, ', instead it is ')
            .concat(this.valueAtPath.length)
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return ''
            .concat((0, _Validation.stringifyPath)(this.path), '.')
            .concat(this.messageAtPath())
        },
      },
    ])
    return InvalidLengthErrorItem
  })(_RuntimeTypeErrorItem2['default'])

exports['default'] = InvalidLengthErrorItem
;(0, _defineProperty2['default'])(InvalidLengthErrorItem, 'code', void 0)
