'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _cyclic = require('../cyclic')

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var _InvalidKeyTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidKeyTypeErrorItem')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

class RecordType extends _Type.default {
  constructor(key, value) {
    super()

    _defineProperty(this, 'typeName', 'RecordType')

    _defineProperty(this, 'key', void 0)

    _defineProperty(this, 'value', void 0)

    ;(0, _Type.assertIsType)(key, 'key')
    ;(0, _Type.assertIsType)(value, 'value')
    this.key = key
    this.value = value
  }

  *errors(validation, path, input) {
    if (input == null || typeof input !== 'object' || Array.isArray(input)) {
      yield new _InvalidTypeErrorItem.default(path, input, this)
      return
    }

    if (validation.inCycle(this, input)) {
      return
    }

    validation.startCycle(this, input)
    yield* collectErrorsWithIndexers(this, validation, path, input)
  }

  accepts(input) {
    if (input === null) {
      return false
    }

    if (typeof input !== 'object' || Array.isArray(input)) {
      return false
    }

    if ((0, _cyclic.inValidationCycle)(this, input)) {
      return true
    }

    ;(0, _cyclic.startValidationCycle)(this, input)
    const result = acceptsWithIndexers(this, input)
    ;(0, _cyclic.endValidationCycle)(this, input)
    return result
  }

  get acceptsSomeCompositeTypes() {
    return true
  }

  toString(options) {
    if (
      options === null || options === void 0 ? void 0 : options.formatForMustBe
    ) {
      const formatted = this.toString()
      return /\n/.test(formatted)
        ? `of type:\n\n${formatted.replace(/^/gm, '  ')}`
        : `of type ${formatted}`
    }

    if ((0, _cyclic.inToStringCycle)(this)) {
      return '$Cycle<Record<string, any>>'
    }

    ;(0, _cyclic.startToStringCycle)(this)
    const result = `Record<${this.key}, ${this.value}>`
    ;(0, _cyclic.endToStringCycle)(this)
    return result
  }
}

exports.default = RecordType

function acceptsWithIndexers(type, input) {
  for (const key in input) {
    const value = input[key]
    if (!type.value.accepts(value)) return false
  }

  return true
}

