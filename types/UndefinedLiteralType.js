'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

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

var UndefinedLiteralType =
  /*#__PURE__*/
  (function(_PrimitiveLiteralType) {
    ;(0, _inherits2['default'])(UndefinedLiteralType, _PrimitiveLiteralType)

    function UndefinedLiteralType() {
      var _this

      ;(0, _classCallCheck2['default'])(this, UndefinedLiteralType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(UndefinedLiteralType).call(
          this,
          undefined
        )
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'UndefinedLiteralType'
      )
      return _this
    }

    return UndefinedLiteralType
  })(_PrimitiveLiteralType2['default'])

exports['default'] = UndefinedLiteralType