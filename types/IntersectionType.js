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

var _ObjectType = _interopRequireDefault(require('./ObjectType'))

var _MergedObjectType = _interopRequireDefault(require('./MergedObjectType'))

var _UnionType = _interopRequireDefault(require('./UnionType'))

var IntersectionType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(IntersectionType, _Type)

    function IntersectionType(types) {
      var _this

      ;(0, _classCallCheck2['default'])(this, IntersectionType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(IntersectionType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'IntersectionType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'types',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'resolved',
        void 0
      )

      for (var i = 0; i < types.length; i++) {
        ;(0, _Type2.assertIsType)(types[i], 'types['.concat(i, ']'))
      }

      _this.types = types
      return _this
    }

    ;(0, _createClass2['default'])(IntersectionType, [
      {
        key: 'resolveType',
        value: function resolveType() {
          if (!this.resolved) {
            var objects = []
            var rest = []
            var _iteratorNormalCompletion = true
            var _didIteratorError = false
            var _iteratorError = undefined

            try {
              for (
                var _iterator = this.types[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var t = _step.value
                var type = t.resolveType()
                if (type instanceof _ObjectType['default']) objects.push(type)
                else rest.push(type)
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

            if (objects.length && !rest.length) {
              this.resolved = new _MergedObjectType['default'](
                objects,
                !objects.find(function(obj) {
                  return obj.exact === false
                })
              ).resolveType()
            } else {
              this.resolved = this
            }
          }

          return this.resolved
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
            var resolved, types, length, i
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      resolved = this.resolveType()

                      if (!(resolved !== this)) {
                        _context.next = 4
                        break
                      }

                      return _context.delegateYield(
                        resolved.errors(validation, path, input),
                        't0',
                        3
                      )

                    case 3:
                      return _context.abrupt('return')

                    case 4:
                      types = this.types
                      length = types.length
                      i = 0

                    case 7:
                      if (!(i < length)) {
                        _context.next = 12
                        break
                      }

                      return _context.delegateYield(
                        types[i].errors(validation, path, input),
                        't1',
                        9
                      )

                    case 9:
                      i++
                      _context.next = 7
                      break

                    case 12:
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
          var resolved = this.resolveType()
          if (resolved !== this) return resolved.accepts(input)
          var types = this.types
          var length = types.length

          for (var i = 0; i < length; i++) {
            var type = types[i]

            if (!type.accepts(input)) {
              return false
            }
          }

          return true
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

          return this.types
            .map(function(type) {
              return type instanceof _UnionType['default'] ||
                type instanceof IntersectionType
                ? '('.concat(type.toString(), ')')
                : type.toString()
            })
            .join(' & ')
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          var resolved = this.resolveType()
          if (resolved !== this) return resolved.acceptsSomeCompositeTypes
          return this.types.some(function(t) {
            return t.acceptsSomeCompositeTypes
          })
        },
      },
    ])
    return IntersectionType
  })(_Type2['default'])

exports['default'] = IntersectionType
