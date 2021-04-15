'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireDefault(require('./Type'))

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

class AnyType extends _Type.default {
  constructor(...args) {
    super(...args)

    _defineProperty(this, 'typeName', 'AnyType')
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  *errors() {} // eslint-disable-next-line @typescript-eslint/no-unused-vars

  accepts(input) {
    return true
  }

  get acceptsSomeCompositeTypes() {
    return true
  }

  toString() {
    return 'any'
  }
}

exports.default = AnyType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9BbnlUeXBlLnRzIl0sIm5hbWVzIjpbIkFueVR5cGUiLCJUeXBlIiwiZXJyb3JzIiwiYWNjZXB0cyIsImlucHV0IiwiYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7OztBQUVlLE1BQU1BLE9BQU4sU0FBK0JDLGFBQS9CLENBQXVDO0FBQUE7QUFBQTs7QUFBQSxzQ0FDekMsU0FEeUM7QUFBQTs7QUFHcEQ7QUFDQSxHQUFDQyxNQUFELEdBQTBDLENBQUUsQ0FKUSxDQU1wRDs7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsS0FBRCxFQUF5QjtBQUM5QixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJQyx5QkFBSixHQUF5QztBQUN2QyxXQUFPLElBQVA7QUFDRDs7QUFFREMsRUFBQUEsUUFBUSxHQUFXO0FBQ2pCLFdBQU8sS0FBUDtBQUNEOztBQWpCbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFueVR5cGU8VCA9IGFueT4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnQW55VHlwZSc7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAqZXJyb3JzKCk6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPiB7fVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgVCB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldCBhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYW55J1xuICB9XG59XG4iXX0=
