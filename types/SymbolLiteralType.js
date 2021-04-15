'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'))

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
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

var SymbolLiteralType =
  /*#__PURE__*/
  (function(_PrimitiveLiteralType) {
    ;(0, _inherits2['default'])(SymbolLiteralType, _PrimitiveLiteralType)

    function SymbolLiteralType(value) {
      var _this

      ;(0, _classCallCheck2['default'])(this, SymbolLiteralType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(SymbolLiteralType).call(this, value)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'SymbolLiteralType'
      )

      if ((0, _typeof2['default'])(value) !== 'symbol') {
        throw new Error('value must be symbol')
      }

      return _this
    }

    return SymbolLiteralType
  })(_PrimitiveLiteralType2['default'])

exports['default'] = SymbolLiteralType
