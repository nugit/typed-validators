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

var _PrimitiveLiteralType2 = _interopRequireDefault(
  require('./PrimitiveLiteralType')
)

var StringLiteralType =
  /*#__PURE__*/
  (function(_PrimitiveLiteralType) {
    ;(0, _inherits2['default'])(StringLiteralType, _PrimitiveLiteralType)

    function StringLiteralType(value) {
      var _this

      ;(0, _classCallCheck2['default'])(this, StringLiteralType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(StringLiteralType).call(this, value)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'StringLiteralType'
      )

      if (typeof value !== 'string') {
        throw new Error('value must be a string')
      }

      return _this
    }

    ;(0, _createClass2['default'])(StringLiteralType, [
      {
        key: 'toString',
        value: function toString() {
          return JSON.stringify(this.value)
        },
      },
    ])
    return StringLiteralType
  })(_PrimitiveLiteralType2['default'])

exports['default'] = StringLiteralType
