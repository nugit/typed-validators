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

var _keyToString = require('./keyToString')

var _RuntimeTypeErrorItem2 = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

var InvalidKeyTypeErrorItem =
  /*#__PURE__*/
  (function(_RuntimeTypeErrorItem) {
    ;(0, _inherits2['default'])(InvalidKeyTypeErrorItem, _RuntimeTypeErrorItem)

    function InvalidKeyTypeErrorItem(
      path,
      valueAtPath,
      expectedTypeAtPath,
      key,
      expectedKeyType
    ) {
      var _this

      ;(0, _classCallCheck2['default'])(this, InvalidKeyTypeErrorItem)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(InvalidKeyTypeErrorItem).call(
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
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'expectedKeyType',
        void 0
      )
      _this.key = key
      _this.expectedKeyType = expectedKeyType
      return _this
    }

    ;(0, _createClass2['default'])(InvalidKeyTypeErrorItem, [
      {
        key: 'messageAtPath',
        value: function messageAtPath() {
          return 'has key of invalid type: '
            .concat(
              (0, _keyToString.keyToString)(this.key),
              '\n\nEach key must be '
            )
            .concat(
              this.expectedKeyType.toString({
                formatForMustBe: true,
              })
            )
        },
      },
    ])
    return InvalidKeyTypeErrorItem
  })(_RuntimeTypeErrorItem2['default'])

exports['default'] = InvalidKeyTypeErrorItem
;(0, _defineProperty2['default'])(InvalidKeyTypeErrorItem, 'code', void 0)