function* collectErrorsWithIndexers(type, validation, path, input) {
  for (const key in input) {
    if (!type.key.accepts(key))
      yield new _InvalidKeyTypeErrorItem.default(
        path,
        input,
        type,
        key,
        type.key
      )
    yield* type.value.errors(validation, [...path, key], input[key])
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9SZWNvcmRUeXBlLnRzIl0sIm5hbWVzIjpbIlJlY29yZFR5cGUiLCJUeXBlIiwiY29uc3RydWN0b3IiLCJrZXkiLCJ2YWx1ZSIsImVycm9ycyIsInZhbGlkYXRpb24iLCJwYXRoIiwiaW5wdXQiLCJBcnJheSIsImlzQXJyYXkiLCJJbnZhbGlkVHlwZUVycm9ySXRlbSIsImluQ3ljbGUiLCJzdGFydEN5Y2xlIiwiY29sbGVjdEVycm9yc1dpdGhJbmRleGVycyIsImFjY2VwdHMiLCJyZXN1bHQiLCJhY2NlcHRzV2l0aEluZGV4ZXJzIiwiYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcyIsInRvU3RyaW5nIiwib3B0aW9ucyIsImZvcm1hdEZvck11c3RCZSIsImZvcm1hdHRlZCIsInRlc3QiLCJyZXBsYWNlIiwidHlwZSIsIkludmFsaWRLZXlUeXBlRXJyb3JJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBU0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxVQUFOLFNBR0xDLGFBSEssQ0FHYztBQUszQkMsRUFBQUEsV0FBVyxDQUFDQyxHQUFELEVBQWVDLEtBQWYsRUFBK0I7QUFDeEM7O0FBRHdDLHNDQUovQixZQUkrQjs7QUFBQTs7QUFBQTs7QUFFeEMsNEJBQWFELEdBQWIsRUFBa0IsS0FBbEI7QUFDQSw0QkFBYUMsS0FBYixFQUFvQixPQUFwQjtBQUNBLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUVELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEMsUUFBSUEsS0FBSyxJQUFJLElBQVQsSUFBaUIsT0FBT0EsS0FBUCxLQUFpQixRQUFsQyxJQUE4Q0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLEtBQWQsQ0FBbEQsRUFBd0U7QUFDdEUsWUFBTSxJQUFJRyw2QkFBSixDQUF5QkosSUFBekIsRUFBK0JD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cG9ydCBUeXBlLCB7IGFzc2VydElzVHlwZSB9IGZyb20gJy4vVHlwZSdcbmltcG9ydCBWYWxpZGF0aW9uLCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcblxuaW1wb3J0IHtcbiAgaW5WYWxpZGF0aW9uQ3ljbGUsXG4gIHN0YXJ0VmFsaWRhdGlvbkN5Y2xlLFxuICBlbmRWYWxpZGF0aW9uQ3ljbGUsXG4gIGluVG9TdHJpbmdDeWNsZSxcbiAgc3RhcnRUb1N0cmluZ0N5Y2xlLFxuICBlbmRUb1N0cmluZ0N5Y2xlLFxufSBmcm9tICcuLi9jeWNsaWMnXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgSW52YWxpZFR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZFR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgSW52YWxpZEtleVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZEtleVR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZFR5cGU8XG4gIEsgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsXG4gIFZcbj4gZXh0ZW5kcyBUeXBlPFJlY29yZDxLLCBWPj4ge1xuICB0eXBlTmFtZSA9ICdSZWNvcmRUeXBlJ1xuICByZWFkb25seSBrZXk6IFR5cGU8Sz5cbiAgcmVhZG9ubHkgdmFsdWU6IFR5cGU8Vj5cblxuICBjb25zdHJ1Y3RvcihrZXk6IFR5cGU8Sz4sIHZhbHVlOiBUeXBlPFY+KSB7XG4gICAgc3VwZXIoKVxuICAgIGFzc2VydElzVHlwZShrZXksICdrZXknKVxuICAgIGFzc2VydElzVHlwZSh2YWx1ZSwgJ3ZhbHVlJylcbiAgICB0aGlzLmtleSA9IGtleVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgKmVycm9ycyhcbiAgICB2YWxpZGF0aW9uOiBWYWxpZGF0aW9uLFxuICAgIHBhdGg6IElkZW50aWZpZXJQYXRoLFxuICAgIGlucHV0OiBhbnlcbiAgKTogSXRlcmFibGU8UnVudGltZVR5cGVFcnJvckl0ZW0+IHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICB5aWVsZCBuZXcgSW52YWxpZFR5cGVFcnJvckl0ZW0ocGF0aCwgaW5wdXQsIHRoaXMpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGlvbi5pbkN5Y2xlKHRoaXMsIGlucHV0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhbGlkYXRpb24uc3RhcnRDeWNsZSh0aGlzLCBpbnB1dClcblxuICAgIHlpZWxkKiBjb2xsZWN0RXJyb3JzV2l0aEluZGV4ZXJzKHRoaXMsIHZhbGlkYXRpb24sIHBhdGgsIGlucHV0KVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgUmVjb3JkPEssIFY+IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChpblZhbGlkYXRpb25DeWNsZSh0aGlzLCBpbnB1dCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHN0YXJ0VmFsaWRhdGlvbkN5Y2xlKHRoaXMsIGlucHV0KVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYWNjZXB0c1dpdGhJbmRleGVycyh0aGlzLCBpbnB1dClcblxuICAgIGVuZFZhbGlkYXRpb25DeWNsZSh0aGlzLCBpbnB1dClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBnZXQgYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdG9TdHJpbmcob3B0aW9ucz86IHsgZm9ybWF0Rm9yTXVzdEJlPzogYm9vbGVhbiB9KTogc3RyaW5nIHtcbiAgICBpZiAob3B0aW9ucz8uZm9ybWF0Rm9yTXVzdEJlKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSB0aGlzLnRvU3RyaW5nKClcbiAgICAgIHJldHVybiAvXFxuLy50ZXN0KGZvcm1hdHRlZClcbiAgICAgICAgPyBgb2YgdHlwZTpcXG5cXG4ke2Zvcm1hdHRlZC5yZXBsYWNlKC9eL2dtLCAnICAnKX1gXG4gICAgICAgIDogYG9mIHR5cGUgJHtmb3JtYXR0ZWR9YFxuICAgIH1cbiAgICBpZiAoaW5Ub1N0cmluZ0N5Y2xlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gJyRDeWNsZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PidcbiAgICB9XG4gICAgc3RhcnRUb1N0cmluZ0N5Y2xlKHRoaXMpXG4gICAgY29uc3QgcmVzdWx0ID0gYFJlY29yZDwke3RoaXMua2V5fSwgJHt0aGlzLnZhbHVlfT5gXG4gICAgZW5kVG9TdHJpbmdDeWNsZSh0aGlzKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NlcHRzV2l0aEluZGV4ZXJzKFxuICB0eXBlOiBSZWNvcmRUeXBlPGFueSwgYW55PixcbiAgaW5wdXQ6IFJlY29yZDxhbnksIGFueT5cbik6IGJvb2xlYW4ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRba2V5XVxuICAgIGlmICghdHlwZS52YWx1ZS5hY2NlcHRzKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24qIGNvbGxlY3RFcnJvcnNXaXRoSW5kZXhlcnMoXG4gIHR5cGU6IFJlY29yZFR5cGU8YW55LCBhbnk+LFxuICB2YWxpZGF0aW9uOiBWYWxpZGF0aW9uLFxuICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgaW5wdXQ6IFJlY29yZDxhbnksIGFueT5cbik6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPiB7XG4gIGZvciAoY29uc3Qga2V5IGluIGlucHV0KSB7XG4gICAgaWYgKCF0eXBlLmtleS5hY2NlcHRzKGtleSkpXG4gICAgICB5aWVsZCBuZXcgSW52YWxpZEtleVR5cGVFcnJvckl0ZW0ocGF0aCwgaW5wdXQsIHR5cGUsIGtleSwgdHlwZS5rZXkpXG4gICAgeWllbGQqIHR5cGUudmFsdWUuZXJyb3JzKHZhbGlkYXRpb24sIFsuLi5wYXRoLCBrZXldLCBpbnB1dFtrZXldKVxuICB9XG59XG4iXX0=
