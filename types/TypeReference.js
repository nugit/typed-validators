'use strict'

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

var _Type2 = _interopRequireDefault(require('./Type'))

var TypeReference =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(TypeReference, _Type)

    function TypeReference(type) {
      var _this

      ;(0, _classCallCheck2['default'])(this, TypeReference)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(TypeReference).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'TypeReference'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'type',
        void 0
      )
      _this.type = type
      return _this
    }

    ;(0, _createClass2['default'])(TypeReference, [
      {
        key: 'resolveType',
        value: function resolveType() {
          return this.type().resolveType()
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
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return _context.delegateYield(
                        this.type().errors(validation, path, input),
                        't0',
                        1
                      )

                    case 1:
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
          return this.type().accepts(input)
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return this.type().toString()
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return this.type().acceptsSomeCompositeTypes
        },
      },
    ])
    return TypeReference
  })(_Type2['default'])

exports['default'] = TypeReference
