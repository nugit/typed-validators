'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regeneratorRuntime2 = require('@babel/runtime/regenerator')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'))

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

var _ObjectTypeProperty = _interopRequireDefault(
  require('./ObjectTypeProperty')
)

var _cyclic = require('../cyclic')

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var _UnknownPropertyErrorItem = _interopRequireDefault(
  require('../errorReporting/UnknownPropertyErrorItem')
)

var _marked =
    /*#__PURE__*/
    _regeneratorRuntime2.mark(collectErrorsWithoutIndexers),
  _marked2 =
    /*#__PURE__*/
    _regeneratorRuntime2.mark(collectErrorsExact)

var ObjectType =
  /*#__PURE__*/
  (function(_Type) {
    ;(0, _inherits2['default'])(ObjectType, _Type)

    function ObjectType() {
      var _this

      var properties =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      var exact =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
      ;(0, _classCallCheck2['default'])(this, ObjectType)
      _this = (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(ObjectType).call(this)
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'typeName',
        'ObjectType'
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'properties',
        void 0
      )
      ;(0, _defineProperty2['default'])(
        (0, _assertThisInitialized2['default'])(_this),
        'exact',
        void 0
      )

      for (var i = 0; i < properties.length; i++) {
        if (!(properties[i] instanceof _ObjectTypeProperty['default'])) {
          throw new Error(
            'properties['.concat(
              i,
              '] must be an instance of ObjectTypeProperty'
            )
          )
        }
      }

      _this.properties = properties
      _this.exact = exact
      properties.forEach(function(prop) {
        return (prop.__objectType = (0, _assertThisInitialized2['default'])(
          _this
        ))
      })
      return _this
    }

    ;(0, _createClass2['default'])(ObjectType, [
      {
        key: 'resolveObjectType',
        value: function resolveObjectType() {
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
            return _regenerator['default'].wrap(
              function errors$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (
                        !(
                          input == null ||
                          (0, _typeof2['default'])(input) !== 'object' ||
                          Array.isArray(input)
                        )
                      ) {
                        _context.next = 4
                        break
                      }

                      _context.next = 3
                      return new _InvalidTypeErrorItem['default'](
                        path,
                        input,
                        this
                      )

                    case 3:
                      return _context.abrupt('return')

                    case 4:
                      if (!validation.inCycle(this, input)) {
                        _context.next = 6
                        break
                      }

                      return _context.abrupt('return')

                    case 6:
                      validation.startCycle(this, input)
                      return _context.delegateYield(
                        collectErrorsWithoutIndexers(
                          this,
                          validation,
                          path,
                          input
                        ),
                        't0',
                        8
                      )

                    case 8:
                      if (!this.exact) {
                        _context.next = 10
                        break
                      }

                      return _context.delegateYield(
                        collectErrorsExact(this, validation, path, input),
                        't1',
                        10
                      )

                    case 10:
                      validation.endCycle(this, input)

                    case 11:
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
          if (input === null) {
            return false
          }

          if (
            (0, _typeof2['default'])(input) !== 'object' ||
            Array.isArray(input)
          ) {
            return false
          }

          if ((0, _cyclic.inValidationCycle)(this, input)) {
            return true
          }

          ;(0, _cyclic.startValidationCycle)(this, input)
          var result
          result = acceptsWithoutIndexers(this, input)

          if (result && this.exact) {
            result = acceptsExact(this, input)
          }

          ;(0, _cyclic.endValidationCycle)(this, input)
          return result
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

          var properties = this.properties

          if ((0, _cyclic.inToStringCycle)(this)) {
            return '$Cycle<Record<string, any>>'
          }

          ;(0, _cyclic.startToStringCycle)(this)
          var body = []

          for (var i = 0; i < properties.length; i++) {
            body.push(properties[i].toString())
          }

          ;(0, _cyclic.endToStringCycle)(this)
          return '{\n'.concat(indent(body.join('\n')), '\n}')
        },
      },
      {
        key: 'acceptsSomeCompositeTypes',
        get: function get() {
          return true
        },
      },
    ])
    return ObjectType
  })(_Type2['default'])

exports['default'] = ObjectType

function acceptsWithoutIndexers(type, input) {
  var properties = type.properties

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i]

    if (!property.accepts(input)) {
      return false
    }
  }

  return true
}

function acceptsExact(type, input) {
  var properties = type.properties

  var _loop = function _loop(key) {
    // eslint-disable-line guard-for-in
    if (
      !properties.some(function(property) {
        return property.key === key
      })
    ) {
      return {
        v: false,
      }
    }
  }

  for (var key in input) {
    var _ret = _loop(key)

    if ((0, _typeof2['default'])(_ret) === 'object') return _ret.v
  }

  return true
}

function collectErrorsWithoutIndexers(type, validation, path, input) {
  var properties, i, property
  return _regenerator['default'].wrap(function collectErrorsWithoutIndexers$(
    _context2
  ) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          properties = type.properties
          i = 0

        case 2:
          if (!(i < properties.length)) {
            _context2.next = 8
            break
          }

          property = properties[i]
          return _context2.delegateYield(
            property.errors(validation, path, input),
            't0',
            5
          )

        case 5:
          i++
          _context2.next = 2
          break

        case 8:
        case 'end':
          return _context2.stop()
      }
    }
  },
  _marked)
}

function collectErrorsExact(type, validation, path, input) {
  var properties, _loop2, key

  return _regenerator['default'].wrap(function collectErrorsExact$(_context4) {
    while (1) {
      switch ((_context4.prev = _context4.next)) {
        case 0:
          properties = type.properties
          _loop2 =
            /*#__PURE__*/
            _regenerator['default'].mark(function _loop2(key) {
              return _regenerator['default'].wrap(function _loop2$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      if (
                        properties.some(function(property) {
                          return property.key === key
                        })
                      ) {
                        _context3.next = 3
                        break
                      }

                      _context3.next = 3
                      return new _UnknownPropertyErrorItem['default'](
                        path,
                        input,
                        type,
                        key
                      )

                    case 3:
                    case 'end':
                      return _context3.stop()
                  }
                }
              }, _loop2)
            })
          _context4.t0 = _regenerator['default'].keys(input)

        case 3:
          if ((_context4.t1 = _context4.t0()).done) {
            _context4.next = 8
            break
          }

          key = _context4.t1.value
          return _context4.delegateYield(_loop2(key), 't2', 6)

        case 6:
          _context4.next = 3
          break

        case 8:
        case 'end':
          return _context4.stop()
      }
    }
  }, _marked2)
}

function indent(input) {
  var lines = input.split('\n')
  var length = lines.length

  for (var i = 0; i < length; i++) {
    lines[i] = '  '.concat(lines[i])
  }

  return lines.join('\n')
}
