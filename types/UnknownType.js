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

var _getPrototypeOf3 = _interopRequireDefault(
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

var _AnyType2 = _interopRequireDefault(require('./AnyType'))

var UnknownType =
  /*#__PURE__*/
  (function(_AnyType) {
    ;(0, _inherits2['default'])(UnknownType, _AnyType)

    function UnknownType() {
      var _getPrototypeOf2

      var _this

      ;(0, _classCallCheck2['default'])(this, UnknownType)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3['default'])(
          UnknownType
        )).call.apply(_getPrototypeOf2, [this].concat(args))
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'UnknownType'
      )
      return _this
    }

    ;(0, _createClass2['default'])(UnknownType, [
      {
        key: 'toString',
        value: function toString() {
          return 'unknown'
        },
      },
    ])
    return UnknownType
  })(_AnyType2['default'])

exports['default'] = UnknownType
