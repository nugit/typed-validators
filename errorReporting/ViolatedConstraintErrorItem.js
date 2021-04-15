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

var ViolatedConstraintErrorItem =
  /*#__PURE__*/
  (function(_RuntimeTypeErrorItem) {
    ;(0, _inherits2['default'])(
      ViolatedConstraintErrorItem,
      _RuntimeTypeErrorItem
    )

    function ViolatedConstraintErrorItem(
      path,
      valueAtPath,
      expectedTypeAtPath,
      constraintErrorMessage
    ) {
      var _this

      ;(0, _classCallCheck2['default'])(this, ViolatedConstraintErrorItem)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(ViolatedConstraintErrorItem).call(
          this,
          path,
          valueAtPath,
          expectedTypeAtPath
        )
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'constraintErrorMessage',
        void 0
      )
      _this.constraintErrorMessage = constraintErrorMessage
      return _this
    }

    ;(0, _createClass2['default'])(ViolatedConstraintErrorItem, [
      {
        key: 'messageAtPath',
        value: function messageAtPath() {
          return this.constraintErrorMessage
        },
      },
    ])
    return ViolatedConstraintErrorItem
  })(_RuntimeTypeErrorItem2['default'])

exports['default'] = ViolatedConstraintErrorItem
;(0, _defineProperty2['default'])(ViolatedConstraintErrorItem, 'code', void 0)
