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

var MergedObjectType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(MergedObjectType, _Type)

    function MergedObjectType(objects) {
      var _this

      var exact =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
      ;(0, _classCallCheck2['default'])(this, MergedObjectType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(MergedObjectType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'MergedObjectType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'objects',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'exact',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'resolved',
        void 0
      )

      for (var i = 0; i < objects.length; i++) {
        ;(0, _Type2.assertIsType)(objects[i], 'objects['.concat(i, ']'))
      }

      _this.objects = objects
      _this.exact = exact
      return _this
    }

    ;(0, _createClass2['default'])(MergedObjectType, [
      {
        key: 'resolveType',
        value: function resolveType() {
          if (!this.resolved) {
            var properties = {}
            var _iteratorNormalCompletion = true
            var _didIteratorError = false
            var _iteratorError = undefined

            try {
              for (
                var _iterator = this.objects[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var object = _step.value
                var resolved = object.resolveType()

                if (!(resolved instanceof _ObjectType['default'])) {
                  throw new Error(
                    "a merged type didn't resolve to an ObjectType: "
                      .concat(object.toString())
                      .concat(
                        resolved !== object
                          ? ' (resolved to '.concat(resolved.toString(), ')')
                          : ''
                      )
                  )
                }

                var _iteratorNormalCompletion2 = true
                var _didIteratorError2 = false
                var _iteratorError2 = undefined

                try {
                  for (
                    var _iterator2 = resolved.properties[Symbol.iterator](),
                      _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                      .done);
                    _iteratorNormalCompletion2 = true
                  ) {
                    var property = _step2.value
                    properties[property.key] = property.clone()
                  }
                } catch (err) {
                  _didIteratorError2 = true
                  _iteratorError2 = err
                } finally {
                  try {
                    if (
                      !_iteratorNormalCompletion2 &&
                      _iterator2['return'] != null
                    ) {
                      _iterator2['return']()
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2
                    }
                  }
                }
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

            this.resolved = new _ObjectType['default'](
              Object.values(properties),
              this.exact
            )
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
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return _context.delegateYield(
                        this.resolveType().errors(validation, path, input),
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
          return this.resolveType().accepts(input)
        },
      },
      {
        key: 'toString',
        value: function toString(options) {
          return this.resolveType().toString(options)
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return MergedObjectType
  })(_Type2['default'])

exports['default'] = MergedObjectType
