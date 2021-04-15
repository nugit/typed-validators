'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.assertIsType = assertIsType
exports.default = void 0

var _Validation = _interopRequireDefault(require('../Validation'))

var _RuntimeTypeError = _interopRequireDefault(
  require('../errorReporting/RuntimeTypeError')
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

function assertIsType(x, name) {
  if (!(x instanceof Type))
    throw new Error(`${name} must be an instance of Type`)
}
/**
 * # Type
 *
 * This is the base class for all types.
 */

class Type {
  constructor() {
    _defineProperty(this, '__type', null)

    _defineProperty(this, 'typeName', 'Type')
  }

  resolveType() {
    return this
  }

  get acceptsSomeCompositeTypes() {
    return false
  }

  assert(input, prefix = '', path = ['input']) {
    const validation = this.validate(input, prefix, path)

    if (validation.errors.length) {
      throw new _RuntimeTypeError.default(validation.errors)
    }

    return input
  }

  validate(input, prefix = '', path = ['input']) {
    const validation = new _Validation.default(input, prefix, path)

    for (const error of this.errors(validation, path, input))
      validation.errors.push(error)

    return validation
  }
}

exports.default = Type
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9UeXBlLnRzIl0sIm5hbWVzIjpbImFzc2VydElzVHlwZSIsIngiLCJuYW1lIiwiVHlwZSIsIkVycm9yIiwicmVzb2x2ZVR5cGUiLCJhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzIiwiYXNzZXJ0IiwiaW5wdXQiLCJwcmVmaXgiLCJwYXRoIiwidmFsaWRhdGlvbiIsInZhbGlkYXRlIiwiZXJyb3JzIiwibGVuZ3RoIiwiUnVudGltZVR5cGVFcnJvciIsIlZhbGlkYXRpb24iLCJlcnJvciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBR0E7Ozs7OztBQUVPLFNBQVNBLFlBQVQsQ0FBc0JDLENBQXRCLEVBQWtDQyxJQUFsQyxFQUFzRDtBQUMzRCxNQUFJLEVBQUVELENBQUMsWUFBWUUsSUFBZixDQUFKLEVBQ0UsTUFBTSxJQUFJQyxLQUFKLENBQVcsR0FBRUYsSUFBSyw4QkFBbEIsQ0FBTjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLZSxNQUFlQyxJQUFmLENBQXVCO0FBQUE7QUFBQSxvQ0FDZixJQURlOztBQUFBLHNDQUV6QixNQUZ5QjtBQUFBOztBQUlwQ0UsRUFBQUEsV0FBVyxHQUFZO0FBQ3JCLFdBQU8sSUFBUDtBQUNEOztBQVlELE1BQUlDLHlCQUFKLEdBQXlDO0FBQ3ZDLFdBQU8sS0FBUDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLENBQ0pDLEtBREksRUFFSkMsTUFBTSxHQUFHLEVBRkwsRUFHSkMsSUFBb0IsR0FBRyxDQUFDLE9BQUQsQ0FIbkIsRUFJRDtBQUNILFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxRQUFMLENBQWNKLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxJQUE3QixDQUFuQjs7QUFDQSxRQUFJQyxVQUFVLENBQUNFLE1BQVgsQ0FBa0JDLE1BQXRCLEVBQThCO0FBQzVCLFlBQU0sSUFBSUMseUJBQUosQ0FBcUJKLFVBQVUsQ0FBQ0UsTUFBaEMsQ0FBTjtBQUNEOztBQUNELFdBQU9MLEtBQVA7QUFDRDs7QUFFREksRUFBQUEsUUFBUSxDQUNOSixLQURNLEVBRU5DLE1BQU0sR0FBRyxFQUZILEVBR05DLElBQW9CLEdBQUcsQ0FBQyxPQUFELENBSGpCLEVBSU07QUFDWixVQUFNQyxVQUFVLEdBQUcsSUFBSUssbUJBQUosQ0FBZVIsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEJDLElBQTlCLENBQW5COztBQUNBLFNBQUssTUFBTU8sS0FBWCxJQUFvQixLQUFLSixNQUFMLENBQVlGLFVBQVosRUFBd0JELElBQXhCLEVBQThCRixLQUE5QixDQUFwQixFQUNFRyxVQUFVLENBQUNFLE1BQVgsQ0FBa0JLLElBQWxCLENBQXVCRCxLQUF2Qjs7QUFDRixXQUFPTixVQUFQO0FBQ0Q7O0FBM0NtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWYWxpZGF0aW9uIGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvciBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9yJ1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0SXNUeXBlKHg6IHVua25vd24sIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoISh4IGluc3RhbmNlb2YgVHlwZSkpXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke25hbWV9IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgVHlwZWApXG59XG5cbi8qKlxuICogIyBUeXBlXG4gKlxuICogVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUeXBlPFQ+IHtcbiAgcmVhZG9ubHkgX190eXBlOiBUID0gbnVsbCBhcyBhbnlcbiAgdHlwZU5hbWUgPSAnVHlwZSdcblxuICByZXNvbHZlVHlwZSgpOiBUeXBlPFQ+IHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWJzdHJhY3QgZXJyb3JzKFxuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4gICk6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPlxuXG4gIGFic3RyYWN0IGFjY2VwdHMoaW5wdXQ6IGFueSk6IGlucHV0IGlzIFRcblxuICBnZXQgYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGFzc2VydDxWIGV4dGVuZHMgVD4oXG4gICAgaW5wdXQ6IGFueSxcbiAgICBwcmVmaXggPSAnJyxcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCA9IFsnaW5wdXQnXVxuICApOiBWIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZShpbnB1dCwgcHJlZml4LCBwYXRoKVxuICAgIGlmICh2YWxpZGF0aW9uLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lVHlwZUVycm9yKHZhbGlkYXRpb24uZXJyb3JzKVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIHZhbGlkYXRlKFxuICAgIGlucHV0OiBhbnksXG4gICAgcHJlZml4ID0gJycsXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGggPSBbJ2lucHV0J11cbiAgKTogVmFsaWRhdGlvbiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uKGlucHV0LCBwcmVmaXgsIHBhdGgpXG4gICAgZm9yIChjb25zdCBlcnJvciBvZiB0aGlzLmVycm9ycyh2YWxpZGF0aW9uLCBwYXRoLCBpbnB1dCkpXG4gICAgICB2YWxpZGF0aW9uLmVycm9ycy5wdXNoKGVycm9yKVxuICAgIHJldHVybiB2YWxpZGF0aW9uXG4gIH1cblxuICBhYnN0cmFjdCB0b1N0cmluZyhvcHRpb25zPzogeyBmb3JtYXRGb3JNdXN0QmU/OiBib29sZWFuIH0pOiBzdHJpbmdcbn1cbiJdfQ==
