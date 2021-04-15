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

class PrimitiveLiteralType extends _Type.default {
  constructor(value) {
    super()

    _defineProperty(this, 'typeName', 'PrimitiveLiteralType')

    _defineProperty(this, 'value', void 0)

    this.value = value
  }

  *errors(validation, path, input) {
    if (!this.accepts(input)) {
      yield new _InvalidTypeErrorItem.default(path, input, this)
    }
  }

  accepts(input) {
    return Object.is(input, this.value)
  }

  toString() {
    return String(this.value)
  }
}

exports.default = PrimitiveLiteralType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9QcmltaXRpdmVMaXRlcmFsVHlwZS50cyJdLCJuYW1lcyI6WyJQcmltaXRpdmVMaXRlcmFsVHlwZSIsIlR5cGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwiZXJyb3JzIiwidmFsaWRhdGlvbiIsInBhdGgiLCJpbnB1dCIsImFjY2VwdHMiLCJJbnZhbGlkVHlwZUVycm9ySXRlbSIsIk9iamVjdCIsImlzIiwidG9TdHJpbmciLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBR2UsTUFBZUEsb0JBQWYsU0FFTEMsYUFGSyxDQUVHO0FBSWhCQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBVztBQUNwQjs7QUFEb0Isc0NBSFgsc0JBR1c7O0FBQUE7O0FBRXBCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUVELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEMsUUFBSSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUQsS0FBYixDQUFMLEVBQTBCO0FBQ3hCLFlBQU0sSUFBSUUsNkJBQUosQ0FBeUJILElBQXpCLEVBQStCQyxLQUEvQixFQUFzQyxJQUF0QyxDQUFOO0FBQ0Q7QUFDRjs7QUFFREMsRUFBQUEsT0FBTyxDQUFDRCxLQUFELEVBQXlCO0FBQzlCLFdBQU9HLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVSixLQUFWLEVBQWlCLEtBQUtKLEtBQXRCLENBQVA7QUFDRDs7QUFFRFMsRUFBQUEsUUFBUSxHQUFXO0FBQ2pCLFdBQU9DLE1BQU0sQ0FBQyxLQUFLVixLQUFOLENBQWI7QUFDRDs7QUF6QmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnXG5pbXBvcnQgVmFsaWRhdGlvbiwgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgSW52YWxpZFR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZFR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFByaW1pdGl2ZUxpdGVyYWxUeXBlPFxuICBUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHN5bWJvbCB8IGJpZ2ludCB8IG51bGwgfCB1bmRlZmluZWRcbj4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnUHJpbWl0aXZlTGl0ZXJhbFR5cGUnXG4gIHJlYWRvbmx5IHZhbHVlOiBUXG5cbiAgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICAqZXJyb3JzKFxuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICApOiBJdGVyYWJsZTxSdW50aW1lVHlwZUVycm9ySXRlbT4ge1xuICAgIGlmICghdGhpcy5hY2NlcHRzKGlucHV0KSkge1xuICAgICAgeWllbGQgbmV3IEludmFsaWRUeXBlRXJyb3JJdGVtKHBhdGgsIGlucHV0LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGFjY2VwdHMoaW5wdXQ6IGFueSk6IGlucHV0IGlzIFQge1xuICAgIHJldHVybiBPYmplY3QuaXMoaW5wdXQsIHRoaXMudmFsdWUpXG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSlcbiAgfVxufVxuIl19
