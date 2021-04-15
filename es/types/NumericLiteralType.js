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

class NumericLiteralType extends _PrimitiveLiteralType.default {
  constructor(value) {
    super(value)

    _defineProperty(this, 'typeName', 'NumericLiteralType')

    if (typeof value !== 'number') {
      throw new Error(`value must be a number`)
    }
  }

  toString() {
    return Object.is(this.value, -0) ? '-0' : String(this.value)
  }
}

exports.default = NumericLiteralType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9OdW1lcmljTGl0ZXJhbFR5cGUudHMiXSwibmFtZXMiOlsiTnVtZXJpY0xpdGVyYWxUeXBlIiwiUHJpbWl0aXZlTGl0ZXJhbFR5cGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwiRXJyb3IiLCJ0b1N0cmluZyIsIk9iamVjdCIsImlzIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVlLE1BQU1BLGtCQUFOLFNBRUxDLDZCQUZLLENBRW1CO0FBR2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBVztBQUNwQixVQUFNQSxLQUFOOztBQURvQixzQ0FGWCxvQkFFVzs7QUFFcEIsUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFlBQU0sSUFBSUMsS0FBSixDQUFXLHdCQUFYLENBQU47QUFDRDtBQUNGOztBQUVEQyxFQUFBQSxRQUFRLEdBQVc7QUFDakIsV0FBT0MsTUFBTSxDQUFDQyxFQUFQLENBQVUsS0FBS0osS0FBZixFQUFzQixDQUFDLENBQXZCLElBQTRCLElBQTVCLEdBQW1DSyxNQUFNLENBQUMsS0FBS0wsS0FBTixDQUFoRDtBQUNEOztBQVorQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmltaXRpdmVMaXRlcmFsVHlwZSBmcm9tICcuL1ByaW1pdGl2ZUxpdGVyYWxUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1lcmljTGl0ZXJhbFR5cGU8XG4gIFQgZXh0ZW5kcyBudW1iZXJcbj4gZXh0ZW5kcyBQcmltaXRpdmVMaXRlcmFsVHlwZTxUPiB7XG4gIHR5cGVOYW1lID0gJ051bWVyaWNMaXRlcmFsVHlwZSdcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xuICAgIHN1cGVyKHZhbHVlKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlIG11c3QgYmUgYSBudW1iZXJgKVxuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5pcyh0aGlzLnZhbHVlLCAtMCkgPyAnLTAnIDogU3RyaW5nKHRoaXMudmFsdWUpXG4gIH1cbn1cbiJdfQ==
