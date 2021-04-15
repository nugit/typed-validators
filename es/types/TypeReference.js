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

class TypeReference extends _Type.default {
  constructor(type) {
    super()

    _defineProperty(this, 'typeName', 'TypeReference')

    _defineProperty(this, 'type', void 0)

    this.type = type
  }

  resolveType() {
    return this.type().resolveType()
  }

  *errors(validation, path, input) {
    yield* this.type().errors(validation, path, input)
  }

  accepts(input) {
    return this.type().accepts(input)
  }

  get acceptsSomeCompositeTypes() {
    return this.type().acceptsSomeCompositeTypes
  }

  toString() {
    return this.type().toString()
  }
}

exports.default = TypeReference
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9UeXBlUmVmZXJlbmNlLnRzIl0sIm5hbWVzIjpbIlR5cGVSZWZlcmVuY2UiLCJUeXBlIiwiY29uc3RydWN0b3IiLCJ0eXBlIiwicmVzb2x2ZVR5cGUiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uIiwicGF0aCIsImlucHV0IiwiYWNjZXB0cyIsImFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFLZSxNQUFNQSxhQUFOLFNBQStCQyxhQUEvQixDQUF1QztBQUlwREMsRUFBQUEsV0FBVyxDQUFDQyxJQUFELEVBQTJCO0FBQ3BDOztBQURvQyxzQ0FIM0IsZUFHMkI7O0FBQUE7O0FBRXBDLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUVEQyxFQUFBQSxXQUFXLEdBQVk7QUFDckIsV0FBTyxLQUFLRCxJQUFMLEdBQVlDLFdBQVosRUFBUDtBQUNEOztBQUVELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEMsV0FBTyxLQUFLTCxJQUFMLEdBQVlFLE1BQVosQ0FBbUJDLFVBQW5CLEVBQStCQyxJQUEvQixFQUFxQ0MsS0FBckMsQ0FBUDtBQUNEOztBQUVEQyxFQUFBQSxPQUFPLENBQUNELEtBQUQsRUFBeUI7QUFDOUIsV0FBTyxLQUFLTCxJQUFMLEdBQVlNLE9BQVosQ0FBb0JELEtBQXBCLENBQVA7QUFDRDs7QUFFRCxNQUFJRSx5QkFBSixHQUF5QztBQUN2QyxXQUFPLEtBQUtQLElBQUwsR0FBWU8seUJBQW5CO0FBQ0Q7O0FBRURDLEVBQUFBLFFBQVEsR0FBVztBQUNqQixXQUFPLEtBQUtSLElBQUwsR0FBWVEsUUFBWixFQUFQO0FBQ0Q7O0FBL0JtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSdcbmltcG9ydCBUeXBlQWxpYXMgZnJvbSAnLi9UeXBlQWxpYXMnXG5pbXBvcnQgVmFsaWRhdGlvbiwgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVSZWZlcmVuY2U8VD4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnVHlwZVJlZmVyZW5jZSdcbiAgcmVhZG9ubHkgdHlwZTogKCkgPT4gVHlwZUFsaWFzPFQ+XG5cbiAgY29uc3RydWN0b3IodHlwZTogKCkgPT4gVHlwZUFsaWFzPFQ+KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgfVxuXG4gIHJlc29sdmVUeXBlKCk6IFR5cGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUoKS5yZXNvbHZlVHlwZSgpXG4gIH1cblxuICAqZXJyb3JzKFxuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICApOiBJdGVyYWJsZTxSdW50aW1lVHlwZUVycm9ySXRlbT4ge1xuICAgIHlpZWxkKiB0aGlzLnR5cGUoKS5lcnJvcnModmFsaWRhdGlvbiwgcGF0aCwgaW5wdXQpXG4gIH1cblxuICBhY2NlcHRzKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBUIHtcbiAgICByZXR1cm4gdGhpcy50eXBlKCkuYWNjZXB0cyhpbnB1dClcbiAgfVxuXG4gIGdldCBhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUoKS5hY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzXG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnR5cGUoKS50b1N0cmluZygpXG4gIH1cbn1cbiJdfQ==
