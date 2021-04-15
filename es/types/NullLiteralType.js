'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _PrimitiveLiteralType = _interopRequireDefault(
  require('./PrimitiveLiteralType')
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

class NullLiteralType extends _PrimitiveLiteralType.default {
  constructor() {
    super(null)

    _defineProperty(this, 'typeName', 'NullLiteralType')
  }
}

exports.default = NullLiteralType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9OdWxsTGl0ZXJhbFR5cGUudHMiXSwibmFtZXMiOlsiTnVsbExpdGVyYWxUeXBlIiwiUHJpbWl0aXZlTGl0ZXJhbFR5cGUiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFZSxNQUFNQSxlQUFOLFNBQThCQyw2QkFBOUIsQ0FBeUQ7QUFHdEVDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFVBQU0sSUFBTjs7QUFEWSxzQ0FGSCxpQkFFRztBQUViOztBQUxxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmltaXRpdmVMaXRlcmFsVHlwZSBmcm9tICcuL1ByaW1pdGl2ZUxpdGVyYWxUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdWxsTGl0ZXJhbFR5cGUgZXh0ZW5kcyBQcmltaXRpdmVMaXRlcmFsVHlwZTxudWxsPiB7XG4gIHR5cGVOYW1lID0gJ051bGxMaXRlcmFsVHlwZSdcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihudWxsKVxuICB9XG59XG4iXX0=
