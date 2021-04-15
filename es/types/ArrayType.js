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

class ArrayType extends _Type.default {
  constructor(elementType) {
    super()

    _defineProperty(this, 'typeName', 'ArrayType')

    _defineProperty(this, 'elementType', void 0)

    ;(0, _Type.assertIsType)(elementType, 'elementType')
    this.elementType = elementType
  }

  *errors(validation, path, input) {
    if (!Array.isArray(input)) {
      yield new _InvalidTypeErrorItem.default(path, input, this)
      return
    }

    if (validation.inCycle(this, input)) {
      return
    }

    validation.startCycle(this, input)
    const { elementType } = this
    const { length } = input

    for (let i = 0; i < length; i++) {
      yield* elementType.errors(validation, path.concat(i), input[i])
    }

    validation.endCycle(this, input)
  }

  accepts(input) {
    if (!Array.isArray(input)) {
      return false
    }

    if ((0, _cyclic.inValidationCycle)(this, input)) {
      return true
    }

    ;(0, _cyclic.startValidationCycle)(this, input)
    const { elementType } = this
    const { length } = input

    for (let i = 0; i < length; i++) {
      if (!elementType.accepts(input[i])) {
        ;(0, _cyclic.endValidationCycle)(this, input)
        return false
      }
    }

    ;(0, _cyclic.endValidationCycle)(this, input)
    return true
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
        : `an ${formatted}`
    }

    const { elementType } = this

    if ((0, _cyclic.inToStringCycle)(this)) {
      if (typeof elementType.typeName === 'string') {
        return `Array<$Cycle<${elementType.typeName}>>`
      } else {
        return `Array<$Cycle<Object>>`
      }
    }

    ;(0, _cyclic.startToStringCycle)(this)
    const output = `Array<${elementType.toString()}>`
    ;(0, _cyclic.endToStringCycle)(this)
    return output
  }
}

