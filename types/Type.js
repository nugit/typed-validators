'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.assertIsType = assertIsType
exports['default'] = void 0

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _Validation = _interopRequireDefault(require('../Validation'))

var _RuntimeTypeError = _interopRequireDefault(
  require('../errorReporting/RuntimeTypeError')
)

function assertIsType(x, name) {
  if (!(x instanceof Type))
    throw new Error(''.concat(name, ' must be an instance of Type'))
}
/**
 * # Type
 *
 * This is the base class for all types.
 */

var Type =
  /*#__PURE__*/
  (function() {
    function Type() {
      ;(0, _classCallCheck2['default'])(this, Type)
      ;(0, _defineProperty2['default'])(this, '__type', null)
      ;(0, _defineProperty2['default'])(this, 'typeName', 'Type')
    }

    ;(0, _createClass2['default'])(Type, [
      {
        key: 'resolveType',
        value: function resolveType() {
          return this
        },
      },
      {
        key: 'assert',
        value: function assert(input) {
          var prefix =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : ''
          var path =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : ['input']
          var validation = this.validate(input, prefix, path)

          if (validation.errors.length) {
            throw new _RuntimeTypeError['default'](validation.errors)
          }

          return input
        },
      },
      {
        key: 'validate',
        value: function validate(input) {
          var prefix =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : ''
          var path =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : ['input']
          var validation = new _Validation['default'](input, prefix, path)
          var _iteratorNormalCompletion = true
          var _didIteratorError = false
          var _iteratorError = undefined

          try {
            for (
              var _iterator = this.errors(validation, path, input)[
                  Symbol.iterator
                ](),
                _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var error = _step.value
              validation.errors.push(error)
            }
          } catch (err) {
            _didIteratorError = true
            _iteratorError = err
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return'] != null) {
                _iterator['return']()
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError
              }
            }
          }

          return validation
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return false
        },
      },
    ])
    return Type
  })()

exports['default'] = Type
