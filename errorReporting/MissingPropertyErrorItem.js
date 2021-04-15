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

var MissingPropertyErrorItem =
  /*#__PURE__*/
  (function(_RuntimeTypeErrorItem) {
    ;(0, _inherits2['default'])(MissingPropertyErrorItem, _RuntimeTypeErrorItem)

    function MissingPropertyErrorItem(
      path,
      valueAtPath,
      expectedTypeAtPath,
      propertyType
    ) {
      var _this

      ;(0, _classCallCheck2['default'])(this, MissingPropertyErrorItem)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(MissingPropertyErrorItem).call(
          this,
          path,
          valueAtPath,
          expectedTypeAtPath,
          path.length + 1
        )
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'propertyType',
        void 0
      )
      _this.propertyType = propertyType
      return _this
    }

    ;(0, _createClass2['default'])(MissingPropertyErrorItem, [
      {
        key: 'messageAtPath',
        value: function messageAtPath() {
          return 'is missing required property '
            .concat(
              (0, _keyToString.keyToString)(this.propertyType.key),
              ', which must be '
            )
            .concat(
              this.propertyType.value.toString({
                formatForMustBe: true,
              })
            )
        },
      },
    ])
    return MissingPropertyErrorItem
  })(_RuntimeTypeErrorItem2['default'])

exports['default'] = MissingPropertyErrorItem
;(0, _defineProperty2['default'])(MissingPropertyErrorItem, 'code', void 0)
