'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

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

class InvalidTypeErrorItem extends _RuntimeTypeErrorItem.default {
  constructor(path, valueAtPath, expectedTypeAtPath) {
    super(path, valueAtPath, expectedTypeAtPath)
  }

  messageAtPath() {
    return `must be ${this.expectedTypeAtPath.toString({
      formatForMustBe: true,
    })}`
  }
}

exports.default = InvalidTypeErrorItem

_defineProperty(InvalidTypeErrorItem, 'code', void 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9JbnZhbGlkVHlwZUVycm9ySXRlbS50cyJdLCJuYW1lcyI6WyJJbnZhbGlkVHlwZUVycm9ySXRlbSIsIlJ1bnRpbWVUeXBlRXJyb3JJdGVtIiwiY29uc3RydWN0b3IiLCJwYXRoIiwidmFsdWVBdFBhdGgiLCJleHBlY3RlZFR5cGVBdFBhdGgiLCJtZXNzYWdlQXRQYXRoIiwidG9TdHJpbmciLCJmb3JtYXRGb3JNdXN0QmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7O0FBRWUsTUFBTUEsb0JBQU4sU0FBbUNDLDZCQUFuQyxDQUF3RDtBQUdyRUMsRUFBQUEsV0FBVyxDQUNUQyxJQURTLEVBRVRDLFdBRlMsRUFHVEMsa0JBSFMsRUFJVDtBQUNBLFVBQU1GLElBQU4sRUFBWUMsV0FBWixFQUF5QkMsa0JBQXpCO0FBQ0Q7O0FBRURDLEVBQUFBLGFBQWEsR0FBVztBQUN0QixXQUFRLFdBQVUsS0FBS0Qsa0JBQUwsQ0FBd0JFLFFBQXhCLENBQWlDO0FBQ2pEQyxNQUFBQSxlQUFlLEVBQUU7QUFEZ0MsS0FBakMsQ0FFZixFQUZIO0FBR0Q7O0FBZm9FOzs7O2dCQUFsRFIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tICcuLi90eXBlcy9UeXBlJ1xuaW1wb3J0IHsgSWRlbnRpZmllclBhdGggfSBmcm9tICcuLi9WYWxpZGF0aW9uJ1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4vUnVudGltZVR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRUeXBlRXJyb3JJdGVtIGV4dGVuZHMgUnVudGltZVR5cGVFcnJvckl0ZW0ge1xuICBzdGF0aWMgcmVhZG9ubHkgY29kZTogJ0lOVkFMSURfVFlQRSdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICB2YWx1ZUF0UGF0aDogdW5rbm93bixcbiAgICBleHBlY3RlZFR5cGVBdFBhdGg6IFR5cGU8dW5rbm93bj5cbiAgKSB7XG4gICAgc3VwZXIocGF0aCwgdmFsdWVBdFBhdGgsIGV4cGVjdGVkVHlwZUF0UGF0aClcbiAgfVxuXG4gIG1lc3NhZ2VBdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYG11c3QgYmUgJHt0aGlzLmV4cGVjdGVkVHlwZUF0UGF0aC50b1N0cmluZyh7XG4gICAgICBmb3JtYXRGb3JNdXN0QmU6IHRydWUsXG4gICAgfSl9YFxuICB9XG59XG4iXX0=
