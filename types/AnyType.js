'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

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

var _Type2 = _interopRequireDefault(require('./Type'))

var AnyType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(AnyType, _Type)

    function AnyType() {
      var _getPrototypeOf2

      var _this

      ;(0, _classCallCheck2['default'])(this, AnyType)

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
          AnyType
        )).call.apply(_getPrototypeOf2, [this].concat(args))
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'AnyType'
      )
      return _this
    }

    ;(0, _createClass2['default'])(AnyType, [
      {
        key: 'errors',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        value:
          /*#__PURE__*/
          _regenerator['default'].mark(function errors() {
            return _regenerator['default'].wrap(function errors$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                  case 'end':
                    return _context.stop()
                }
              }
            }, errors)
          }), // eslint-disable-next-line @typescript-eslint/no-unused-vars
      },
      {
        key: 'accepts',
        value: function accepts(input) {
          return true
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return 'any'
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return AnyType
  })(_Type2['default'])

exports['default'] = AnyType
