'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireDefault(require('./Type'))

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
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

class SymbolType extends _Type.default {
  constructor(...args) {
    super(...args)

    _defineProperty(this, 'typeName', 'SymbolType')
  }

  *errors(validation, path, input) {
    // @flowIssue 252
    if (typeof input !== 'symbol') {
      yield new _InvalidTypeErrorItem.default(path, input, this)
    }
  }

  accepts(input) {
    return typeof input === 'symbol'
  }

  toString(options) {
    return (options === null || options === void 0
    ? void 0
    : options.formatForMustBe)
      ? 'a symbol'
      : 'symbol'
  }
}

exports.default = SymbolType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9TeW1ib2xUeXBlLnRzIl0sIm5hbWVzIjpbIlN5bWJvbFR5cGUiLCJUeXBlIiwiZXJyb3JzIiwidmFsaWRhdGlvbiIsInBhdGgiLCJpbnB1dCIsIkludmFsaWRUeXBlRXJyb3JJdGVtIiwiYWNjZXB0cyIsInRvU3RyaW5nIiwib3B0aW9ucyIsImZvcm1hdEZvck11c3RCZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOzs7Ozs7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQyxhQUF6QixDQUFzQztBQUFBO0FBQUE7O0FBQUEsc0NBQ3hDLFlBRHdDO0FBQUE7O0FBR25ELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEM7QUFDQSxRQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsWUFBTSxJQUFJQyw2QkFBSixDQUF5QkYsSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDLElBQXRDLENBQU47QUFDRDtBQUNGOztBQUVERSxFQUFBQSxPQUFPLENBQUNGLEtBQUQsRUFBOEI7QUFDbkMsV0FBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0FBQ0Q7O0FBRURHLEVBQUFBLFFBQVEsQ0FBQ0MsT0FBRCxFQUFrRDtBQUN4RCxXQUFPLENBQUFBLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFQyxlQUFULElBQTJCLFVBQTNCLEdBQXdDLFFBQS9DO0FBQ0Q7O0FBcEJrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSdcbmltcG9ydCBWYWxpZGF0aW9uLCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbSdcbmltcG9ydCBJbnZhbGlkVHlwZUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9JbnZhbGlkVHlwZUVycm9ySXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ltYm9sVHlwZSBleHRlbmRzIFR5cGU8c3ltYm9sPiB7XG4gIHR5cGVOYW1lID0gJ1N5bWJvbFR5cGUnO1xuXG4gICplcnJvcnMoXG4gICAgdmFsaWRhdGlvbjogVmFsaWRhdGlvbixcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICBpbnB1dDogYW55XG4gICk6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPiB7XG4gICAgLy8gQGZsb3dJc3N1ZSAyNTJcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3ltYm9sJykge1xuICAgICAgeWllbGQgbmV3IEludmFsaWRUeXBlRXJyb3JJdGVtKHBhdGgsIGlucHV0LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGFjY2VwdHMoaW5wdXQ6IGFueSk6IGlucHV0IGlzIHN5bWJvbCB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N5bWJvbCdcbiAgfVxuXG4gIHRvU3RyaW5nKG9wdGlvbnM/OiB7IGZvcm1hdEZvck11c3RCZT86IGJvb2xlYW4gfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdGlvbnM/LmZvcm1hdEZvck11c3RCZSA/ICdhIHN5bWJvbCcgOiAnc3ltYm9sJ1xuICB9XG59XG4iXX0=
