'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['boolean'] = _boolean
exports.number = number
exports.string = string
exports.symbol = symbol
exports.object = object
exports.allOf = allOf
Object.defineProperty(exports, 'AnyType', {
  enumerable: true,
  get: function get() {
    return _AnyType['default']
  },
})
Object.defineProperty(exports, 'ArrayType', {
  enumerable: true,
  get: function get() {
    return _ArrayType['default']
  },
})
Object.defineProperty(exports, 'BooleanLiteralType', {
  enumerable: true,
  get: function get() {
    return _BooleanLiteralType['default']
  },
})
Object.defineProperty(exports, 'BooleanType', {
  enumerable: true,
  get: function get() {
    return _BooleanType['default']
  },
})
Object.defineProperty(exports, 'InstanceOfType', {
  enumerable: true,
  get: function get() {
    return _InstanceOfType['default']
  },
})
Object.defineProperty(exports, 'IntersectionType', {
  enumerable: true,
  get: function get() {
    return _IntersectionType['default']
  },
})
Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _merge['default']
  },
})
Object.defineProperty(exports, 'MergedObjectType', {
  enumerable: true,
  get: function get() {
    return _MergedObjectType['default']
  },
})
Object.defineProperty(exports, 'mergeInexact', {
  enumerable: true,
  get: function get() {
    return _mergeInexact['default']
  },
})
Object.defineProperty(exports, 'NullLiteralType', {
  enumerable: true,
  get: function get() {
    return _NullLiteralType['default']
  },
})
Object.defineProperty(exports, 'NumberType', {
  enumerable: true,
  get: function get() {
    return _NumberType['default']
  },
})
Object.defineProperty(exports, 'NumericLiteralType', {
  enumerable: true,
  get: function get() {
    return _NumericLiteralType['default']
  },
})
Object.defineProperty(exports, 'ObjectType', {
  enumerable: true,
  get: function get() {
    return _ObjectType['default']
  },
})
Object.defineProperty(exports, 'ObjectTypeProperty', {
  enumerable: true,
  get: function get() {
    return _ObjectTypeProperty['default']
  },
})
Object.defineProperty(exports, 'oneOf', {
  enumerable: true,
  get: function get() {
    return _oneOf['default']
  },
})
Object.defineProperty(exports, 'RecordType', {
  enumerable: true,
  get: function get() {
    return _RecordType['default']
  },
})
Object.defineProperty(exports, 'RuntimeTypeError', {
  enumerable: true,
  get: function get() {
    return _RuntimeTypeError['default']
  },
})
Object.defineProperty(exports, 'RuntimeTypeErrorItem', {
  enumerable: true,
  get: function get() {
    return _RuntimeTypeErrorItem['default']
  },
})
Object.defineProperty(exports, 'StringLiteralType', {
  enumerable: true,
  get: function get() {
    return _StringLiteralType['default']
  },
})
Object.defineProperty(exports, 'StringType', {
  enumerable: true,
  get: function get() {
    return _StringType['default']
  },
})
Object.defineProperty(exports, 'SymbolLiteralType', {
  enumerable: true,
  get: function get() {
    return _SymbolLiteralType['default']
  },
})
Object.defineProperty(exports, 'SymbolType', {
  enumerable: true,
  get: function get() {
    return _SymbolType['default']
  },
})
Object.defineProperty(exports, 'TupleType', {
  enumerable: true,
  get: function get() {
    return _TupleType['default']
  },
})
Object.defineProperty(exports, 'Type', {
  enumerable: true,
  get: function get() {
    return _Type['default']
  },
})
Object.defineProperty(exports, 'TypeAlias', {
  enumerable: true,
  get: function get() {
    return _TypeAlias['default']
  },
})
Object.defineProperty(exports, 'TypeReference', {
  enumerable: true,
  get: function get() {
    return _TypeReference['default']
  },
})
Object.defineProperty(exports, 'UndefinedLiteralType', {
  enumerable: true,
  get: function get() {
    return _UndefinedLiteralType['default']
  },
})
Object.defineProperty(exports, 'UnionType', {
  enumerable: true,
  get: function get() {
    return _UnionType['default']
  },
})
Object.defineProperty(exports, 'UnknownType', {
  enumerable: true,
  get: function get() {
    return _UnknownType['default']
  },
})
Object.defineProperty(exports, 'Validation', {
  enumerable: true,
  get: function get() {
    return _Validation['default']
  },
})
exports.ref = exports.alias = exports.tuple = exports.instanceOf = exports.record = exports.nullishOr = exports.nullish = exports.undefined = exports.undefinedLiteral = exports.nullOr = exports[
  'null'
] = exports.nullLiteral = exports.readonly = exports.readonlyArray = exports.array = exports.unknown = exports.any = void 0

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
)

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'))

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
)

