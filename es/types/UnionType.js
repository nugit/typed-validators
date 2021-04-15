'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

var _PrimitiveLiteralType = _interopRequireDefault(
  require('./PrimitiveLiteralType')
)

var _IntersectionType = _interopRequireDefault(require('./IntersectionType'))

var _NullLiteralType = _interopRequireDefault(require('./NullLiteralType'))

var _ObjectType = _interopRequireDefault(require('./ObjectType'))

var _UndefinedLiteralType = _interopRequireDefault(
  require('./UndefinedLiteralType')
)

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

function getDeterminantProperty(types) {
  const objTypes = []

  for (const type of types) {
    const t = type.resolveType()
    if (
      t instanceof _NullLiteralType.default ||
      t instanceof _UndefinedLiteralType.default
    )
      continue
    if (t instanceof _ObjectType.default) objTypes.push(t)
  }

  if (!objTypes.length) return null
  const propertyMaps = objTypes.map(
    ({ properties }) => new Map(properties.map(p => [p.key, p]))
  )
  const potential = objTypes[0].properties
    .map(p => {
      const eachProperty = propertyMaps.map(m => m.get(p.key))
      const valueMap = new Map()

      for (const property of eachProperty) {
        if (!property) return null
        const { value } = property
        if (
          !(value instanceof _PrimitiveLiteralType.default) ||
          value instanceof _NullLiteralType.default ||
          value instanceof _UndefinedLiteralType.default ||
          valueMap.has(value.value)
        )
          return null
        valueMap.set(value.value, property.__objectType)
      }

      return [p.key, valueMap]
    })
    .filter(p => p != null)
  return potential.length === 1 ? potential[0] : null
}

class UnionType extends _Type.default {
  constructor(types) {
    super()

    _defineProperty(this, 'typeName', 'UnionType')

    _defineProperty(this, 'types', void 0)

    _defineProperty(this, '_determinantProperty', void 0)

    for (let i = 0; i < types.length; i++) {
      ;(0, _Type.assertIsType)(types[i], `types[${i}]`)
    }

    this.types = types
  }

  get determinantProperty() {
    return this._determinantProperty === undefined
      ? (this._determinantProperty = getDeterminantProperty(this.types))
      : this._determinantProperty
  }

  *errors(validation, path, input) {
    const { types } = this
    const { length } = types

    for (let i = 0; i < length; i++) {
      const type = types[i]

      if (type.accepts(input)) {
        return
      }
    }

    if (input != null) {
      const deepErrors = this.types
        .map(t => [...t.errors(validation, path, input)])
        .filter(errors => errors.find(e => e.depth > path.length))

      if (deepErrors.length === 1) {
        yield* deepErrors[0]
        return
      }

      if (input instanceof Object) {
        const { determinantProperty } = this

        if (determinantProperty) {
          const [key, valuesMap] = determinantProperty
          const typeForValue = valuesMap.get(input[key])

          if (typeForValue) {
            yield* typeForValue.errors(validation, path, input)
            return
          }
        }
      }
    }

    yield new _InvalidTypeErrorItem.default(path, input, this)
  }

  accepts(input) {
    const { types } = this
    const { length } = types

    for (let i = 0; i < length; i++) {
      const type = types[i]

      if (type.accepts(input)) {
        return true
      }
    }

    return false
  }

  get acceptsSomeCompositeTypes() {
    return this.types.some(t => t.acceptsSomeCompositeTypes)
  }

  toString(options) {
    if (
      options === null || options === void 0 ? void 0 : options.formatForMustBe
    ) {
      const formatted = this.toString()
      return /\n/.test(formatted)
        ? `one of:\n\n${formatted.replace(/^/gm, '  ')}`
        : `one of ${formatted}`
    }

    return this.types
      .map(type =>
        type instanceof UnionType || type instanceof _IntersectionType.default
          ? `(${type.toString()})`
          : type.toString()
      )
      .join(' | ')
  }
}

