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

var _cyclic = require('../cyclic')

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var ArrayType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(ArrayType, _Type)

    function ArrayType(elementType) {
      var _this

      ;(0, _classCallCheck2['default'])(this, ArrayType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(ArrayType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'ArrayType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'elementType',
        void 0
      )
      ;(0, _Type2.assertIsType)(elementType, 'elementType')
      _this.elementType = elementType
      return _this
    }

    ;(0, _createClass2['default'])(ArrayType, [
      {
        key: 'errors',
        value:
          /*#__PURE__*/
          _regenerator['default'].mark(function errors(
            validation,
            path,
            input
          ) {
            var elementType, length, i
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (Array.isArray(input)) {
                        _context.next = 4
                        break
                      }

                      _context.next = 3
                      return new _InvalidTypeErrorItem['default'](
                        path,
                        input,
                        this
                      )

                    case 3:
                      return _context.abrupt('return')

                    case 4:
                      if (!validation.inCycle(this, input)) {
                        _context.next = 6
                        break
                      }

                      return _context.abrupt('return')

                    case 6:
                      validation.startCycle(this, input)
                      elementType = this.elementType
                      length = input.length
                      i = 0

                    case 10:
                      if (!(i < length)) {
                        _context.next = 15
                        break
                      }

                      return _context.delegateYield(
                        elementType.errors(
                          validation,
                          path.concat(i),
                          input[i]
                        ),
                        't0',
                        12
                      )

                    case 12:
                      i++
                      _context.next = 10
                      break

                    case 15:
                      validation.endCycle(this, input)

                    case 16:
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
          if (!Array.isArray(input)) {
            return false
          }

          if ((0, _cyclic.inValidationCycle)(this, input)) {
            return true
          }

          ;(0, _cyclic.startValidationCycle)(this, input)
          var elementType = this.elementType
          var length = input.length

          for (var i = 0; i < length; i++) {
            if (!elementType.accepts(input[i])) {
              ;(0, _cyclic.endValidationCycle)(this, input)
              return false
            }
          }

          ;(0, _cyclic.endValidationCycle)(this, input)
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
          ) {
            var formatted = this.toString()
            return /\n/.test(formatted)
              ? 'of type:\n\n'.concat(formatted.replace(/^/gm, '  '))
              : 'an '.concat(formatted)
          }

          var elementType = this.elementType

          if ((0, _cyclic.inToStringCycle)(this)) {
            if (typeof elementType.typeName === 'string') {
              return 'Array<$Cycle<'.concat(elementType.typeName, '>>')
            } else {
              return 'Array<$Cycle<Object>>'
            }
          }

          ;(0, _cyclic.startToStringCycle)(this)
          var output = 'Array<'.concat(elementType.toString(), '>')
          ;(0, _cyclic.endToStringCycle)(this)
          return output
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return ArrayType
  })(_Type2['default'])

exports['default'] = ArrayType