var _AnyType = _interopRequireDefault(require('./types/AnyType'))

var _ArrayType = _interopRequireDefault(require('./types/ArrayType'))

var _BooleanLiteralType = _interopRequireDefault(
  require('./types/BooleanLiteralType')
)

var _BooleanType = _interopRequireDefault(require('./types/BooleanType'))

var _InstanceOfType = _interopRequireDefault(require('./types/InstanceOfType'))

var _IntersectionType = _interopRequireDefault(
  require('./types/IntersectionType')
)

var _merge = _interopRequireDefault(require('./merge'))

var _MergedObjectType = _interopRequireDefault(
  require('./types/MergedObjectType')
)

var _mergeInexact = _interopRequireDefault(require('./mergeInexact'))

var _NullLiteralType = _interopRequireDefault(
  require('./types/NullLiteralType')
)

var _NumberType = _interopRequireDefault(require('./types/NumberType'))

var _NumericLiteralType = _interopRequireDefault(
  require('./types/NumericLiteralType')
)

var _ObjectType = _interopRequireDefault(require('./types/ObjectType'))

var _ObjectTypeProperty = _interopRequireDefault(
  require('./types/ObjectTypeProperty')
)

var _oneOf = _interopRequireDefault(require('./oneOf'))

var _RecordType = _interopRequireDefault(require('./types/RecordType'))

var _RuntimeTypeError = _interopRequireDefault(
  require('./errorReporting/RuntimeTypeError')
)

var _RuntimeTypeErrorItem = _interopRequireDefault(
  require('./errorReporting/RuntimeTypeErrorItem')
)

var _StringLiteralType = _interopRequireDefault(
  require('./types/StringLiteralType')
)

var _StringType = _interopRequireDefault(require('./types/StringType'))

var _SymbolLiteralType = _interopRequireDefault(
  require('./types/SymbolLiteralType')
)

var _SymbolType = _interopRequireDefault(require('./types/SymbolType'))

var _TupleType = _interopRequireDefault(require('./types/TupleType'))

var _Type = _interopRequireDefault(require('./types/Type'))

var _TypeAlias = _interopRequireDefault(require('./types/TypeAlias'))

var _TypeReference = _interopRequireDefault(require('./types/TypeReference'))

var _UndefinedLiteralType = _interopRequireDefault(
  require('./types/UndefinedLiteralType')
)

var _UnionType = _interopRequireDefault(require('./types/UnionType'))

var _UnknownType = _interopRequireDefault(require('./types/UnknownType'))

var _Validation = _interopRequireDefault(require('./Validation'))

var any = function any() {
  return new _AnyType['default']()
}

exports.any = any

var unknown = function unknown() {
  return new _UnknownType['default']()
}

exports.unknown = unknown

var array = function array(elementType) {
  return new _ArrayType['default'](elementType)
}

exports.array = array

var readonlyArray = function readonlyArray(elementType) {
  return new _ArrayType['default'](elementType)
}

exports.readonlyArray = readonlyArray

