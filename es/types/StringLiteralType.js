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

class StringLiteralType extends _PrimitiveLiteralType.default {
  constructor(value) {
    super(value)

    _defineProperty(this, 'typeName', 'StringLiteralType')

    if (typeof value !== 'string') {
      throw new Error(`value must be a string`)
    }
  }

  toString() {
    return JSON.stringify(this.value)
  }
}

exports.default = StringLiteralType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9TdHJpbmdMaXRlcmFsVHlwZS50cyJdLCJuYW1lcyI6WyJTdHJpbmdMaXRlcmFsVHlwZSIsIlByaW1pdGl2ZUxpdGVyYWxUeXBlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsIkVycm9yIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVlLE1BQU1BLGlCQUFOLFNBRUxDLDZCQUZLLENBRW1CO0FBR2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBVztBQUNwQixVQUFNQSxLQUFOOztBQURvQixzQ0FGWCxtQkFFVzs7QUFFcEIsUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFlBQU0sSUFBSUMsS0FBSixDQUFXLHdCQUFYLENBQU47QUFDRDtBQUNGOztBQUVEQyxFQUFBQSxRQUFRLEdBQVc7QUFDakIsV0FBT0MsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS0osS0FBcEIsQ0FBUDtBQUNEOztBQVorQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmltaXRpdmVMaXRlcmFsVHlwZSBmcm9tICcuL1ByaW1pdGl2ZUxpdGVyYWxUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdMaXRlcmFsVHlwZTxcbiAgVCBleHRlbmRzIHN0cmluZ1xuPiBleHRlbmRzIFByaW1pdGl2ZUxpdGVyYWxUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnU3RyaW5nTGl0ZXJhbFR5cGUnXG5cbiAgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcbiAgICBzdXBlcih2YWx1ZSlcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nYClcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnZhbHVlKVxuICB9XG59XG4iXX0=
