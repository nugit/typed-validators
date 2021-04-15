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

class BooleanLiteralType extends _PrimitiveLiteralType.default {
  constructor(value) {
    super(value)

    _defineProperty(this, 'typeName', 'BooleanLiteralType')

    if (typeof value !== 'boolean') {
      throw new Error(`value must be a boolean`)
    }
  }
}

exports.default = BooleanLiteralType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Cb29sZWFuTGl0ZXJhbFR5cGUudHMiXSwibmFtZXMiOlsiQm9vbGVhbkxpdGVyYWxUeXBlIiwiUHJpbWl0aXZlTGl0ZXJhbFR5cGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRWUsTUFBTUEsa0JBQU4sU0FFTEMsNkJBRkssQ0FFbUI7QUFHaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BCLFVBQU1BLEtBQU47O0FBRG9CLHNDQUZYLG9CQUVXOztBQUVwQixRQUFJLE9BQU9BLEtBQVAsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUIsWUFBTSxJQUFJQyxLQUFKLENBQVcseUJBQVgsQ0FBTjtBQUNEO0FBQ0Y7O0FBUitCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaW1pdGl2ZUxpdGVyYWxUeXBlIGZyb20gJy4vUHJpbWl0aXZlTGl0ZXJhbFR5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2xlYW5MaXRlcmFsVHlwZTxcbiAgVCBleHRlbmRzIGJvb2xlYW5cbj4gZXh0ZW5kcyBQcmltaXRpdmVMaXRlcmFsVHlwZTxUPiB7XG4gIHR5cGVOYW1lID0gJ0Jvb2xlYW5MaXRlcmFsVHlwZSdcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xuICAgIHN1cGVyKHZhbHVlKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB2YWx1ZSBtdXN0IGJlIGEgYm9vbGVhbmApXG4gICAgfVxuICB9XG59XG4iXX0=
