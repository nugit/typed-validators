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

var NumericLiteralType =
  /*#__PURE__*/
  (function(_PrimitiveLiteralType) {
    ;(0, _inherits2['default'])(NumericLiteralType, _PrimitiveLiteralType)

    function NumericLiteralType(value) {
      var _this

      ;(0, _classCallCheck2['default'])(this, NumericLiteralType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(NumericLiteralType).call(this, value)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'NumericLiteralType'
      )

      if (typeof value !== 'number') {
        throw new Error('value must be a number')
      }

      return _this
    }

    ;(0, _createClass2['default'])(NumericLiteralType, [
      {
        key: 'toString',
        value: function toString() {
          return Object.is(this.value, -0) ? '-0' : String(this.value)
        },
      },
    ])
    return NumericLiteralType
  })(_PrimitiveLiteralType2['default'])

exports['default'] = NumericLiteralType
