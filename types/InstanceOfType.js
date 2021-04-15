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

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
)

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
)

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
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

var InstanceOfType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(InstanceOfType, _Type)
    ;(0, _createClass2['default'])(InstanceOfType, [
      {
        key: 'classType',
        get: function get() {
          return this._classType()
        },
      },
    ])

    function InstanceOfType(classType) {
      var _this

      ;(0, _classCallCheck2['default'])(this, InstanceOfType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(InstanceOfType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'InstanceOfType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        '_classType',
        void 0
      )
      _this._classType = classType
      return _this
    }

    ;(0, _createClass2['default'])(InstanceOfType, [
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
                      if (input instanceof this.classType) {
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
          return input instanceof this.classType
        },
      },
      {
        key: 'toString',
        value: function toString(options) {
          return (options === null || options === void 0
          ? void 0
          : options.formatForMustBe)
            ? 'an instance of '.concat(
                this.classType.prototype.constructor.name
              )
            : this.classType.prototype.constructor.name
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return InstanceOfType
  })(_Type2['default'])

exports['default'] = InstanceOfType