exports.default = UnionType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9VbmlvblR5cGUudHMiXSwibmFtZXMiOlsiZ2V0RGV0ZXJtaW5hbnRQcm9wZXJ0eSIsInR5cGVzIiwib2JqVHlwZXMiLCJ0eXBlIiwidCIsInJlc29sdmVUeXBlIiwiTnVsbExpdGVyYWxUeXBlIiwiVW5kZWZpbmVkTGl0ZXJhbFR5cGUiLCJPYmplY3RUeXBlIiwicHVzaCIsImxlbmd0aCIsInByb3BlcnR5TWFwcyIsIm1hcCIsInByb3BlcnRpZXMiLCJNYXAiLCJwIiwia2V5IiwicG90ZW50aWFsIiwiZWFjaFByb3BlcnR5IiwibSIsImdldCIsInZhbHVlTWFwIiwicHJvcGVydHkiLCJ2YWx1ZSIsIlByaW1pdGl2ZUxpdGVyYWxUeXBlIiwiaGFzIiwic2V0IiwiX19vYmplY3RUeXBlIiwiZmlsdGVyIiwiVW5pb25UeXBlIiwiVHlwZSIsImNvbnN0cnVjdG9yIiwiaSIsImRldGVybWluYW50UHJvcGVydHkiLCJfZGV0ZXJtaW5hbnRQcm9wZXJ0eSIsInVuZGVmaW5lZCIsImVycm9ycyIsInZhbGlkYXRpb24iLCJwYXRoIiwiaW5wdXQiLCJhY2NlcHRzIiwiZGVlcEVycm9ycyIsImZpbmQiLCJlIiwiZGVwdGgiLCJPYmplY3QiLCJ2YWx1ZXNNYXAiLCJ0eXBlRm9yVmFsdWUiLCJJbnZhbGlkVHlwZUVycm9ySXRlbSIsImFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMiLCJzb21lIiwidG9TdHJpbmciLCJvcHRpb25zIiwiZm9ybWF0Rm9yTXVzdEJlIiwiZm9ybWF0dGVkIiwidGVzdCIsInJlcGxhY2UiLCJJbnRlcnNlY3Rpb25UeXBlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0Esc0JBQVQsQ0FDRUMsS0FERixFQUUwRDtBQUN4RCxRQUFNQyxRQUEyQixHQUFHLEVBQXBDOztBQUNBLE9BQUssTUFBTUMsSUFBWCxJQUFt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RUloRCxJQUFJLENBQUNnRCxRQUFMLEVBSkQsRUFNSk8sSUFOSSxDQU1DLEtBTkQsQ0FBUDtBQU9EOztBQTFGK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSwgeyBhc3NlcnRJc1R5cGUgfSBmcm9tICcuL1R5cGUnXG5pbXBvcnQgVmFsaWRhdGlvbiwgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgSW52YWxpZFR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZFR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgT2JqZWN0VHlwZVByb3BlcnR5IGZyb20gJy4vT2JqZWN0VHlwZVByb3BlcnR5J1xuaW1wb3J0IFByaW1pdGl2ZUxpdGVyYWxUeXBlIGZyb20gJy4vUHJpbWl0aXZlTGl0ZXJhbFR5cGUnXG5pbXBvcnQgSW50ZXJzZWN0aW9uVHlwZSBmcm9tICcuL0ludGVyc2VjdGlvblR5cGUnXG5pbXBvcnQgTnVsbExpdGVyYWxUeXBlIGZyb20gJy4vTnVsbExpdGVyYWxUeXBlJ1xuaW1wb3J0IE9iamVjdFR5cGUgZnJvbSAnLi9PYmplY3RUeXBlJ1xuaW1wb3J0IFVuZGVmaW5lZExpdGVyYWxUeXBlIGZyb20gJy4vVW5kZWZpbmVkTGl0ZXJhbFR5cGUnXG5cbmZ1bmN0aW9uIGdldERldGVybWluYW50UHJvcGVydHkoXG4gIHR5cGVzOiBUeXBlPGFueT5bXVxuKTogW3N0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgTWFwPGFueSwgVHlwZTxhbnk+Pl0gfCBudWxsIHtcbiAgY29uc3Qgb2JqVHlwZXM6IE9iamVjdFR5cGU8YW55PltdID0gW11cbiAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XG4gICAgY29uc3QgdCA9IHR5cGUucmVzb2x2ZVR5cGUoKVxuICAgIGlmICh0IGluc3RhbmNlb2YgTnVsbExpdGVyYWxUeXBlIHx8IHQgaW5zdGFuY2VvZiBVbmRlZmluZWRMaXRlcmFsVHlwZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgaWYgKHQgaW5zdGFuY2VvZiBPYmplY3RUeXBlKSBvYmpUeXBlcy5wdXNoKHQpXG4gIH1cbiAgaWYgKCFvYmpUeXBlcy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IHByb3BlcnR5TWFwczogTWFwPFxuICAgIHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCxcbiAgICBPYmplY3RUeXBlUHJvcGVydHk8YW55LCBhbnk+XG4gID5bXSA9IG9ialR5cGVzLm1hcChcbiAgICAoeyBwcm9wZXJ0aWVzIH0pID0+IG5ldyBNYXAocHJvcGVydGllcy5tYXAocCA9PiBbcC5rZXksIHBdKSlcbiAgKVxuICBjb25zdCBwb3RlbnRpYWw6IChcbiAgICB8IFtzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIE1hcDxhbnksIFR5cGU8YW55Pj5dXG4gICAgfCBudWxsXG4gIClbXSA9IG9ialR5cGVzWzBdLnByb3BlcnRpZXNcbiAgICAubWFwKChwOiBPYmplY3RUeXBlUHJvcGVydHk8YW55LCBhbnk+KTpcbiAgICAgIHwgW3N0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgTWFwPGFueSwgVHlwZTxhbnk+Pl1cbiAgICAgIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCBlYWNoUHJvcGVydHkgPSBwcm9wZXJ0eU1hcHMubWFwKG0gPT4gbS5nZXQocC5rZXkpKVxuICAgICAgY29uc3QgdmFsdWVNYXA6IE1hcDxhbnksIFR5cGU8YW55Pj4gPSBuZXcgTWFwKClcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgZWFjaFByb3BlcnR5KSB7XG4gICAgICAgIGlmICghcHJvcGVydHkpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BlcnR5XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlTGl0ZXJhbFR5cGUpIHx8XG4gICAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBOdWxsTGl0ZXJhbFR5cGUgfHxcbiAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIFVuZGVmaW5lZExpdGVyYWxUeXBlIHx8XG4gICAgICAgICAgdmFsdWVNYXAuaGFzKHZhbHVlLnZhbHVlKVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgICB2YWx1ZU1hcC5zZXQodmFsdWUudmFsdWUsIHByb3BlcnR5Ll9fb2JqZWN0VHlwZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcC5rZXksIHZhbHVlTWFwXVxuICAgIH0pXG4gICAgLmZpbHRlcihwID0+IHAgIT0gbnVsbClcbiAgcmV0dXJuIHBvdGVudGlhbC5sZW5ndGggPT09IDEgPyBwb3RlbnRpYWxbMF0gOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaW9uVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICB0eXBlTmFtZSA9ICdVbmlvblR5cGUnXG4gIHJlYWRvbmx5IHR5cGVzOiBUeXBlPGFueT5bXVxuICBwcml2YXRlIF9kZXRlcm1pbmFudFByb3BlcnR5OlxuICAgIHwgW3N0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgTWFwPGFueSwgVHlwZTxhbnk+Pl1cbiAgICB8IG51bGxcbiAgICB8IHVuZGVmaW5lZFxuXG4gIGNvbnN0cnVjdG9yKHR5cGVzOiBUeXBlPGFueT5bXSkge1xuICAgIHN1cGVyKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhc3NlcnRJc1R5cGUodHlwZXNbaV0sIGB0eXBlc1ske2l9XWApXG4gICAgfVxuICAgIHRoaXMudHlwZXMgPSB0eXBlc1xuICB9XG5cbiAgZ2V0IGRldGVybWluYW50UHJvcGVydHkoKTpcbiAgICB8IFtzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIE1hcDxhbnksIFR5cGU8YW55Pj5dXG4gICAgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZGV0ZXJtaW5hbnRQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICh0aGlzLl9kZXRlcm1pbmFudFByb3BlcnR5ID0gZ2V0RGV0ZXJtaW5hbnRQcm9wZXJ0eSh0aGlzLnR5cGVzKSlcbiAgICAgIDogdGhpcy5fZGV0ZXJtaW5hbnRQcm9wZXJ0eVxuICB9XG5cbiAgKmVycm9ycyhcbiAgICB2YWxpZGF0aW9uOiBWYWxpZGF0aW9uLFxuICAgIHBhdGg6IElkZW50aWZpZXJQYXRoLFxuICAgIGlucHV0OiBhbnlcbiAgKTogSXRlcmFibGU8UnVudGltZVR5cGVFcnJvckl0ZW0+IHtcbiAgICBjb25zdCB7IHR5cGVzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHR5cGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdHlwZSA9IHR5cGVzW2ldXG4gICAgICBpZiAodHlwZS5hY2NlcHRzKGlucHV0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZXBFcnJvcnM6IFJ1bnRpbWVUeXBlRXJyb3JJdGVtW11bXSA9IHRoaXMudHlwZXNcbiAgICAgICAgLm1hcCh0ID0+IFsuLi50LmVycm9ycyh2YWxpZGF0aW9uLCBwYXRoLCBpbnB1dCldKVxuICAgICAgICAuZmlsdGVyKGVycm9ycyA9PiBlcnJvcnMuZmluZChlID0+IGUuZGVwdGggPiBwYXRoLmxlbmd0aCkpXG4gICAgICBpZiAoZGVlcEVycm9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgeWllbGQqIGRlZXBFcnJvcnNbMF1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgY29uc3QgeyBkZXRlcm1pbmFudFByb3BlcnR5IH0gPSB0aGlzXG4gICAgICAgIGlmIChkZXRlcm1pbmFudFByb3BlcnR5KSB7XG4gICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVzTWFwXSA9IGRldGVybWluYW50UHJvcGVydHlcbiAgICAgICAgICBjb25zdCB0eXBlRm9yVmFsdWUgPSB2YWx1ZXNNYXAuZ2V0KGlucHV0W2tleV0pXG4gICAgICAgICAgaWYgKHR5cGVGb3JWYWx1ZSkge1xuICAgICAgICAgICAgeWllbGQqIHR5cGVGb3JWYWx1ZS5lcnJvcnModmFsaWRhdGlvbiwgcGF0aCwgaW5wdXQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeWllbGQgbmV3IEludmFsaWRUeXBlRXJyb3JJdGVtKHBhdGgsIGlucHV0LCB0aGlzKVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgVCB7XG4gICAgY29uc3QgeyB0eXBlcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0eXBlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlc1tpXVxuICAgICAgaWYgKHR5cGUuYWNjZXB0cyhpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXQgYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlcy5zb21lKHQgPT4gdC5hY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzKVxuICB9XG5cbiAgdG9TdHJpbmcob3B0aW9ucz86IHsgZm9ybWF0Rm9yTXVzdEJlPzogYm9vbGVhbiB9KTogc3RyaW5nIHtcbiAgICBpZiAob3B0aW9ucz8uZm9ybWF0Rm9yTXVzdEJlKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSB0aGlzLnRvU3RyaW5nKClcbiAgICAgIHJldHVybiAvXFxuLy50ZXN0KGZvcm1hdHRlZClcbiAgICAgICAgPyBgb25lIG9mOlxcblxcbiR7Zm9ybWF0dGVkLnJlcGxhY2UoL14vZ20sICcgICcpfWBcbiAgICAgICAgOiBgb25lIG9mICR7Zm9ybWF0dGVkfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHlwZXNcbiAgICAgIC5tYXAodHlwZSA9PlxuICAgICAgICB0eXBlIGluc3RhbmNlb2YgVW5pb25UeXBlIHx8IHR5cGUgaW5zdGFuY2VvZiBJbnRlcnNlY3Rpb25UeXBlXG4gICAgICAgICAgPyBgKCR7dHlwZS50b1N0cmluZygpfSlgXG4gICAgICAgICAgOiB0eXBlLnRvU3RyaW5nKClcbiAgICAgIClcbiAgICAgIC5qb2luKCcgfCAnKVxuICB9XG59XG4iXX0=
