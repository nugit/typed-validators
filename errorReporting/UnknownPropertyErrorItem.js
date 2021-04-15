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

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _RuntimeTypeErrorItem2 = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

var _keyToString = require('./keyToString')

var UnknownPropertyErrorItem =
  /*#__PURE__*/
  (function(_RuntimeTypeErrorItem) {
    ;(0, _inherits2['default'])(UnknownPropertyErrorItem, _RuntimeTypeErrorItem)

    function UnknownPropertyErrorItem(
      path,
      valueAtPath,
      expectedTypeAtPath,
      key
    ) {
      var _this

      ;(0, _classCallCheck2['default'])(this, UnknownPropertyErrorItem)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(UnknownPropertyErrorItem).call(
          this,
          path,
          valueAtPath,
          expectedTypeAtPath,
          path.length + 1
        )
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'key',
        void 0
      )
      _this.key = key
      return _this
    }

    ;(0, _createClass2['default'])(UnknownPropertyErrorItem, [
      {
        key: 'messageAtPath',
        value: function messageAtPath() {
          return 'has unknown property: '.concat(
            (0, _keyToString.keyToString)(this.key)
          )
        },
      },
    ])
    return UnknownPropertyErrorItem
  })(_RuntimeTypeErrorItem2['default'])

exports['default'] = UnknownPropertyErrorItem
;(0, _defineProperty2['default'])(UnknownPropertyErrorItem, 'code', void 0)
