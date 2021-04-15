'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

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

var _Type2 = _interopRequireWildcard(require('./Type'))

var _InvalidLengthErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidLengthErrorItem')
)

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var TupleType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(TupleType, _Type)

    function TupleType(types) {
      var _this

      ;(0, _classCallCheck2['default'])(this, TupleType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(TupleType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'TupleType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'types',
        void 0
      )

      for (var i = 0; i < types.length; i++) {
        ;(0, _Type2.assertIsType)(types[i], 'types['.concat(i, ']'))
      }

      _this.types = types
      return _this
    }

    ;(0, _createClass2['default'])(TupleType, [
      {
        key: 'errors',
        value:
          /*#__PURE__*/
          _regenerator['default'].mark(function errors(
            validation,
            path,
            input
          ) {
            var types, i
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      types = this.types

                      if (Array.isArray(input)) {
                        _context.next = 5
                        break
                      }

                      _context.next = 4
                      return new _InvalidTypeErrorItem['default'](
                        path,
                        input,
                        this
                      )

                    case 4:
                      return _context.abrupt('return')

                    case 5:
                      if (!(input.length !== types.length)) {
                        _context.next = 8
                        break
                      }

                      _context.next = 8
                      return new _InvalidLengthErrorItem['default'](
                        path,
                        input,
                        this,
                        types.length
                      )

                    case 8:
                      i = 0

                    case 9:
                      if (!(i < Math.min(input.length, types.length))) {
                        _context.next = 14
                        break
                      }

                      return _context.delegateYield(
                        types[i].errors(validation, path.concat(i), input[i]),
                        't0',
                        11
                      )

                    case 11:
                      i++
                      _context.next = 9
                      break

                    case 14:
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
          var types = this.types
          var length = types.length

          if (!Array.isArray(input) || input.length !== length) {
            return false
          }

          for (var i = 0; i < length; i++) {
            var type = types[i]

            if (!type.accepts(input[i])) {
              return false
            }
          }

          return true
        },
      },
      {
        key: 'toString',
        value: function toString(options) {
          if (
            options === null || options === void 0
              ? void 0
              : options.formatForMustBe
          )
            return 'of type '.concat(this.toString())
          return '['.concat(this.types.join(', '), ']')
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return TupleType
  })(_Type2['default'])

exports['default'] = TupleType
