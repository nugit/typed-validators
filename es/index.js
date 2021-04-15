'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.boolean = boolean
exports.number = number
exports.string = string
exports.symbol = symbol
exports.object = object
exports.allOf = allOf
Object.defineProperty(exports, 'AnyType', {
  enumerable: true,
  get: function() {
    return _AnyType.default
  },
})
Object.defineProperty(exports, 'ArrayType', {
  enumerable: true,
  get: function() {
    return _ArrayType.default
  },
})
Object.defineProperty(exports, 'BooleanLiteralType', {
  enumerable: true,
  get: function() {
    return _BooleanLiteralType.default
  },
})
Object.defineProperty(exports, 'BooleanType', {
  enumerable: true,
  get: function() {
    return _BooleanType.default
  },
})
Object.defineProperty(exports, 'InstanceOfType', {
  enumerable: true,
  get: function() {
    return _InstanceOfType.default
  },
})
Object.defineProperty(exports, 'IntersectionType', {
  enumerable: true,
  get: function() {
    return _IntersectionType.default
  },
})
Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function() {
    return _merge.default
  },
})
Object.defineProperty(exports, 'MergedObjectType', {
  enumerable: true,
  get: function() {
    return _MergedObjectType.default
  },
})
Object.defineProperty(exports, 'mergeInexact', {
  enumerable: true,
  get: function() {
    return _mergeInexact.default
  },
})
Object.defineProperty(exports, 'NullLiteralType', {
  enumerable: true,
  get: function() {
    return _NullLiteralType.default
  },
})
Object.defineProperty(exports, 'NumberType', {
  enumerable: true,
  get: function() {
    return _NumberType.default
  },
})
Object.defineProperty(exports, 'NumericLiteralType', {
  enumerable: true,
  get: function() {
    return _NumericLiteralType.default
  },
})
Object.defineProperty(exports, 'ObjectType', {
  enumerable: true,
  get: function() {
    return _ObjectType.default
  },
})
Object.defineProperty(exports, 'ObjectTypeProperty', {
  enumerable: true,
  get: function() {
    return _ObjectTypeProperty.default
  },
})
Object.defineProperty(exports, 'oneOf', {
  enumerable: true,
  get: function() {
    return _oneOf.default
  },
})
Object.defineProperty(exports, 'RecordType', {
  enumerable: true,
  get: function() {
    return _RecordType.default
  },
})
Object.defineProperty(exports, 'RuntimeTypeError', {
  enumerable: true,
  get: function() {
    return _RuntimeTypeError.default
  },
})
Object.defineProperty(exports, 'RuntimeTypeErrorItem', {
  enumerable: true,
  get: function() {
    return _RuntimeTypeErrorItem.default
  },
})
Object.defineProperty(exports, 'StringLiteralType', {
  enumerable: true,
  get: function() {
    return _StringLiteralType.default
  },
})
Object.defineProperty(exports, 'StringType', {
  enumerable: true,
  get: function() {
    return _StringType.default
  },
})
Object.defineProperty(exports, 'SymbolLiteralType', {
  enumerable: true,
  get: function() {
    return _SymbolLiteralType.default
  },
})
Object.defineProperty(exports, 'SymbolType', {
  enumerable: true,
  get: function() {
    return _SymbolType.default
  },
})
Object.defineProperty(exports, 'TupleType', {
  enumerable: true,
  get: function() {
    return _TupleType.default
  },
})
Object.defineProperty(exports, 'Type', {
  enumerable: true,
  get: function() {
    return _Type.default
  },
})
Object.defineProperty(exports, 'TypeAlias', {
  enumerable: true,
  get: function() {
    return _TypeAlias.default
  },
})
Object.defineProperty(exports, 'TypeReference', {
  enumerable: true,
  get: function() {
    return _TypeReference.default
  },
})
Object.defineProperty(exports, 'UndefinedLiteralType', {
  enumerable: true,
  get: function() {
    return _UndefinedLiteralType.default
  },
})
Object.defineProperty(exports, 'UnionType', {
  enumerable: true,
  get: function() {
    return _UnionType.default
  },
})
Object.defineProperty(exports, 'UnknownType', {
  enumerable: true,
  get: function() {
    return _UnknownType.default
  },
})
Object.defineProperty(exports, 'Validation', {
  enumerable: true,
  get: function() {
    return _Validation.default
  },
})
exports.ref = exports.alias = exports.tuple = exports.instanceOf = exports.record = exports.nullishOr = exports.nullish = exports.undefined = exports.undefinedLiteral = exports.nullOr = exports.null = exports.nullLiteral = exports.readonly = exports.readonlyArray = exports.array = exports.unknown = exports.any = void 0

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const any = () => new _AnyType.default()

