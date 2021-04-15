'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _keyToString = require('./keyToString')

var _RuntimeTypeErrorItem = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

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

class InvalidKeyTypeErrorItem extends _RuntimeTypeErrorItem.default {
  constructor(path, valueAtPath, expectedTypeAtPath, key, expectedKeyType) {
    super(path, valueAtPath, expectedTypeAtPath, path.length + 1)

    _defineProperty(this, 'key', void 0)

    _defineProperty(this, 'expectedKeyType', void 0)

    this.key = key
    this.expectedKeyType = expectedKeyType
  }

  messageAtPath() {
    return `has key of invalid type: ${(0, _keyToString.keyToString)(
      this.key
    )}\n\nEach key must be ${this.expectedKeyType.toString({
      formatForMustBe: true,
    })}`
  }
}

exports.default = InvalidKeyTypeErrorItem

_defineProperty(InvalidKeyTypeErrorItem, 'code', void 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9JbnZhbGlkS2V5VHlwZUVycm9ySXRlbS50cyJdLCJuYW1lcyI6WyJJbnZhbGlkS2V5VHlwZUVycm9ySXRlbSIsIlJ1bnRpbWVUeXBlRXJyb3JJdGVtIiwiY29uc3RydWN0b3IiLCJwYXRoIiwidmFsdWVBdFBhdGgiLCJleHBlY3RlZFR5cGVBdFBhdGgiLCJrZXkiLCJleHBlY3RlZEtleVR5cGUiLCJsZW5ndGgiLCJtZXNzYWdlQXRQYXRoIiwidG9TdHJpbmciLCJmb3JtYXRGb3JNdXN0QmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsdUJBQU4sU0FBc0NDLDZCQUF0QyxDQUEyRDtBQUt4RUMsRUFBQUEsV0FBVyxDQUNUQyxJQURTLEVBRVRDLFdBRlMsRUFHVEMsa0JBSFMsRUFJVEMsR0FKUyxFQUtUQyxlQUxTLEVBTVQ7QUFDQSxVQUFNSixJQUFOLEVBQVlDLFdBQVosRUFBeUJDLGtCQUF6QixFQUE2Q0YsSUFBSSxDQUFDSyxNQUFMLEdBQWMsQ0FBM0Q7O0FBREE7O0FBQUE7O0FBRUEsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7QUFFREUsRUFBQUEsYUFBYSxHQUFXO0FBQ3RCLFdBQVEsNEJBQTJCLDhCQUNqQyxLQUFLSCxHQUQ0QixDQUVqQyx3QkFBdUIsS0FBS0MsZUFBTCxDQUFxQkcsUUFBckIsQ0FBOEI7QUFDckRDLE1BQUFBLGVBQWUsRUFBRTtBQURvQyxLQUE5QixDQUV0QixFQUpIO0FBS0Q7O0FBdkJ1RTs7OztnQkFBckRYLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUgZnJvbSAnLi4vdHlwZXMvVHlwZSdcbmltcG9ydCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCB7IGtleVRvU3RyaW5nIH0gZnJvbSAnLi9rZXlUb1N0cmluZydcbmltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuL1J1bnRpbWVUeXBlRXJyb3JJdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkS2V5VHlwZUVycm9ySXRlbSBleHRlbmRzIFJ1bnRpbWVUeXBlRXJyb3JJdGVtIHtcbiAgc3RhdGljIHJlYWRvbmx5IGNvZGU6ICdJTlZBTElEX0tFWV9UWVBFJ1xuICByZWFkb25seSBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbFxuICByZWFkb25seSBleHBlY3RlZEtleVR5cGU6IFR5cGU8dW5rbm93bj5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICB2YWx1ZUF0UGF0aDogdW5rbm93bixcbiAgICBleHBlY3RlZFR5cGVBdFBhdGg6IFR5cGU8dW5rbm93bj4sXG4gICAga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsXG4gICAgZXhwZWN0ZWRLZXlUeXBlOiBUeXBlPHVua25vd24+XG4gICkge1xuICAgIHN1cGVyKHBhdGgsIHZhbHVlQXRQYXRoLCBleHBlY3RlZFR5cGVBdFBhdGgsIHBhdGgubGVuZ3RoICsgMSlcbiAgICB0aGlzLmtleSA9IGtleVxuICAgIHRoaXMuZXhwZWN0ZWRLZXlUeXBlID0gZXhwZWN0ZWRLZXlUeXBlXG4gIH1cblxuICBtZXNzYWdlQXRQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBoYXMga2V5IG9mIGludmFsaWQgdHlwZTogJHtrZXlUb1N0cmluZyhcbiAgICAgIHRoaXMua2V5XG4gICAgKX1cXG5cXG5FYWNoIGtleSBtdXN0IGJlICR7dGhpcy5leHBlY3RlZEtleVR5cGUudG9TdHJpbmcoe1xuICAgICAgZm9ybWF0Rm9yTXVzdEJlOiB0cnVlLFxuICAgIH0pfWBcbiAgfVxufVxuIl19
