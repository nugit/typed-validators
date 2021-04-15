'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
)

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
)

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

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var _PrimitiveLiteralType = _interopRequireDefault(
  require('./PrimitiveLiteralType')
)

var _IntersectionType = _interopRequireDefault(require('./IntersectionType'))

var _NullLiteralType = _interopRequireDefault(require('./NullLiteralType'))

var _ObjectType = _interopRequireDefault(require('./ObjectType'))

var _UndefinedLiteralType = _interopRequireDefault(
  require('./UndefinedLiteralType')
)

function getDeterminantProperty(types) {
  var objTypes = []
  var _iteratorNormalCompletion = true
  var _didIteratorError = false
  var _iteratorError = undefined

  try {
    for (
      var _iterator = types[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      var type = _step.value
      var t = type.resolveType()
      if (
        t instanceof _NullLiteralType['default'] ||
        t instanceof _UndefinedLiteralType['default']
      )
        continue
      if (t instanceof _ObjectType['default']) objTypes.push(t)
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

  if (!objTypes.length) return null
  var propertyMaps = objTypes.map(function(_ref) {
    var properties = _ref.properties
    return new Map(
      properties.map(function(p) {
        return [p.key, p]
      })
    )
  })
  var potential = objTypes[0].properties
    .map(function(p) {
      var eachProperty = propertyMaps.map(function(m) {
        return m.get(p.key)
      })
      var valueMap = new Map()
      var _iteratorNormalCompletion2 = true
      var _didIteratorError2 = false
      var _iteratorError2 = undefined

      try {
        for (
          var _iterator2 = eachProperty[Symbol.iterator](), _step2;
          !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
          _iteratorNormalCompletion2 = true
        ) {
          var property = _step2.value
          if (!property) return null
          var value = property.value
          if (
            !(value instanceof _PrimitiveLiteralType['default']) ||
            value instanceof _NullLiteralType['default'] ||
            value instanceof _UndefinedLiteralType['default'] ||
            valueMap.has(value.value)
          )
            return null
          valueMap.set(value.value, property.__objectType)
        }
      } catch (err) {
        _didIteratorError2 = true
        _iteratorError2 = err
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return'] != null) {
            _iterator2['return']()
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2
          }
        }
      }

      return [p.key, valueMap]
    })
    .filter(function(p) {
      return p != null
    })
  return potential.length === 1 ? potential[0] : null
}

var UnionType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(UnionType, _Type)

    function UnionType(types) {
      var _this

      ;(0, _classCallCheck2['default'])(this, UnionType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(UnionType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'UnionType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'types',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        '_determinantProperty',
        void 0
      )

      for (var i = 0; i < types.length; i++) {
        ;(0, _Type2.assertIsType)(types[i], 'types['.concat(i, ']'))
      }

      _this.types = types
      return _this
    }

    ;(0, _createClass2['default'])(UnionType, [
      {
        key: 'errors',
        value:
          /*#__PURE__*/
          _regenerator['default'].mark(function errors(
            validation,
            path,
            input
          ) {
            var types,
              length,
              i,
              type,
              deepErrors,
              determinantProperty,
              _determinantProperty,
              key,
              valuesMap,
              typeForValue

            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      types = this.types
                      length = types.length
                      i = 0

                    case 3:
                      if (!(i < length)) {
                        _context.next = 10
                        break
                      }

                      type = types[i]

                      if (!type.accepts(input)) {
                        _context.next = 7
                        break
                      }

                      return _context.abrupt('return')

                    case 7:
                      i++
                      _context.next = 3
                      break

                    case 10:
                      if (!(input != null)) {
                        _context.next = 23
                        break
                      }

                      deepErrors = this.types
                        .map(function(t) {
                          return (0,
                          _toConsumableArray2[
                            'default'
                          ])(t.errors(validation, path, input))
                        })
                        .filter(function(errors) {
                          return errors.find(function(e) {
                            return e.depth > path.length
                          })
                        })

                      if (!(deepErrors.length === 1)) {
                        _context.next = 15
                        break
                      }

                      return _context.delegateYield(deepErrors[0], 't0', 14)

                    case 14:
                      return _context.abrupt('return')

                    case 15:
                      if (!(input instanceof Object)) {
                        _context.next = 23
                        break
                      }

                      determinantProperty = this.determinantProperty

                      if (!determinantProperty) {
                        _context.next = 23
                        break
                      }

                      ;(_determinantProperty = (0, _slicedToArray2['default'])(
                        determinantProperty,
                        2
                      )),
                        (key = _determinantProperty[0]),
                        (valuesMap = _determinantProperty[1])
                      typeForValue = valuesMap.get(input[key])

                      if (!typeForValue) {
                        _context.next = 23
                        break
                      }

                      return _context.delegateYield(
                        typeForValue.errors(validation, path, input),
                        't1',
                        22
                      )

                    case 22:
                      return _context.abrupt('return')

                    case 23:
                      _context.next = 25
                      return new _InvalidTypeErrorItem['default'](
                        path,
                        input,
                        this
                      )

                    case 25:
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
          var types = this.types
          var length = types.length

          for (var i = 0; i < length; i++) {
            var type = types[i]

            if (type.accepts(input)) {
              return true
            }
          }

          return false
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
              ? 'one of:\n\n'.concat(formatted.replace(/^/gm, '  '))
              : 'one of '.concat(formatted)
          }

          return this.types
            .map(function(type) {
              return type instanceof UnionType ||
                type instanceof _IntersectionType['default']
                ? '('.concat(type.toString(), ')')
                : type.toString()
            })
            .join(' | ')
        },
      },
      {
        key: 'determinantProperty',
        get: function get() {
          return this._determinantProperty === undefined
            ? (this._determinantProperty = getDeterminantProperty(this.types))
            : this._determinantProperty
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return this.types.some(function(t) {
            return t.acceptsSomeCompositeTypes
          })
        },
      },
    ])
    return UnionType
  })(_Type2['default'])

exports['default'] = UnionType
