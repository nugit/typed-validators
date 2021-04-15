'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Validation = require('../Validation')

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

class RuntimeTypeErrorItem {
  constructor(path, valueAtPath, expectedTypeAtPath, depth = path.length) {
    _defineProperty(this, 'path', void 0)

    _defineProperty(this, 'valueAtPath', void 0)

    _defineProperty(this, 'expectedTypeAtPath', void 0)

    _defineProperty(this, 'depth', void 0)

    this.path = path
    this.valueAtPath = valueAtPath
    this.expectedTypeAtPath = expectedTypeAtPath
    this.depth = depth
  }

  toString() {
    return `${(0, _Validation.stringifyPath)(
      this.path
    )} ${this.messageAtPath()}`
  }
}

exports.default = RuntimeTypeErrorItem

_defineProperty(RuntimeTypeErrorItem, 'code', '')
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbS50cyJdLCJuYW1lcyI6WyJSdW50aW1lVHlwZUVycm9ySXRlbSIsImNvbnN0cnVjdG9yIiwicGF0aCIsInZhbHVlQXRQYXRoIiwiZXhwZWN0ZWRUeXBlQXRQYXRoIiwiZGVwdGgiLCJsZW5ndGgiLCJ0b1N0cmluZyIsIm1lc3NhZ2VBdFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUdlLE1BQWVBLG9CQUFmLENBQW9DO0FBT2pEQyxFQUFBQSxXQUFXLENBQ1RDLElBRFMsRUFFVEMsV0FGUyxFQUdUQyxrQkFIUyxFQUlUQyxLQUFhLEdBQUdILElBQUksQ0FBQ0ksTUFKWixFQUtUO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ0EsU0FBS0osSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBSURFLEVBQUFBLFFBQVEsR0FBVztBQUNqQixXQUFRLEdBQUUsK0JBQWMsS0FBS0wsSUFBbkIsQ0FBeUIsSUFBRyxLQUFLTSxhQUFMLEVBQXFCLEVBQTNEO0FBQ0Q7O0FBdkJnRDs7OztnQkFBckJSLG9CLFVBQ0csRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkZW50aWZpZXJQYXRoLCBzdHJpbmdpZnlQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCBUeXBlIGZyb20gJy4uL3R5cGVzL1R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJ1bnRpbWVUeXBlRXJyb3JJdGVtIHtcbiAgc3RhdGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9ICcnXG4gIHJlYWRvbmx5IHBhdGg6IElkZW50aWZpZXJQYXRoXG4gIHJlYWRvbmx5IHZhbHVlQXRQYXRoOiB1bmtub3duXG4gIHJlYWRvbmx5IGV4cGVjdGVkVHlwZUF0UGF0aDogVHlwZTx1bmtub3duPlxuICByZWFkb25seSBkZXB0aDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgdmFsdWVBdFBhdGg6IHVua25vd24sXG4gICAgZXhwZWN0ZWRUeXBlQXRQYXRoOiBUeXBlPHVua25vd24+LFxuICAgIGRlcHRoOiBudW1iZXIgPSBwYXRoLmxlbmd0aFxuICApIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoXG4gICAgdGhpcy52YWx1ZUF0UGF0aCA9IHZhbHVlQXRQYXRoXG4gICAgdGhpcy5leHBlY3RlZFR5cGVBdFBhdGggPSBleHBlY3RlZFR5cGVBdFBhdGhcbiAgICB0aGlzLmRlcHRoID0gZGVwdGhcbiAgfVxuXG4gIGFic3RyYWN0IG1lc3NhZ2VBdFBhdGgoKTogc3RyaW5nXG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7c3RyaW5naWZ5UGF0aCh0aGlzLnBhdGgpfSAke3RoaXMubWVzc2FnZUF0UGF0aCgpfWBcbiAgfVxufVxuIl19
