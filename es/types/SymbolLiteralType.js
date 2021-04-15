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

class SymbolLiteralType extends _PrimitiveLiteralType.default {
  constructor(value) {
    super(value)

    _defineProperty(this, 'typeName', 'SymbolLiteralType')

    if (typeof value !== 'symbol') {
      throw new Error(`value must be symbol`)
    }
  }
}

exports.default = SymbolLiteralType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9TeW1ib2xMaXRlcmFsVHlwZS50cyJdLCJuYW1lcyI6WyJTeW1ib2xMaXRlcmFsVHlwZSIsIlByaW1pdGl2ZUxpdGVyYWxUeXBlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVlLE1BQU1BLGlCQUFOLFNBRUxDLDZCQUZLLENBRW1CO0FBR2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBVztBQUNwQixVQUFNQSxLQUFOOztBQURvQixzQ0FGWCxtQkFFVzs7QUFFcEIsUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFlBQU0sSUFBSUMsS0FBSixDQUFXLHNCQUFYLENBQU47QUFDRDtBQUNGOztBQVIrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmltaXRpdmVMaXRlcmFsVHlwZSBmcm9tICcuL1ByaW1pdGl2ZUxpdGVyYWxUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW1ib2xMaXRlcmFsVHlwZTxcbiAgVCBleHRlbmRzIHN5bWJvbFxuPiBleHRlbmRzIFByaW1pdGl2ZUxpdGVyYWxUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnU3ltYm9sTGl0ZXJhbFR5cGUnXG5cbiAgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcbiAgICBzdXBlcih2YWx1ZSlcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3ltYm9sJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB2YWx1ZSBtdXN0IGJlIHN5bWJvbGApXG4gICAgfVxuICB9XG59XG4iXX0=