exports.any = any

const unknown = () => new _UnknownType.default()

exports.unknown = unknown

const array = elementType => new _ArrayType.default(elementType)

exports.array = array

const readonlyArray = elementType => new _ArrayType.default(elementType)

exports.readonlyArray = readonlyArray

const readonly = type => type

exports.readonly = readonly

const nullLiteral = () => new _NullLiteralType.default()

exports.null = exports.nullLiteral = nullLiteral

const nullOr = type => (0, _oneOf.default)(type, nullLiteral())

exports.nullOr = nullOr

const undefinedLiteral = () => new _UndefinedLiteralType.default()

exports.undefined = exports.undefinedLiteral = undefinedLiteral

const nullish = () => (0, _oneOf.default)(nullLiteral(), undefinedLiteral())

exports.nullish = nullish

const nullishOr = type =>
  (0, _oneOf.default)(type, nullLiteral(), undefinedLiteral())

exports.nullishOr = nullishOr

function boolean(literal) {
  return literal != null
    ? new _BooleanLiteralType.default(literal)
    : new _BooleanType.default()
}

function number(literal) {
  return literal != null
    ? new _NumericLiteralType.default(literal)
    : new _NumberType.default()
}

function string(literal) {
  return literal != null
    ? new _StringLiteralType.default(literal)
    : new _StringType.default()
}

function symbol(literal) {
  return literal != null
    ? new _SymbolLiteralType.default(literal)
    : new _SymbolType.default()
}

function entries(obj) {
  return [
    ...Object.entries(obj),
    ...Object.getOwnPropertySymbols(obj).map(s => [s, obj[s]]),
  ]
}

function object(options) {
  const { required, optional, exact } = options

  if (
    (typeof required === 'object' && !(required instanceof _Type.default)) ||
    (typeof optional === 'object' && !(optional instanceof _Type.default))
  ) {
    return new _ObjectType.default(
      [
        ...entries(required || {}).map(
          ([key, type]) => new _ObjectTypeProperty.default(key, type, false)
        ),
        ...entries(optional || {}).map(
          ([key, type]) => new _ObjectTypeProperty.default(key, type, true)
        ),
      ],
      exact !== false
    )
  }

  return new _ObjectType.default(
    entries(options).map(
      ([key, type]) => new _ObjectTypeProperty.default(key, type, false)
    ),
    true
  )
}

const record = (key, value) => new _RecordType.default(key, value)

exports.record = record

const instanceOf = classType => new _InstanceOfType.default(classType)

exports.instanceOf = instanceOf

const tuple = (...types) => new _TupleType.default(types)

exports.tuple = tuple

function allOf(...types) {
  return new _IntersectionType.default(types)
}

const alias = (name, type) => new _TypeAlias.default(name, type)

exports.alias = alias

const ref = type => new _TypeReference.default(type)

