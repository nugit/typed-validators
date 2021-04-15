'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
)

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'))

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

var _InvalidKeyTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidKeyTypeErrorItem')
)

var _marked =
  /*#__PURE__*/
  _regenerator['default'].mark(collectErrorsWithIndexers)

var RecordType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(RecordType, _Type)

    function RecordType(key, value) {
      var _this

      ;(0, _classCallCheck2['default'])(this, RecordType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(RecordType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'RecordType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'key',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'value',
        void 0
      )
      ;(0, _Type2.assertIsType)(key, 'key')
      ;(0, _Type2.assertIsType)(value, 'value')
      _this.key = key
      _this.value = value
      return _this
    }

    ;(0, _createClass2['default'])(RecordType, [
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
                      if (
                        !(
                          input == null ||
                          (0, _typeof2['default'])(input) !== 'object' ||
                          Array.isArray(input)
                        )
                      ) {
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
                      return _context.delegateYield(
                        collectErrorsWithIndexers(
                          this,
                          validation,
                          path,
                          input
                        ),
                        't0',
                        8
                      )

                    case 8:
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
          if (input === null) {
            return false
          }

          if (
            (0, _typeof2['default'])(input) !== 'object' ||
            Array.isArray(input)
          ) {
            return false
          }

          if ((0, _cyclic.inValidationCycle)(this, input)) {
            return true
          }

          ;(0, _cyclic.startValidationCycle)(this, input)
          var result = acceptsWithIndexers(this, input)
          ;(0, _cyclic.endValidationCycle)(this, input)
          return result
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
              : 'of type '.concat(formatted)
          }

          if ((0, _cyclic.inToStringCycle)(this)) {
            return '$Cycle<Record<string, any>>'
          }

          ;(0, _cyclic.startToStringCycle)(this)
          var result = 'Record<'.concat(this.key, ', ').concat(this.value, '>')
          ;(0, _cyclic.endToStringCycle)(this)
          return result
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return RecordType
  })(_Type2['default'])

exports['default'] = RecordType

function acceptsWithIndexers(type, input) {
  for (var key in input) {
    var value = input[key]
    if (!type.value.accepts(value)) return false
  }

  return true
}

function collectErrorsWithIndexers(type, validation, path, input) {
  var key
  return _regenerator['default'].wrap(function collectErrorsWithIndexers$(
    _context2
  ) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.t0 = _regenerator['default'].keys(input)

        case 1:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 9
            break
          }

          key = _context2.t1.value

          if (type.key.accepts(key)) {
            _context2.next = 6
            break
          }

          _context2.next = 6
          return new _InvalidKeyTypeErrorItem['default'](
            path,
            input,
            type,
            key,
            type.key
          )

        case 6:
          return _context2.delegateYield(
            type.value.errors(
              validation,
              [].concat((0, _toConsumableArray2['default'])(path), [key]),
              input[key]
            ),
            't2',
            7
          )

        case 7:
          _context2.next = 1
          break

        case 9:
        case 'end':
          return _context2.stop()
      }
    }
  },
  _marked)
}
