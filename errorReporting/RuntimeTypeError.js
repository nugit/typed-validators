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

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
)

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
)

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits')
)

var _wrapNativeSuper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/wrapNativeSuper')
)

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _stringifyValue = _interopRequireDefault(require('./stringifyValue'))

var delimiter = '\n\n-------------------------------------------------\n\n'

var RuntimeTypeError =
  /*#__PURE__*/
  (function(_TypeError) {
    ;(0, _inherits2['default'])(RuntimeTypeError, _TypeError)

    function RuntimeTypeError(errors) {
      var _this

      ;(0, _classCallCheck2['default'])(this, RuntimeTypeError)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(RuntimeTypeError).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'name',
        'RuntimeTypeError'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'errors',
        void 0
      )
      _this.errors = errors
      return _this
    }

    ;(0, _createClass2['default'])(RuntimeTypeError, [
      {
        key: 'formatMessage',
        value: function formatMessage() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref$limit = _ref.limit,
            limit = _ref$limit === void 0 ? 10000 : _ref$limit

          var result = []
          var remaining =
            limit -
            delimiter.length +
            '... '.concat(this.errors.length, ' more errors').length

          for (var i = 0; i < this.errors.length; i++) {
            var error = this.errors[i]
            if (result.length) remaining -= delimiter.length
            var stringified = error.toString()
            remaining -= stringified.length
            var actualValuePart = '\n\nActual Value: '.concat(
              (0, _stringifyValue['default'])(error.valueAtPath, {
                limit: remaining - '\n\nActual Value: '.length,
              })
            )
            remaining -= actualValuePart.length

            if (remaining < 0 && result.length) {
              result.push('... '.concat(this.errors.length - i, ' more errors'))
              break
            }

            result.push(
              remaining < 0 ? stringified : stringified + actualValuePart
            )
          }

          return result.join(delimiter)
        },
      },
      {
        key: 'message',
        get: function get() {
          return this.formatMessage()
        },
      },
    ])
    return RuntimeTypeError
  })((0, _wrapNativeSuper2['default'])(TypeError))

exports['default'] = RuntimeTypeError
