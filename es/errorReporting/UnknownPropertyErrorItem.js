'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _RuntimeTypeErrorItem = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

var _keyToString = require('./keyToString')

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

class UnknownPropertyErrorItem extends _RuntimeTypeErrorItem.default {
  constructor(path, valueAtPath, expectedTypeAtPath, key) {
    super(path, valueAtPath, expectedTypeAtPath, path.length + 1)

    _defineProperty(this, 'key', void 0)

    this.key = key
  }

  messageAtPath() {
    return `has unknown property: ${(0, _keyToString.keyToString)(this.key)}`
  }
}

exports.default = UnknownPropertyErrorItem

_defineProperty(UnknownPropertyErrorItem, 'code', void 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9Vbmtub3duUHJvcGVydHlFcnJvckl0ZW0udHMiXSwibmFtZXMiOlsiVW5rbm93blByb3BlcnR5RXJyb3JJdGVtIiwiUnVudGltZVR5cGVFcnJvckl0ZW0iLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJ2YWx1ZUF0UGF0aCIsImV4cGVjdGVkVHlwZUF0UGF0aCIsImtleSIsImxlbmd0aCIsIm1lc3NhZ2VBdFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRWUsTUFBTUEsd0JBQU4sU0FBdUNDLDZCQUF2QyxDQUE0RDtBQUl6RUMsRUFBQUEsV0FBVyxDQUNUQyxJQURTLEVBRVRDLFdBRlMsRUFHVEMsa0JBSFMsRUFJVEMsR0FKUyxFQUtUO0FBQ0EsVUFBTUgsSUFBTixFQUFZQyxXQUFaLEVBQXlCQyxrQkFBekIsRUFBNkNGLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQTNEOztBQURBOztBQUVBLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNEOztBQUVERSxFQUFBQSxhQUFhLEdBQVc7QUFDdEIsV0FBUSx5QkFBd0IsOEJBQVksS0FBS0YsR0FBakIsQ0FBc0IsRUFBdEQ7QUFDRDs7QUFoQndFOzs7O2dCQUF0RE4sd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tICcuLi90eXBlcy9UeXBlJ1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4vUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgeyBrZXlUb1N0cmluZyB9IGZyb20gJy4va2V5VG9TdHJpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVua25vd25Qcm9wZXJ0eUVycm9ySXRlbSBleHRlbmRzIFJ1bnRpbWVUeXBlRXJyb3JJdGVtIHtcbiAgc3RhdGljIHJlYWRvbmx5IGNvZGU6ICdVTktOT1dOX1BST1BFUlRZJ1xuICByZWFkb25seSBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGg6IElkZW50aWZpZXJQYXRoLFxuICAgIHZhbHVlQXRQYXRoOiB1bmtub3duLFxuICAgIGV4cGVjdGVkVHlwZUF0UGF0aDogVHlwZTx1bmtub3duPixcbiAgICBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbFxuICApIHtcbiAgICBzdXBlcihwYXRoLCB2YWx1ZUF0UGF0aCwgZXhwZWN0ZWRUeXBlQXRQYXRoLCBwYXRoLmxlbmd0aCArIDEpXG4gICAgdGhpcy5rZXkgPSBrZXlcbiAgfVxuXG4gIG1lc3NhZ2VBdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGhhcyB1bmtub3duIHByb3BlcnR5OiAke2tleVRvU3RyaW5nKHRoaXMua2V5KX1gXG4gIH1cbn1cbiJdfQ==
