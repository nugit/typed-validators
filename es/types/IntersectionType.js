'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _ObjectType = _interopRequireDefault(require('./ObjectType'))

var _MergedObjectType = _interopRequireDefault(require('./MergedObjectType'))

var _UnionType = _interopRequireDefault(require('./UnionType'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
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

class IntersectionType extends _Type.default {
  constructor(types) {
    super()

    _defineProperty(this, 'typeName', 'IntersectionType')

    _defineProperty(this, 'types', void 0)

    _defineProperty(this, 'resolved', void 0)

    for (let i = 0; i < types.length; i++) {
      ;(0, _Type.assertIsType)(types[i], `types[${i}]`)
    }

    this.types = types
  }

  resolveType() {
    if (!this.resolved) {
      const objects = []
      const rest = []

      for (const t of this.types) {
        const type = t.resolveType()
        if (type instanceof _ObjectType.default) objects.push(type)
        else rest.push(type)
      }

      if (objects.length && !rest.length) {
        this.resolved = new _MergedObjectType.default(
          objects,
          !objects.find(obj => obj.exact === false)
        ).resolveType()
      } else {
        this.resolved = this
      }
    }

    return this.resolved
  }

  *errors(validation, path, input) {
    const resolved = this.resolveType()

    if (resolved !== this) {
      yield* resolved.errors(validation, path, input)
      return
    }

    const { types } = this
    const { length } = types

    for (let i = 0; i < length; i++) {
      yield* types[i].errors(validation, path, input)
    }
  }

  accepts(input) {
    const resolved = this.resolveType()
    if (resolved !== this) return resolved.accepts(input)
    const { types } = this
    const { length } = types

    for (let i = 0; i < length; i++) {
      const type = types[i]

      if (!type.accepts(input)) {
        return false
      }
    }

    return true
  }

  get acceptsSomeCompositeTypes() {
    const resolved = this.resolveType()
    if (resolved !== this) return resolved.acceptsSomeCompositeTypes
    return this.types.some(t => t.acceptsSomeCompositeTypes)
  }

  toString(options) {
    if (
      options === null || options === void 0 ? void 0 : options.formatForMustBe
    ) {
      const formatted = this.toString()
      return /\n/.test(formatted)
        ? `of type:\n\n${formatted.replace(/^/gm, '  ')}`
        : `of type ${formatted}`
    }

    return this.types
      .map(type =>
        type instanceof _UnionType.default || type instanceof IntersectionType
          ? `(${type.toString()})`
          : type.toString()
      )
      .join(' & ')
  }
}

exports.default = IntersectionType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9JbnRlcnNlY3Rpb25UeXBlLnRzIl0sIm5hbWVzIjpbIkludGVyc2VjdGlvblR5cGUiLCJUeXBlIiwiY29uc3RydWN0b3IiLCJ0eXBlcyIsImkiLCJsZW5ndGgiLCJyZXNvbHZlVHlwZSIsInJlc29sdmVkIiwib2JqZWN0cyIsInJlc3QiLCJ0IiwidHlwZSIsIk9iamVjdFR5cGUiLCJwdXNoIiwiTWVyZ2VkT2JqZWN0VHlwZSIsImZpbmQiLCJvYmoiLCJleGFjdCIsImVycm9ycyIsInZhbGlkYXRpb24iLCJwYXRoIiwiaW5wdXQiLCJhY2NlcHRzIiwiYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcyIsInNvbWUiLCJ0b1N0cmluZyIsIm9wdGlvbnMiLCJmb3JtYXRGb3JNdXN0QmUiLCJmb3JtYXR0ZWQiLCJ0ZXN0IiwicmVwbGFjZSIsIm1hcCIsIlVuaW9uVHlwZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLE1BQU1BLGdCQUFOLFNBQWtDQyxhQUFsQyxDQUEwQztBQUt2REMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQXFCO0FBQzlCOztBQUQ4QixzQ0FKckIsa0JBSXFCOztBQUFBOztBQUFBOztBQUU5QixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsOEJBQWFELEtBQUssQ0FBQ0MsQ0FBRCxDQUFsQixFQUF3QixTQUFRQSxDQUFFLEdBQWxDO0FBQ0Q7O0FBQ0QsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBRURHLEVBQUFBLFdBQVcsR0FBWTtBQUNyQixRQUFJLENBQUMsS0FBS0MsUUFBVixFQUFvQjtBQUNsQixZQUFNQyxPQUEwQixHQUFHLEVBQW5DO0FBQ0EsWUFBTUMsSUFBaUIsR0FBRyxFQUExQjs7QUFDQSxXQUFLLE1BQU1D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LENBQStCLEVBRDNDLEdBRUYsV0FBVUYsU0FBVSxFQUZ6QjtBQUdEOztBQUNELFdBQU8sS0FBS3pCLEtBQUwsQ0FDSjRCLEdBREksQ0FDQXBCLElBQUksSUFDUEEsSUFBSSxZQUFZcUIsa0JBQWhCLElBQTZCckIsSUFBSSxZQUFZWCxnQkFBN0MsR0FDSyxJQUFHVyxJQUFJLENBQUNjLFFBQUwsRUFBZ0IsR0FEeEIsR0FFSWQsSUFBSSxDQUFDYyxRQUFMLEVBSkQsRUFNSlEsSUFOSSxDQU1DLEtBTkQsQ0FBUDtBQU9EOztBQXJGc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSwgeyBhc3NlcnRJc1R5cGUgfSBmcm9tICcuL1R5cGUnXG5pbXBvcnQgVmFsaWRhdGlvbiwgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgT2JqZWN0VHlwZSBmcm9tICcuL09iamVjdFR5cGUnXG5pbXBvcnQgTWVyZ2VkT2JqZWN0VHlwZSBmcm9tICcuL01lcmdlZE9iamVjdFR5cGUnXG5pbXBvcnQgVW5pb25UeXBlIGZyb20gJy4vVW5pb25UeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnNlY3Rpb25UeXBlPFQ+IGV4dGVuZHMgVHlwZTxUPiB7XG4gIHR5cGVOYW1lID0gJ0ludGVyc2VjdGlvblR5cGUnXG4gIHJlYWRvbmx5IHR5cGVzOiBUeXBlPGFueT5bXVxuICBwcml2YXRlIHJlc29sdmVkOiBUeXBlPFQ+IHwgdW5kZWZpbmVkXG5cbiAgY29uc3RydWN0b3IodHlwZXM6IFR5cGU8YW55PltdKSB7XG4gICAgc3VwZXIoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFzc2VydElzVHlwZSh0eXBlc1tpXSwgYHR5cGVzWyR7aX1dYClcbiAgICB9XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzXG4gIH1cblxuICByZXNvbHZlVHlwZSgpOiBUeXBlPFQ+IHtcbiAgICBpZiAoIXRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnN0IG9iamVjdHM6IE9iamVjdFR5cGU8YW55PltdID0gW11cbiAgICAgIGNvbnN0IHJlc3Q6IFR5cGU8YW55PltdID0gW11cbiAgICAgIGZvciAoY29uc3QgdCBvZiB0aGlzLnR5cGVzKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0LnJlc29sdmVUeXBlKClcbiAgICAgICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBPYmplY3RUeXBlKSBvYmplY3RzLnB1c2godHlwZSlcbiAgICAgICAgZWxzZSByZXN0LnB1c2godHlwZSlcbiAgICAgIH1cbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlZCA9IG5ldyBNZXJnZWRPYmplY3RUeXBlKFxuICAgICAgICAgIG9iamVjdHMsXG4gICAgICAgICAgIW9iamVjdHMuZmluZChvYmogPT4gb2JqLmV4YWN0ID09PSBmYWxzZSlcbiAgICAgICAgKS5yZXNvbHZlVHlwZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc29sdmVkID0gdGhpc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZFxuICB9XG5cbiAgKmVycm9ycyhcbiAgICB2YWxpZGF0aW9uOiBWYWxpZGF0aW9uLFxuICAgIHBhdGg6IElkZW50aWZpZXJQYXRoLFxuICAgIGlucHV0OiBhbnlcbiAgKTogSXRlcmFibGU8UnVudGltZVR5cGVFcnJvckl0ZW0+IHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZVR5cGUoKVxuICAgIGlmIChyZXNvbHZlZCAhPT0gdGhpcykge1xuICAgICAgeWllbGQqIHJlc29sdmVkLmVycm9ycyh2YWxpZGF0aW9uLCBwYXRoLCBpbnB1dClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IHR5cGVzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHR5cGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgeWllbGQqIHR5cGVzW2ldLmVycm9ycyh2YWxpZGF0aW9uLCBwYXRoLCBpbnB1dClcbiAgICB9XG4gIH1cblxuICBhY2NlcHRzKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBUIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZVR5cGUoKVxuICAgIGlmIChyZXNvbHZlZCAhPT0gdGhpcykgcmV0dXJuIHJlc29sdmVkLmFjY2VwdHMoaW5wdXQpXG4gICAgY29uc3QgeyB0eXBlcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0eXBlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlc1tpXVxuICAgICAgaWYgKCF0eXBlLmFjY2VwdHMoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZ2V0IGFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVUeXBlKClcbiAgICBpZiAocmVzb2x2ZWQgIT09IHRoaXMpIHJldHVybiByZXNvbHZlZC5hY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzXG4gICAgcmV0dXJuIHRoaXMudHlwZXMuc29tZSh0ID0+IHQuYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcylcbiAgfVxuXG4gIHRvU3RyaW5nKG9wdGlvbnM/OiB7IGZvcm1hdEZvck11c3RCZT86IGJvb2xlYW4gfSk6IHN0cmluZyB7XG4gICAgaWYgKG9wdGlvbnM/LmZvcm1hdEZvck11c3RCZSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkID0gdGhpcy50b1N0cmluZygpXG4gICAgICByZXR1cm4gL1xcbi8udGVzdChmb3JtYXR0ZWQpXG4gICAgICAgID8gYG9mIHR5cGU6XFxuXFxuJHtmb3JtYXR0ZWQucmVwbGFjZSgvXi9nbSwgJyAgJyl9YFxuICAgICAgICA6IGBvZiB0eXBlICR7Zm9ybWF0dGVkfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHlwZXNcbiAgICAgIC5tYXAodHlwZSA9PlxuICAgICAgICB0eXBlIGluc3RhbmNlb2YgVW5pb25UeXBlIHx8IHR5cGUgaW5zdGFuY2VvZiBJbnRlcnNlY3Rpb25UeXBlXG4gICAgICAgICAgPyBgKCR7dHlwZS50b1N0cmluZygpfSlgXG4gICAgICAgICAgOiB0eXBlLnRvU3RyaW5nKClcbiAgICAgIClcbiAgICAgIC5qb2luKCcgJiAnKVxuICB9XG59XG4iXX0=
