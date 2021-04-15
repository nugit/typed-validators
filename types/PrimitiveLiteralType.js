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

var _Type2 = _interopRequireDefault(require('./Type'))

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var PrimitiveLiteralType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(PrimitiveLiteralType, _Type)

    function PrimitiveLiteralType(value) {
      var _this

      ;(0, _classCallCheck2['default'])(this, PrimitiveLiteralType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(PrimitiveLiteralType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'PrimitiveLiteralType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'value',
        void 0
      )
      _this.value = value
      return _this
    }

    ;(0, _createClass2['default'])(PrimitiveLiteralType, [
      {
        key: 'errors',
        value:
          /*#__PURE__*/
          _regenerator['default'].mark(function errors(
            validation,
            path,
            input
          ) {
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (this.accepts(input)) {
                        _context.next = 3
                        break
                      }

                      _context.next = 3
                      return new _InvalidTypeErrorItem['default'](
                        path,
                        input,
                        this
                      )

                    case 3:
                    case 'end':
                      return _context.stop()
                  }
                }
              },
              errors,
              this
            )
          }),
      },
      {
        key: 'accepts',
        value: function accepts(input) {
          return Object.is(input, this.value)
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return String(this.value)
        },
      },
    ])
    return PrimitiveLiteralType
  })(_Type2['default'])

exports['default'] = PrimitiveLiteralType