exports.default = ArrayType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9BcnJheVR5cGUudHMiXSwibmFtZXMiOlsiQXJyYXlUeXBlIiwiVHlwZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudFR5cGUiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uIiwicGF0aCIsImlucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwiSW52YWxpZFR5cGVFcnJvckl0ZW0iLCJpbkN5Y2xlIiwic3RhcnRDeWNsZSIsImxlbmd0aCIsImkiLCJjb25jYXQiLCJlbmRDeWNsZSIsImFjY2VwdHMiLCJhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzIiwidG9TdHJpbmciLCJvcHRpb25zIiwiZm9ybWF0Rm9yTXVzdEJlIiwiZm9ybWF0dGVkIiwidGVzdCIsInJlcGxhY2UiLCJ0eXBlTmFtZSIsIm91dHB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQVNBOzs7Ozs7Ozs7O0FBRWUsTUFBTUEsU0FBTixTQUEyQkMsYUFBM0IsQ0FBMEM7QUFJdkRDLEVBQUFBLFdBQVcsQ0FBQ0MsV0FBRCxFQUF1QjtBQUNoQzs7QUFEZ0Msc0NBSHZCLFdBR3VCOztBQUFBOztBQUVoQyw0QkFBYUEsV0FBYixFQUEwQixhQUExQjtBQUNBLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7O0FBRUQsR0FBQ0MsTUFBRCxDQUNFQyxVQURGLEVBRUVDLElBRkYsRUFHRUMsS0FIRixFQUlrQztBQUNoQyxRQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUwsRUFBMkI7QUFDekIsWUFBTSxJQUFJRyw2QkFBSixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDLElBQXRDLENBQU47QUFDQTtBQUNEOztBQUNELFFBQUlGLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQixJQUFuQixFQUF5QkosS0FBekIsQ0FBSixFQUFxQztBQUNuQztBQUNEOztBQUNERixJQUFBQSxVQUFVLENBQUNPLFVBQVgsQ0FBc0IsSUFBdEIsRUFBNEJMLEtBQTVCO0FBQ0EsVUFBTTtBQUFFSixNQUFBQTtBQUFGLFFBQWtCLElBQXhCO0FBQ0EsVUFBTTtBQUFFVSxNQUFBQTtBQUFGLFFBQWFOLEtBQW5COztBQUVBLFNBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBcEIsRUFBNEJDLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsYUFBT1gsV0FBVyxDQUFDQyxNQUFaLENBQW1CQyxVQUFuQixFQUErQkMsSUFBSSxDQUFDUyxNQUFMLENBQVlELENBQVosQ0FBL0IsRUFBK0NQLEtBQUssQ0FBQ08sQ0FBRCxDQUFwRCxDQUFQO0FBQ0Q7O0FBQ0RULElBQUFBLFVBQVUsQ0FBQ1csUUFBWCxDQUFvQixJQUFwQixFQUEwQlQsS0FBMUI7QUFDRDs7QUFFRFUsRUFBQUEsT0FBTyxDQUFDVixLQUFELEVBQWdDO0FBQ3JDLFFBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLEtBQWQsQ0FBTCxFQUEyQjtBQUN6QixhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFJLCtCQUFrQixJQUFsQixFQUF3QkEsS0FBeEIsQ0FBSixFQUFvQztBQUNsQyxhQUFPLElBQVA7QUFDRDs7QUFDRCxzQ0FBcUIsSUFBckIsRUFBMkJBLEtBQTNCO0FBQ0EsVUFBTTtBQUFFSixNQUFBQTtBQUFGLFFBQWtCLElBQXhCO0FBQ0EsVUFBTTtBQUFFVSxNQUFBQTtBQUFGLFFBQWFOLEtBQW5COztBQUNBLFNBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBcEIsRUFBNEJDLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsVUFBSSxDQUFDWCxXQUFXLENBQUNjLE9BQVosQ0FBb0JWLEtBQUssQ0FBQ08sQ0FBRCxDQUF6QixDQUFMLEVBQW9DO0FBQ2xDLHdDQUFtQixJQUFuQixFQUF5QlAsS0FBekI7QUFDQSxlQUFPLEtBQVA7QUFDRDtBQUNGOztBQUNELG9DQUFtQixJQUFuQixFQUF5QkEsS0FBekI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJVyx5QkFBSixHQUF5QztBQUN2QyxXQUFPLElBQVA7QUFDRDs7QUFFREMsRUFBQUEsUUFBUSxDQUFDQyxPQUFELEVBQWtEO0FBQ3hELFFBQUlBLE9BQUosYUFBSUEsT0FBSix1QkFBSUEsT0FBTyxDQUFFQyxlQUFiLEVBQThCO0FBQzVCLFlBQU1DLFNBQVMsR0FBRyxLQUFLSCxRQUFMLEVBQWxCO0FBQ0EsYUFBTyxLQUFLSSxJQUFMLENBQVVELFNBQVYsSUFDRixlQUFjQSxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsS0FBbEIsRUFBeUIsSUFBekIsQ0FBK0IsRUFEM0MsR0FFRixNQUFLRixTQUFVLEVBRnBCO0FBR0Q7O0FBQ0QsVUFBTTtBQUFFbkIsTUFBQUE7QUFBRixRQUFrQixJQUF4Qjs7QUFDQSxRQUFJLDZCQUFnQixJQUFoQixDQUFKLEVBQTJCO0FBQ3pCLFVBQUksT0FBT0EsV0FBVyxDQUFDc0IsUUFBbkIsS0FBZ0MsUUFBcEMsRUFBOEM7QUFDNUMsZUFBUSxnQkFBZXRCLFdBQVcsQ0FBQ3NCLFFBQVMsSUFBNUM7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFRLHVCQUFSO0FBQ0Q7QUFDRjs7QUFDRCxvQ0FBbUIsSUFBbkI7QUFDQSxVQUFNQyxNQUFNLEdBQUksU0FBUXZCLFdBQVcsQ0FBQ2dCLFFBQVosRUFBdUIsR0FBL0M7QUFDQSxrQ0FBaUIsSUFBakI7QUFDQSxXQUFPTyxNQUFQO0FBQ0Q7O0FBM0VzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlLCB7IGFzc2VydElzVHlwZSB9IGZyb20gJy4vVHlwZSdcbmltcG9ydCBWYWxpZGF0aW9uLCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcblxuaW1wb3J0IHtcbiAgaW5WYWxpZGF0aW9uQ3ljbGUsXG4gIHN0YXJ0VmFsaWRhdGlvbkN5Y2xlLFxuICBlbmRWYWxpZGF0aW9uQ3ljbGUsXG4gIGluVG9TdHJpbmdDeWNsZSxcbiAgc3RhcnRUb1N0cmluZ0N5Y2xlLFxuICBlbmRUb1N0cmluZ0N5Y2xlLFxufSBmcm9tICcuLi9jeWNsaWMnXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgSW52YWxpZFR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZFR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5VHlwZTxUPiBleHRlbmRzIFR5cGU8QXJyYXk8VD4+IHtcbiAgdHlwZU5hbWUgPSAnQXJyYXlUeXBlJ1xuICByZWFkb25seSBlbGVtZW50VHlwZTogVHlwZTxUPlxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlOiBUeXBlPFQ+KSB7XG4gICAgc3VwZXIoKVxuICAgIGFzc2VydElzVHlwZShlbGVtZW50VHlwZSwgJ2VsZW1lbnRUeXBlJylcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGVcbiAgfVxuXG4gICplcnJvcnMoXG4gICAgdmFsaWRhdGlvbjogVmFsaWRhdGlvbixcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICBpbnB1dDogYW55XG4gICk6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgeWllbGQgbmV3IEludmFsaWRUeXBlRXJyb3JJdGVtKHBhdGgsIGlucHV0LCB0aGlzKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2YWxpZGF0aW9uLmluQ3ljbGUodGhpcywgaW5wdXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFsaWRhdGlvbi5zdGFydEN5Y2xlKHRoaXMsIGlucHV0KVxuICAgIGNvbnN0IHsgZWxlbWVudFR5cGUgfSA9IHRoaXNcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gaW5wdXRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHlpZWxkKiBlbGVtZW50VHlwZS5lcnJvcnModmFsaWRhdGlvbiwgcGF0aC5jb25jYXQoaSksIGlucHV0W2ldKVxuICAgIH1cbiAgICB2YWxpZGF0aW9uLmVuZEN5Y2xlKHRoaXMsIGlucHV0KVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgQXJyYXk8VD4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoaW5WYWxpZGF0aW9uQ3ljbGUodGhpcywgaW5wdXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBzdGFydFZhbGlkYXRpb25DeWNsZSh0aGlzLCBpbnB1dClcbiAgICBjb25zdCB7IGVsZW1lbnRUeXBlIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGlucHV0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtZW50VHlwZS5hY2NlcHRzKGlucHV0W2ldKSkge1xuICAgICAgICBlbmRWYWxpZGF0aW9uQ3ljbGUodGhpcywgaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBlbmRWYWxpZGF0aW9uQ3ljbGUodGhpcywgaW5wdXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldCBhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB0b1N0cmluZyhvcHRpb25zPzogeyBmb3JtYXRGb3JNdXN0QmU/OiBib29sZWFuIH0pOiBzdHJpbmcge1xuICAgIGlmIChvcHRpb25zPy5mb3JtYXRGb3JNdXN0QmUpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IHRoaXMudG9TdHJpbmcoKVxuICAgICAgcmV0dXJuIC9cXG4vLnRlc3QoZm9ybWF0dGVkKVxuICAgICAgICA/IGBvZiB0eXBlOlxcblxcbiR7Zm9ybWF0dGVkLnJlcGxhY2UoL14vZ20sICcgICcpfWBcbiAgICAgICAgOiBgYW4gJHtmb3JtYXR0ZWR9YFxuICAgIH1cbiAgICBjb25zdCB7IGVsZW1lbnRUeXBlIH0gPSB0aGlzXG4gICAgaWYgKGluVG9TdHJpbmdDeWNsZSh0aGlzKSkge1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VHlwZS50eXBlTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGBBcnJheTwkQ3ljbGU8JHtlbGVtZW50VHlwZS50eXBlTmFtZX0+PmBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgQXJyYXk8JEN5Y2xlPE9iamVjdD4+YFxuICAgICAgfVxuICAgIH1cbiAgICBzdGFydFRvU3RyaW5nQ3ljbGUodGhpcylcbiAgICBjb25zdCBvdXRwdXQgPSBgQXJyYXk8JHtlbGVtZW50VHlwZS50b1N0cmluZygpfT5gXG4gICAgZW5kVG9TdHJpbmdDeWNsZSh0aGlzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuIl19
