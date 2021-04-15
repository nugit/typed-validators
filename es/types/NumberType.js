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

class NumberType extends _Type.default {
  constructor(...args) {
    super(...args)

    _defineProperty(this, 'typeName', 'NumberType')
  }

  *errors(validation, path, input) {
    if (typeof input !== 'number') {
      yield new _InvalidTypeErrorItem.default(path, input, this)
    }
  }

  accepts(input) {
    return typeof input === 'number'
  }

  toString(options) {
    return (options === null || options === void 0
    ? void 0
    : options.formatForMustBe)
      ? 'a number'
      : 'number'
  }
}

exports.default = NumberType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9OdW1iZXJUeXBlLnRzIl0sIm5hbWVzIjpbIk51bWJlclR5cGUiLCJUeXBlIiwiZXJyb3JzIiwidmFsaWRhdGlvbiIsInBhdGgiLCJpbnB1dCIsIkludmFsaWRUeXBlRXJyb3JJdGVtIiwiYWNjZXB0cyIsInRvU3RyaW5nIiwib3B0aW9ucyIsImZvcm1hdEZvck11c3RCZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOzs7Ozs7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQyxhQUF6QixDQUFzQztBQUFBO0FBQUE7O0FBQUEsc0NBQ3hDLFlBRHdDO0FBQUE7O0FBR25ELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEMsUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFlBQU0sSUFBSUMsNkJBQUosQ0FBeUJGLElBQXpCLEVBQStCQyxLQUEvQixFQUFzQyxJQUF0QyxDQUFOO0FBQ0Q7QUFDRjs7QUFFREUsRUFBQUEsT0FBTyxDQUFDRixLQUFELEVBQThCO0FBQ25DLFdBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNEOztBQUVERyxFQUFBQSxRQUFRLENBQUNDLE9BQUQsRUFBa0Q7QUFDeEQsV0FBTyxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMsZUFBVCxJQUEyQixVQUEzQixHQUF3QyxRQUEvQztBQUNEOztBQW5Ca0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnXG5pbXBvcnQgVmFsaWRhdGlvbiwgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgSW52YWxpZFR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZFR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBUeXBlPG51bWJlcj4ge1xuICB0eXBlTmFtZSA9ICdOdW1iZXJUeXBlJztcblxuICAqZXJyb3JzKFxuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICApOiBJdGVyYWJsZTxSdW50aW1lVHlwZUVycm9ySXRlbT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdudW1iZXInKSB7XG4gICAgICB5aWVsZCBuZXcgSW52YWxpZFR5cGVFcnJvckl0ZW0ocGF0aCwgaW5wdXQsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgdG9TdHJpbmcob3B0aW9ucz86IHsgZm9ybWF0Rm9yTXVzdEJlPzogYm9vbGVhbiB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0aW9ucz8uZm9ybWF0Rm9yTXVzdEJlID8gJ2EgbnVtYmVyJyA6ICdudW1iZXInXG4gIH1cbn1cbiJdfQ==
