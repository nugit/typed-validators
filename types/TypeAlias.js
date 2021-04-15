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

var _typeConstraints = require('../typeConstraints')

var TypeAlias =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(TypeAlias, _Type)

    function TypeAlias(name, type) {
      var _this

      ;(0, _classCallCheck2['default'])(this, TypeAlias)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(TypeAlias).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'TypeAlias'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'name',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'type',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'constraints',
        []
      )
      ;(0, _Type2.assertIsType)(type, 'type')
      _this.name = name
      _this.type = type
      return _this
    }

    ;(0, _createClass2['default'])(TypeAlias, [
      {
        key: 'resolveType',
        value: function resolveType() {
          return this.type.resolveType()
        },
      },
      {
        key: 'addConstraint',
        value: function addConstraint() {
          var _this$constraints

          ;(_this$constraints = this.constraints).push.apply(
            _this$constraints,
            arguments
          )

          return this
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
            var type,
              hasErrors,
              _iteratorNormalCompletion,
              _didIteratorError,
              _iteratorError,
              _iterator,
              _step,
              error

            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      type = this.type
                      hasErrors = false
                      _iteratorNormalCompletion = true
                      _didIteratorError = false
                      _iteratorError = undefined
                      _context.prev = 5
                      _iterator = type
                        .errors(validation, path, input)
                        [Symbol.iterator]()

                    case 7:
                      if (
                        (_iteratorNormalCompletion = (_step = _iterator.next())
                          .done)
                      ) {
                        _context.next = 15
                        break
                      }

                      error = _step.value
                      hasErrors = true
                      _context.next = 12
                      return error

                    case 12:
                      _iteratorNormalCompletion = true
                      _context.next = 7
                      break

                    case 15:
                      _context.next = 21
                      break

                    case 17:
                      _context.prev = 17
                      _context.t0 = _context['catch'](5)
                      _didIteratorError = true
                      _iteratorError = _context.t0

                    case 21:
                      _context.prev = 21
                      _context.prev = 22

                      if (
                        !_iteratorNormalCompletion &&
                        _iterator['return'] != null
                      ) {
                        _iterator['return']()
                      }

                    case 24:
                      _context.prev = 24

                      if (!_didIteratorError) {
                        _context.next = 27
                        break
                      }

                      throw _iteratorError

                    case 27:
                      return _context.finish(24)

                    case 28:
                      return _context.finish(21)

                    case 29:
                      if (hasErrors) {
                        _context.next = 31
                        break
                      }

                      return _context.delegateYield(
                        (0, _typeConstraints.collectConstraintErrors)(
                          this,
                          validation,
                          path,
                          input
                        ),
                        't1',
                        31
                      )

                    case 31:
                    case 'end':
                      return _context.stop()
                  }
                }
              },
              errors,
              this,
              [
                [5, 17, 21, 29],
                [22, , 24, 28],
              ]
            )
          }),
      },
      {
        key: 'accepts',
        value: function accepts(input) {
          var type = this.type

          if (!type.accepts(input)) {
            return false
          } else if (!(0, _typeConstraints.constraintsAccept)(this, input)) {
            return false
          } else {
            return true
          }
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return this.name
        },
      },
      {
        key: 'hasConstraints',
        get: function get() {
          return this.constraints.length > 0
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return this.type.acceptsSomeCompositeTypes
        },
      },
    ])
    return TypeAlias
  })(_Type2['default'])

exports['default'] = TypeAlias