var readonly = function readonly(type) {
  return type
}

exports.readonly = readonly

var nullLiteral = function nullLiteral() {
  return new _NullLiteralType['default']()
}

exports['null'] = exports.nullLiteral = nullLiteral

var nullOr = function nullOr(type) {
  return (0, _oneOf['default'])(type, nullLiteral())
}

exports.nullOr = nullOr

var undefinedLiteral = function undefinedLiteral() {
  return new _UndefinedLiteralType['default']()
}

exports.undefined = exports.undefinedLiteral = undefinedLiteral

var nullish = function nullish() {
  return (0, _oneOf['default'])(nullLiteral(), undefinedLiteral())
}

exports.nullish = nullish

var nullishOr = function nullishOr(type) {
  return (0, _oneOf['default'])(type, nullLiteral(), undefinedLiteral())
}

exports.nullishOr = nullishOr

function _boolean(literal) {
  return literal != null
    ? new _BooleanLiteralType['default'](literal)
    : new _BooleanType['default']()
}

function number(literal) {
  return literal != null
    ? new _NumericLiteralType['default'](literal)
    : new _NumberType['default']()
}

function string(literal) {
  return literal != null
    ? new _StringLiteralType['default'](literal)
    : new _StringType['default']()
}

function symbol(literal) {
  return literal != null
    ? new _SymbolLiteralType['default'](literal)
    : new _SymbolType['default']()
}

function entries(obj) {
  return [].concat(
    (0, _toConsumableArray2['default'])(Object.entries(obj)),
    (0, _toConsumableArray2['default'])(
      Object.getOwnPropertySymbols(obj).map(function(s) {
        return [s, obj[s]]
      })
    )
  )
}

function object(options) {
  var required = options.required,
    optional = options.optional,
    exact = options.exact

  if (
    ((0, _typeof2['default'])(required) === 'object' &&
      !(required instanceof _Type['default'])) ||
    ((0, _typeof2['default'])(optional) === 'object' &&
      !(optional instanceof _Type['default']))
  ) {
    return new _ObjectType['default'](
      [].concat(
        (0, _toConsumableArray2['default'])(
          entries(required || {}).map(function(_ref) {
            var _ref2 = (0, _slicedToArray2['default'])(_ref, 2),
              key = _ref2[0],
              type = _ref2[1]

            return new _ObjectTypeProperty['default'](key, type, false)
          })
        ),
        (0, _toConsumableArray2['default'])(
          entries(optional || {}).map(function(_ref3) {
            var _ref4 = (0, _slicedToArray2['default'])(_ref3, 2),
              key = _ref4[0],
              type = _ref4[1]

            return new _ObjectTypeProperty['default'](key, type, true)
          })
        )
      ),
      exact !== false
    )
  }

  return new _ObjectType['default'](
    entries(options).map(function(_ref5) {
      var _ref6 = (0, _slicedToArray2['default'])(_ref5, 2),
        key = _ref6[0],
        type = _ref6[1]

      return new _ObjectTypeProperty['default'](key, type, false)
    }),
    true
  )
}

var record = function record(key, value) {
  return new _RecordType['default'](key, value)
}

exports.record = record

var instanceOf = function instanceOf(classType) {
  return new _InstanceOfType['default'](classType)
}

exports.instanceOf = instanceOf

var tuple = function tuple() {
  for (
    var _len = arguments.length, types = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    types[_key] = arguments[_key]
  }

  return new _TupleType['default'](types)
}

exports.tuple = tuple

function allOf() {
  for (
    var _len2 = arguments.length, types = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    types[_key2] = arguments[_key2]
  }

  return new _IntersectionType['default'](types)
}

var alias = function alias(name, type) {
  return new _TypeAlias['default'](name, type)
}

exports.alias = alias

var ref = function ref(type) {
  return new _TypeReference['default'](type)
}

exports.ref = ref
