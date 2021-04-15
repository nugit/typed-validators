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

class BooleanType extends _Type.default {
  constructor(...args) {
    super(...args)

    _defineProperty(this, 'typeName', 'BooleanType')
  }

  *errors(validation, path, input) {
    if (typeof input !== 'boolean') {
      yield new _InvalidTypeErrorItem.default(path, input, this)
    }
  }

  accepts(input) {
    return typeof input === 'boolean'
  }

  toString(options) {
    return (options === null || options === void 0
    ? void 0
    : options.formatForMustBe)
      ? 'a boolean'
      : 'boolean'
  }
}

exports.default = BooleanType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Cb29sZWFuVHlwZS50cyJdLCJuYW1lcyI6WyJCb29sZWFuVHlwZSIsIlR5cGUiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uIiwicGF0aCIsImlucHV0IiwiSW52YWxpZFR5cGVFcnJvckl0ZW0iLCJhY2NlcHRzIiwidG9TdHJpbmciLCJvcHRpb25zIiwiZm9ybWF0Rm9yTXVzdEJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQUdlLE1BQU1BLFdBQU4sU0FBMEJDLGFBQTFCLENBQXdDO0FBQUE7QUFBQTs7QUFBQSxzQ0FDMUMsYUFEMEM7QUFBQTs7QUFHckQsR0FBQ0MsTUFBRCxDQUNFQyxVQURGLEVBRUVDLElBRkYsRUFHRUMsS0FIRixFQUlrQztBQUNoQyxRQUFJLE9BQU9BLEtBQVAsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUIsWUFBTSxJQUFJQyw2QkFBSixDQUF5QkYsSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDLElBQXRDLENBQU47QUFDRDtBQUNGOztBQUVERSxFQUFBQSxPQUFPLENBQUNGLEtBQUQsRUFBK0I7QUFDcEMsV0FBTyxPQUFPQSxLQUFQLEtBQWlCLFNBQXhCO0FBQ0Q7O0FBRURHLEVBQUFBLFFBQVEsQ0FBQ0MsT0FBRCxFQUFrRDtBQUN4RCxXQUFPLENBQUFBLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFQyxlQUFULElBQTJCLFdBQTNCLEdBQXlDLFNBQWhEO0FBQ0Q7O0FBbkJvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSdcbmltcG9ydCBWYWxpZGF0aW9uLCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCBJbnZhbGlkVHlwZUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9JbnZhbGlkVHlwZUVycm9ySXRlbSdcbmltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbGVhblR5cGUgZXh0ZW5kcyBUeXBlPGJvb2xlYW4+IHtcbiAgdHlwZU5hbWUgPSAnQm9vbGVhblR5cGUnO1xuXG4gICplcnJvcnMoXG4gICAgdmFsaWRhdGlvbjogVmFsaWRhdGlvbixcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICBpbnB1dDogYW55XG4gICk6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB5aWVsZCBuZXcgSW52YWxpZFR5cGVFcnJvckl0ZW0ocGF0aCwgaW5wdXQsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICB0b1N0cmluZyhvcHRpb25zPzogeyBmb3JtYXRGb3JNdXN0QmU/OiBib29sZWFuIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRpb25zPy5mb3JtYXRGb3JNdXN0QmUgPyAnYSBib29sZWFuJyA6ICdib29sZWFuJ1xuICB9XG59XG4iXX0=
