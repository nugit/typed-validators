'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

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

var _MissingPropertyErrorItem = _interopRequireDefault(
  require('../errorReporting/MissingPropertyErrorItem')
)

var _keyToString = require('../errorReporting/keyToString')

var ObjectTypeProperty =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(ObjectTypeProperty, _Type)

    function ObjectTypeProperty(key, value, optional) {
      var _this

      ;(0, _classCallCheck2['default'])(this, ObjectTypeProperty)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(ObjectTypeProperty).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'ObjectTypeProperty'
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
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'optional',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        '__objectType',
        null
      )

      switch ((0, _typeof2['default'])(key)) {
        case 'number':
        case 'string':
        case 'symbol':
          break

        default:
          throw new Error('key must be a number, string or symbol')
      }

      ;(0, _Type2.assertIsType)(value, 'value')
      _this.key = key
      _this.value = value
      _this.optional = optional
      return _this
    }

    ;(0, _createClass2['default'])(ObjectTypeProperty, [
      {
        key: 'clone',
        value: function clone() {
          return new ObjectTypeProperty(this.key, this.value, this.optional)
        },
        /**
         * Determine whether the property exists on the given input or its prototype chain.
         */
      },
      {
        key: 'existsOn',
        value: function existsOn(input) {
          // @flowIgnore
          var key = this.key
          return key in input === true
        },
      },
      {
        key: 'errors',
        value:
          /*#__PURE__*/
          _regenerator['default'].mark(function errors(
            validation,
            path,
            input
          ) {
            var optional, key, value, targetPath, target
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      // @flowIgnore
                      ;(optional = this.optional),
                        (key = this.key),
                        (value = this.value)
                      targetPath = path.concat(key)

                      if (!(!optional && !this.existsOn(input))) {
                        _context.next = 6
                        break
                      }

                      _context.next = 5
                      return new _MissingPropertyErrorItem['default'](
                        path,
                        input,
                        this.__objectType,
                        this
                      )

                    case 5:
                      return _context.abrupt('return')

                    case 6:
                      target = input[key]

                      if (!(optional && target === undefined)) {
                        _context.next = 9
                        break
                      }

                      return _context.abrupt('return')

                    case 9:
                      return _context.delegateYield(
                        value.errors(validation, targetPath, target),
                        't0',
                        10
                      )

                    case 10:
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
          // @flowIgnore
          var optional = this.optional,
            key = this.key,
            value = this.value

          if (!optional && !this.existsOn(input)) {
            return false
          }

          var target = input[key]

          if (optional && target === undefined) {
            return true
          }

          return value.accepts(target)
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return ''
            .concat((0, _keyToString.keyToString)(this.key))
            .concat(this.optional ? '?' : '', ': ')
            .concat(this.value.toString())
        },
      },
    ])
    return ObjectTypeProperty
  })(_Type2['default'])

exports['default'] = ObjectTypeProperty
