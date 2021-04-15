'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _RuntimeTypeErrorItem = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

var _Validation = require('../Validation')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

class InvalidLengthErrorItem extends _RuntimeTypeErrorItem.default {
  constructor(path, valueAtPath, expectedTypeAtPath, expectedLength) {
    super(path, valueAtPath, expectedTypeAtPath, path.length + 1)

    _defineProperty(this, 'valueAtPath', void 0)

    _defineProperty(this, 'expectedLength', void 0)

    this.valueAtPath = valueAtPath
    this.expectedLength = expectedLength
  }

  messageAtPath() {
    return `length must be ${this.expectedLength}, instead it is ${this.valueAtPath.length}`
  }

  toString() {
    return `${(0, _Validation.stringifyPath)(
      this.path
    )}.${this.messageAtPath()}`
  }
}

exports.default = InvalidLengthErrorItem

_defineProperty(InvalidLengthErrorItem, 'code', void 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9JbnZhbGlkTGVuZ3RoRXJyb3JJdGVtLnRzIl0sIm5hbWVzIjpbIkludmFsaWRMZW5ndGhFcnJvckl0ZW0iLCJSdW50aW1lVHlwZUVycm9ySXRlbSIsImNvbnN0cnVjdG9yIiwicGF0aCIsInZhbHVlQXRQYXRoIiwiZXhwZWN0ZWRUeXBlQXRQYXRoIiwiZXhwZWN0ZWRMZW5ndGgiLCJsZW5ndGgiLCJtZXNzYWdlQXRQYXRoIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsc0JBQU4sU0FBcUNDLDZCQUFyQyxDQUEwRDtBQUt2RUMsRUFBQUEsV0FBVyxDQUNUQyxJQURTLEVBRVRDLFdBRlMsRUFHVEMsa0JBSFMsRUFJVEMsY0FKUyxFQUtUO0FBQ0EsVUFBTUgsSUFBTixFQUFZQyxXQUFaLEVBQXlCQyxrQkFBekIsRUFBNkNGLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQTNEOztBQURBOztBQUFBOztBQUVBLFNBQUtILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0UsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7QUFFREUsRUFBQUEsYUFBYSxHQUFXO0FBQ3RCLFdBQVEsa0JBQWlCLEtBQUtGLGNBQWUsbUJBQWtCLEtBQUtGLFdBQUwsQ0FBaUJHLE1BQU8sRUFBdkY7QUFDRDs7QUFFREUsRUFBQUEsUUFBUSxHQUFXO0FBQ2pCLFdBQVEsR0FBRSwrQkFBYyxLQUFLTixJQUFuQixDQUF5QixJQUFHLEtBQUtLLGFBQUwsRUFBcUIsRUFBM0Q7QUFDRDs7QUF0QnNFOzs7O2dCQUFwRFIsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tICcuLi90eXBlcy9UeXBlJ1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4vUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgeyBJZGVudGlmaWVyUGF0aCwgc3RyaW5naWZ5UGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRMZW5ndGhFcnJvckl0ZW0gZXh0ZW5kcyBSdW50aW1lVHlwZUVycm9ySXRlbSB7XG4gIHN0YXRpYyByZWFkb25seSBjb2RlOiAnSU5WQUxJRF9MRU5HVEgnXG4gIHJlYWRvbmx5IHZhbHVlQXRQYXRoOiBBcnJheTx1bmtub3duPlxuICByZWFkb25seSBleHBlY3RlZExlbmd0aDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgdmFsdWVBdFBhdGg6IEFycmF5PHVua25vd24+LFxuICAgIGV4cGVjdGVkVHlwZUF0UGF0aDogVHlwZTx1bmtub3duPixcbiAgICBleHBlY3RlZExlbmd0aDogbnVtYmVyXG4gICkge1xuICAgIHN1cGVyKHBhdGgsIHZhbHVlQXRQYXRoLCBleHBlY3RlZFR5cGVBdFBhdGgsIHBhdGgubGVuZ3RoICsgMSlcbiAgICB0aGlzLnZhbHVlQXRQYXRoID0gdmFsdWVBdFBhdGhcbiAgICB0aGlzLmV4cGVjdGVkTGVuZ3RoID0gZXhwZWN0ZWRMZW5ndGhcbiAgfVxuXG4gIG1lc3NhZ2VBdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGxlbmd0aCBtdXN0IGJlICR7dGhpcy5leHBlY3RlZExlbmd0aH0sIGluc3RlYWQgaXQgaXMgJHt0aGlzLnZhbHVlQXRQYXRoLmxlbmd0aH1gXG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtzdHJpbmdpZnlQYXRoKHRoaXMucGF0aCl9LiR7dGhpcy5tZXNzYWdlQXRQYXRoKCl9YFxuICB9XG59XG4iXX0=