exports.ref = ref
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhbnkiLCJBbnlUeXBlIiwidW5rbm93biIsIlVua25vd25UeXBlIiwiYXJyYXkiLCJlbGVtZW50VHlwZSIsIkFycmF5VHlwZSIsInJlYWRvbmx5QXJyYXkiLCJyZWFkb25seSIsInR5cGUiLCJudWxsTGl0ZXJhbCIsIk51bGxMaXRlcmFsVHlwZSIsIm51bGxPciIsInVuZGVmaW5lZExpdGVyYWwiLCJVbmRlZmluZWRMaXRlcmFsVHlwZSIsIm51bGxpc2giLCJudWxsaXNoT3IiLCJib29sZWFuIiwibGl0ZXJhbCIsIkJvb2xlYW5MaXRlcmFsVHlwZSIsIkJvb2xlYW5UeXBlIiwibnVtYmVyIiwiTnVtZXJpY0xpdGVyYWxUeXBlIiwiTnVtYmVyVHlwZSIsInN0cmluZyIsIlN0cmluZ0xpdGVyYWxUeXBlIiwiU3RyaW5nVHlwZSIsInN5bWJvbCIsIlN5bWJvbExpdGVyYWxUeXBlIiwiU3ltYm9sVHlwZSIsImVudHJpZXMiLCJvYmoiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJtYXAiLCJzIiwib2JqZWN0Iiwib3B0aW9ucyIsInJlcXVpcmVkIiwib3B0aW9uYWwiLCJleGFjdCIsIlR5cGUiLCJPYmplY3RUeXBlIiwia2V5IiwiT2JqZWN0VHlwZVByb3BlcnR5IiwicmVjb3JkIiwidmFsdWUiLCJSZWNvcmRUeXBlIiwiaW5zdGFuY2VPZiIsImNsYXNzVHlwZSIsIkluc3RhbmNlT2ZUeXBlIiwidHVwbGUiLCJ0eXBlcyIsIlR1cGxlVHlwZSIsImFsbE9mIiwiSW50ZXJzZWN0aW9uVHlwZSIsImFsaWFzIiwibmFtZSIsIlR5cGVBbGlhcyIsInJlZiIsIlR5cGVSZWZlcmVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUN0RCxTQUFPLElBQUlHLHlCQUFKLENBQXFCSCxLQUFyQixDQUFQO0FBQ0Q7O0FBRU0sTUFBTUksS0FBSyxHQUFHLENBQUlDLElBQUosRUFBa0JoRCxJQUFsQixLQUNuQixJQUFJaUQsa0JBQUosQ0FBY0QsSUFBZCxFQUFvQmhELElBQXBCLENBREs7Ozs7QUFHQSxNQUFNa0QsR0FBRyxHQUFPbEQsSUFBSixJQUNqQixJQUFJbUQsc0JBQUosQ0FBa0JuRCxJQUFsQixDQURLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFueVR5cGUgZnJvbSAnLi90eXBlcy9BbnlUeXBlJ1xuaW1wb3J0IEFycmF5VHlwZSBmcm9tICcuL3R5cGVzL0FycmF5VHlwZSdcbmltcG9ydCBCb29sZWFuTGl0ZXJhbFR5cGUgZnJvbSAnLi90eXBlcy9Cb29sZWFuTGl0ZXJhbFR5cGUnXG5pbXBvcnQgQm9vbGVhblR5cGUgZnJvbSAnLi90eXBlcy9Cb29sZWFuVHlwZSdcbmltcG9ydCBJbnN0YW5jZU9mVHlwZSBmcm9tICcuL3R5cGVzL0luc3RhbmNlT2ZUeXBlJ1xuaW1wb3J0IEludGVyc2VjdGlvblR5cGUgZnJvbSAnLi90eXBlcy9JbnRlcnNlY3Rpb25UeXBlJ1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnXG5pbXBvcnQgTWVyZ2VkT2JqZWN0VHlwZSBmcm9tICcuL3R5cGVzL01lcmdlZE9iamVjdFR5cGUnXG5pbXBvcnQgbWVyZ2VJbmV4YWN0IGZyb20gJy4vbWVyZ2VJbmV4YWN0J1xuaW1wb3J0IE51bGxMaXRlcmFsVHlwZSBmcm9tICcuL3R5cGVzL051bGxMaXRlcmFsVHlwZSdcbmltcG9ydCBOdW1iZXJUeXBlIGZyb20gJy4vdHlwZXMvTnVtYmVyVHlwZSdcbmltcG9ydCBOdW1lcmljTGl0ZXJhbFR5cGUgZnJvbSAnLi90eXBlcy9OdW1lcmljTGl0ZXJhbFR5cGUnXG5pbXBvcnQgT2JqZWN0VHlwZSBmcm9tICcuL3R5cGVzL09iamVjdFR5cGUnXG5pbXBvcnQgT2JqZWN0VHlwZVByb3BlcnR5IGZyb20gJy4vdHlwZXMvT2JqZWN0VHlwZVByb3BlcnR5J1xuaW1wb3J0IG9uZU9mIGZyb20gJy4vb25lT2YnXG5pbXBvcnQgUmVjb3JkVHlwZSBmcm9tICcuL3R5cGVzL1JlY29yZFR5cGUnXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvciBmcm9tICcuL2Vycm9yUmVwb3J0aW5nL1J1bnRpbWVUeXBlRXJyb3InXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbSdcbmltcG9ydCBTdHJpbmdMaXRlcmFsVHlwZSBmcm9tICcuL3R5cGVzL1N0cmluZ0xpdGVyYWxUeXBlJ1xuaW1wb3J0IFN0cmluZ1R5cGUgZnJvbSAnLi90eXBlcy9TdHJpbmdUeXBlJ1xuaW1wb3J0IFN5bWJvbExpdGVyYWxUeXBlIGZyb20gJy4vdHlwZXMvU3ltYm9sTGl0ZXJhbFR5cGUnXG5pbXBvcnQgU3ltYm9sVHlwZSBmcm9tICcuL3R5cGVzL1N5bWJvbFR5cGUnXG5pbXBvcnQgVHVwbGVUeXBlIGZyb20gJy4vdHlwZXMvVHVwbGVUeXBlJ1xuaW1wb3J0IFR5cGUgZnJvbSAnLi90eXBlcy9UeXBlJ1xuaW1wb3J0IFR5cGVBbGlhcyBmcm9tICcuL3R5cGVzL1R5cGVBbGlhcydcbmltcG9ydCBUeXBlUmVmZXJlbmNlIGZyb20gJy4vdHlwZXMvVHlwZVJlZmVyZW5jZSdcbmltcG9ydCBVbmRlZmluZWRMaXRlcmFsVHlwZSBmcm9tICcuL3R5cGVzL1VuZGVmaW5lZExpdGVyYWxUeXBlJ1xuaW1wb3J0IFVuaW9uVHlwZSBmcm9tICcuL3R5cGVzL1VuaW9uVHlwZSdcbmltcG9ydCBVbmtub3duVHlwZSBmcm9tICcuL3R5cGVzL1Vua25vd25UeXBlJ1xuaW1wb3J0IFZhbGlkYXRpb24gZnJvbSAnLi9WYWxpZGF0aW9uJ1xuXG5leHBvcnQge1xuICBBbnlUeXBlLFxuICBBcnJheVR5cGUsXG4gIEJvb2xlYW5MaXRlcmFsVHlwZSxcbiAgQm9vbGVhblR5cGUsXG4gIEluc3RhbmNlT2ZUeXBlLFxuICBJbnRlcnNlY3Rpb25UeXBlLFxuICBtZXJnZSxcbiAgTWVyZ2VkT2JqZWN0VHlwZSxcbiAgbWVyZ2VJbmV4YWN0LFxuICBOdWxsTGl0ZXJhbFR5cGUsXG4gIE51bWJlclR5cGUsXG4gIE51bWVyaWNMaXRlcmFsVHlwZSxcbiAgT2JqZWN0VHlwZSxcbiAgT2JqZWN0VHlwZVByb3BlcnR5LFxuICBvbmVPZixcbiAgUmVjb3JkVHlwZSxcbiAgUnVudGltZVR5cGVFcnJvcixcbiAgUnVudGltZVR5cGVFcnJvckl0ZW0sXG4gIFN0cmluZ0xpdGVyYWxUeXBlLFxuICBTdHJpbmdUeXBlLFxuICBTeW1ib2xMaXRlcmFsVHlwZSxcbiAgU3ltYm9sVHlwZSxcbiAgVHVwbGVUeXBlLFxuICBUeXBlLFxuICBUeXBlQWxpYXMsXG4gIFR5cGVSZWZlcmVuY2UsXG4gIFVuZGVmaW5lZExpdGVyYWxUeXBlLFxuICBVbmlvblR5cGUsXG4gIFVua25vd25UeXBlLFxuICBWYWxpZGF0aW9uLFxufVxuXG5leHBvcnQgY29uc3QgYW55ID0gKCk6IFR5cGU8YW55PiA9PiBuZXcgQW55VHlwZSgpXG5leHBvcnQgY29uc3QgdW5rbm93biA9ICgpOiBUeXBlPHVua25vd24+ID0+IG5ldyBVbmtub3duVHlwZSgpXG5cbmV4cG9ydCBjb25zdCBhcnJheSA9IDxUPihlbGVtZW50VHlwZTogVHlwZTxUPik6IFR5cGU8VFtdPiA9PlxuICBuZXcgQXJyYXlUeXBlKGVsZW1lbnRUeXBlKVxuXG5leHBvcnQgY29uc3QgcmVhZG9ubHlBcnJheSA9IDxUPihlbGVtZW50VHlwZTogVHlwZTxUPik6IFR5cGU8cmVhZG9ubHkgVFtdPiA9PlxuICBuZXcgQXJyYXlUeXBlKGVsZW1lbnRUeXBlKSBhcyBhbnlcblxuZXhwb3J0IGNvbnN0IHJlYWRvbmx5ID0gPFQgZXh0ZW5kcyB7fT4odHlwZTogVHlwZTxUPik6IFR5cGU8UmVhZG9ubHk8VD4+ID0+XG4gIHR5cGUgYXMgYW55XG5cbmV4cG9ydCBjb25zdCBudWxsTGl0ZXJhbCA9ICgpOiBUeXBlPG51bGw+ID0+IG5ldyBOdWxsTGl0ZXJhbFR5cGUoKVxuZXhwb3J0IHsgbnVsbExpdGVyYWwgYXMgbnVsbCB9XG5leHBvcnQgY29uc3QgbnVsbE9yID0gPFQ+KHR5cGU6IFR5cGU8VD4pOiBUeXBlPFQgfCBudWxsPiA9PlxuICBvbmVPZih0eXBlLCBudWxsTGl0ZXJhbCgpKVxuXG5leHBvcnQgY29uc3QgdW5kZWZpbmVkTGl0ZXJhbCA9ICgpOiBUeXBlPHVuZGVmaW5lZD4gPT5cbiAgbmV3IFVuZGVmaW5lZExpdGVyYWxUeXBlKClcbmV4cG9ydCB7IHVuZGVmaW5lZExpdGVyYWwgYXMgdW5kZWZpbmVkIH1cblxuZXhwb3J0IGNvbnN0IG51bGxpc2ggPSAoKTogVHlwZTxudWxsIHwgdW5kZWZpbmVkPiA9PlxuICBvbmVPZihudWxsTGl0ZXJhbCgpLCB1bmRlZmluZWRMaXRlcmFsKCkpXG5leHBvcnQgY29uc3QgbnVsbGlzaE9yID0gPFQ+KHR5cGU6IFR5cGU8VD4pOiBUeXBlPFQgfCBudWxsIHwgdW5kZWZpbmVkPiA9PlxuICBvbmVPZih0eXBlLCBudWxsTGl0ZXJhbCgpLCB1bmRlZmluZWRMaXRlcmFsKCkpXG5cbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuKCk6IFR5cGU8Ym9vbGVhbj5cbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuPFQgZXh0ZW5kcyB0cnVlIHwgZmFsc2U+KGxpdGVyYWw6IFQpOiBUeXBlPFQ+XG5leHBvcnQgZnVuY3Rpb24gYm9vbGVhbihcbiAgbGl0ZXJhbD86IGJvb2xlYW5cbik6IFR5cGU8Ym9vbGVhbj4gfCBUeXBlPHRydWU+IHwgVHlwZTxmYWxzZT4ge1xuICByZXR1cm4gbGl0ZXJhbCAhPSBudWxsID8gbmV3IEJvb2xlYW5MaXRlcmFsVHlwZShsaXRlcmFsKSA6IG5ldyBCb29sZWFuVHlwZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXIoKTogVHlwZTxudW1iZXI+XG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyPFQgZXh0ZW5kcyBudW1iZXI+KGxpdGVyYWw6IFQpOiBUeXBlPFQ+XG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyKFxuICBsaXRlcmFsPzogbnVtYmVyXG4pOiBUeXBlPG51bWJlcj4gfCBUeXBlPHRydWU+IHwgVHlwZTxmYWxzZT4ge1xuICByZXR1cm4gbGl0ZXJhbCAhPSBudWxsID8gbmV3IE51bWVyaWNMaXRlcmFsVHlwZShsaXRlcmFsKSA6IG5ldyBOdW1iZXJUeXBlKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZygpOiBUeXBlPHN0cmluZz5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmc8VCBleHRlbmRzIHN0cmluZz4obGl0ZXJhbDogVCk6IFR5cGU8VD5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcoXG4gIGxpdGVyYWw/OiBzdHJpbmdcbik6IFR5cGU8c3RyaW5nPiB8IFR5cGU8dHJ1ZT4gfCBUeXBlPGZhbHNlPiB7XG4gIHJldHVybiBsaXRlcmFsICE9IG51bGwgPyBuZXcgU3RyaW5nTGl0ZXJhbFR5cGUobGl0ZXJhbCkgOiBuZXcgU3RyaW5nVHlwZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW1ib2woKTogVHlwZTxzeW1ib2w+XG5leHBvcnQgZnVuY3Rpb24gc3ltYm9sPFQgZXh0ZW5kcyBzeW1ib2w+KGxpdGVyYWw6IFQpOiBUeXBlPFQ+XG5leHBvcnQgZnVuY3Rpb24gc3ltYm9sKFxuICBsaXRlcmFsPzogc3ltYm9sXG4pOiBUeXBlPHN5bWJvbD4gfCBUeXBlPHRydWU+IHwgVHlwZTxmYWxzZT4ge1xuICByZXR1cm4gbGl0ZXJhbCAhPSBudWxsID8gbmV3IFN5bWJvbExpdGVyYWxUeXBlKGxpdGVyYWwpIDogbmV3IFN5bWJvbFR5cGUoKVxufVxuXG5mdW5jdGlvbiBlbnRyaWVzPE8gZXh0ZW5kcyB7fT4ob2JqOiBPKTogW3N0cmluZyB8IHN5bWJvbCwgYW55XVtdIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5PYmplY3QuZW50cmllcyhvYmopLFxuICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5tYXAocyA9PiBbcywgKG9iaiBhcyBhbnkpW3NdXSksXG4gIF0gYXMgYW55XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3Q8UiBleHRlbmRzIFJlY29yZDxzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIFR5cGU8YW55Pj4+KFxuICByZXF1aXJlZDogUlxuKTogT2JqZWN0VHlwZTx7IFtLIGluIGtleW9mIFJdOiBFeHRyYWN0VHlwZTxSW0tdPiB9PlxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdDxSIGV4dGVuZHMgUmVjb3JkPHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgVHlwZTxhbnk+Pj4oe1xuICByZXF1aXJlZCxcbiAgZXhhY3QsXG59OiB7XG4gIHJlcXVpcmVkOiBSXG4gIGV4YWN0PzogYm9vbGVhblxufSk6IE9iamVjdFR5cGU8eyBbSyBpbiBrZXlvZiBSXTogRXh0cmFjdFR5cGU8UltLXT4gfT5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3Q8UyBleHRlbmRzIFJlY29yZDxzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIFR5cGU8YW55Pj4+KHtcbiAgb3B0aW9uYWwsXG4gIGV4YWN0LFxufToge1xuICBvcHRpb25hbDogU1xuICBleGFjdD86IGJvb2xlYW5cbn0pOiBPYmplY3RUeXBlPHsgW0sgaW4ga2V5b2YgU10/OiBFeHRyYWN0VHlwZTxTW0tdPiB9PlxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdDxcbiAgUiBleHRlbmRzIFJlY29yZDxzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIFR5cGU8YW55Pj4sXG4gIFMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sLCBUeXBlPGFueT4+XG4+KHtcbiAgcmVxdWlyZWQsXG4gIG9wdGlvbmFsLFxuICBleGFjdCxcbn06IHtcbiAgcmVxdWlyZWQ6IFJcbiAgb3B0aW9uYWw6IFNcbiAgZXhhY3Q/OiBib29sZWFuXG59KTogT2JqZWN0VHlwZTxcbiAgeyBbSyBpbiBrZXlvZiBSXTogRXh0cmFjdFR5cGU8UltLXT4gfSAmIHsgW0sgaW4ga2V5b2YgU10/OiBFeHRyYWN0VHlwZTxTW0tdPiB9XG4+XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0PFxuICBSIGV4dGVuZHMgUmVjb3JkPHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgVHlwZTxhbnk+PixcbiAgUyBleHRlbmRzIFJlY29yZDxzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIFR5cGU8YW55Pj5cbj4oXG4gIG9wdGlvbnM6XG4gICAgfCBSXG4gICAgfCB7XG4gICAgICAgIHJlcXVpcmVkPzogUlxuICAgICAgICBvcHRpb25hbD86IFNcbiAgICAgICAgZXhhY3Q/OiBib29sZWFuXG4gICAgICB9XG4pOiBPYmplY3RUeXBlPFxuICB7IFtLIGluIGtleW9mIFJdOiBFeHRyYWN0VHlwZTxSW0tdPiB9ICYgeyBbSyBpbiBrZXlvZiBTXT86IEV4dHJhY3RUeXBlPFNbS10+IH1cbj4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBvcHRpb25hbCwgZXhhY3QgfSA9IG9wdGlvbnNcbiAgaWYgKFxuICAgICh0eXBlb2YgcmVxdWlyZWQgPT09ICdvYmplY3QnICYmICEocmVxdWlyZWQgaW5zdGFuY2VvZiBUeXBlKSkgfHxcbiAgICAodHlwZW9mIG9wdGlvbmFsID09PSAnb2JqZWN0JyAmJiAhKG9wdGlvbmFsIGluc3RhbmNlb2YgVHlwZSkpXG4gICkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0VHlwZShcbiAgICAgIFtcbiAgICAgICAgLi4uZW50cmllcyhyZXF1aXJlZCB8fCB7fSkubWFwKFxuICAgICAgICAgIChba2V5LCB0eXBlXSkgPT4gbmV3IE9iamVjdFR5cGVQcm9wZXJ0eShrZXksIHR5cGUsIGZhbHNlKVxuICAgICAgICApLFxuICAgICAgICAuLi5lbnRyaWVzKG9wdGlvbmFsIHx8IHt9KS5tYXAoXG4gICAgICAgICAgKFtrZXksIHR5cGVdKSA9PiBuZXcgT2JqZWN0VHlwZVByb3BlcnR5KGtleSwgdHlwZSwgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIF0gYXMgYW55LFxuICAgICAgZXhhY3QgIT09IGZhbHNlXG4gICAgKSBhcyBhbnlcbiAgfVxuICByZXR1cm4gbmV3IE9iamVjdFR5cGUoXG4gICAgZW50cmllcyhvcHRpb25zKS5tYXAoXG4gICAgICAoW2tleSwgdHlwZV0pID0+IG5ldyBPYmplY3RUeXBlUHJvcGVydHkoa2V5LCB0eXBlLCBmYWxzZSlcbiAgICApIGFzIGFueSxcbiAgICB0cnVlXG4gICkgYXMgYW55XG59XG5cbmV4cG9ydCBjb25zdCByZWNvcmQgPSA8SyBleHRlbmRzIHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgVj4oXG4gIGtleTogVHlwZTxLPixcbiAgdmFsdWU6IFR5cGU8Vj5cbik6IFJlY29yZFR5cGU8SywgVj4gPT4gbmV3IFJlY29yZFR5cGUoa2V5LCB2YWx1ZSlcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlT2YgPSA8VD4oXG4gIGNsYXNzVHlwZTogKCkgPT4ge1xuICAgIG5ldyAoLi4uYXJnczogYW55W10pOiBUXG4gIH1cbik6IFR5cGU8VD4gPT4gbmV3IEluc3RhbmNlT2ZUeXBlKGNsYXNzVHlwZSlcblxuZXhwb3J0IGNvbnN0IHR1cGxlID0gPFQgZXh0ZW5kcyBUeXBlPGFueT5bXT4oXG4gIC4uLnR5cGVzOiBUXG4pOiBUeXBlPHsgW0luZGV4IGluIGtleW9mIFRdOiBUW0luZGV4XSBleHRlbmRzIFR5cGU8aW5mZXIgRT4gPyBFIDogbmV2ZXIgfT4gPT5cbiAgbmV3IFR1cGxlVHlwZSh0eXBlcykgYXMgYW55XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZjxUMT4oLi4udHlwZXM6IFtUeXBlPFQxPl0pOiBUeXBlPFQxPlxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mPFQxLCBUMj4oLi4udHlwZXM6IFtUeXBlPFQxPiwgVHlwZTxUMj5dKTogVHlwZTxUMSAmIFQyPlxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mPFQxLCBUMiwgVDM+KFxuICAuLi50eXBlczogW1R5cGU8VDE+LCBUeXBlPFQyPiwgVHlwZTxUMz5dXG4pOiBUeXBlPFQxICYgVDIgJiBUMz5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZjxUMSwgVDIsIFQzLCBUND4oXG4gIC4uLnR5cGVzOiBbVHlwZTxUMT4sIFR5cGU8VDI+LCBUeXBlPFQzPiwgVHlwZTxUND5dXG4pOiBUeXBlPFQxICYgVDIgJiBUMyAmIFQ0PlxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mPFQxLCBUMiwgVDMsIFQ0LCBUNT4oXG4gIC4uLnR5cGVzOiBbVHlwZTxUMT4sIFR5cGU8VDI+LCBUeXBlPFQzPiwgVHlwZTxUND4sIFR5cGU8VDU+XVxuKTogVHlwZTxUMSAmIFQyICYgVDMgJiBUNCAmIFQ1PlxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mPFQxLCBUMiwgVDMsIFQ0LCBUNSwgVDY+KFxuICAuLi50eXBlczogW1R5cGU8VDE+LCBUeXBlPFQyPiwgVHlwZTxUMz4sIFR5cGU8VDQ+LCBUeXBlPFQ1PiwgVHlwZTxUNj5dXG4pOiBUeXBlPFQxICYgVDIgJiBUMyAmIFQ0ICYgVDUgJiBUNj5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZjxUMSwgVDIsIFQzLCBUNCwgVDUsIFQ2LCBUNz4oXG4gIC4uLnR5cGVzOiBbXG4gICAgVHlwZTxUMT4sXG4gICAgVHlwZTxUMj4sXG4gICAgVHlwZTxUMz4sXG4gICAgVHlwZTxUND4sXG4gICAgVHlwZTxUNT4sXG4gICAgVHlwZTxUNj4sXG4gICAgVHlwZTxUNz5cbiAgXVxuKTogVHlwZTxUMSAmIFQyICYgVDMgJiBUNCAmIFQ1ICYgVDYgJiBUNz5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZjxUMSwgVDIsIFQzLCBUNCwgVDUsIFQ2LCBUNywgVDg+KFxuICAuLi50eXBlczogW1xuICAgIFR5cGU8VDE+LFxuICAgIFR5cGU8VDI+LFxuICAgIFR5cGU8VDM+LFxuICAgIFR5cGU8VDQ+LFxuICAgIFR5cGU8VDU+LFxuICAgIFR5cGU8VDY+LFxuICAgIFR5cGU8VDc+LFxuICAgIFR5cGU8VDg+XG4gIF1cbik6IFR5cGU8VDEgJiBUMiAmIFQzICYgVDQgJiBUNSAmIFQ2ICYgVDcgJiBUOD5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZiguLi50eXBlczogVHlwZTxhbnk+W10pOiBUeXBlPGFueT4ge1xuICByZXR1cm4gbmV3IEludGVyc2VjdGlvblR5cGUodHlwZXMpXG59XG5cbmV4cG9ydCBjb25zdCBhbGlhcyA9IDxUPihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGU8VD4pOiBUeXBlQWxpYXM8VD4gPT5cbiAgbmV3IFR5cGVBbGlhcyhuYW1lLCB0eXBlKVxuXG5leHBvcnQgY29uc3QgcmVmID0gPFQ+KHR5cGU6ICgpID0+IFR5cGVBbGlhczxUPik6IFR5cGU8VD4gPT5cbiAgbmV3IFR5cGVSZWZlcmVuY2UodHlwZSlcblxuZXhwb3J0IHR5cGUgRXh0cmFjdFR5cGU8VCBleHRlbmRzIFR5cGU8YW55Pj4gPSBUWydfX3R5cGUnXVxuIl19
