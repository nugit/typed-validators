'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _MissingPropertyErrorItem = _interopRequireDefault(
  require('../errorReporting/MissingPropertyErrorItem')
)

var _keyToString = require('../errorReporting/keyToString')

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

class ObjectTypeProperty extends _Type.default {
  constructor(key, value, optional) {
    super()

    _defineProperty(this, 'typeName', 'ObjectTypeProperty')

    _defineProperty(this, 'key', void 0)

    _defineProperty(this, 'value', void 0)

    _defineProperty(this, 'optional', void 0)

    _defineProperty(this, '__objectType', null)

    switch (typeof key) {
      case 'number':
      case 'string':
      case 'symbol':
        break

      default:
        throw new Error('key must be a number, string or symbol')
    }

    ;(0, _Type.assertIsType)(value, 'value')
    this.key = key
    this.value = value
    this.optional = optional
  }

  clone() {
    return new ObjectTypeProperty(this.key, this.value, this.optional)
  }
  /**
   * Determine whether the property exists on the given input or its prototype chain.
   */

  existsOn(input) {
    // @flowIgnore
    const { key } = this
    return key in input === true
  }

  *errors(validation, path, input) {
    // @flowIgnore
    const { optional, key, value } = this
    const targetPath = path.concat(key)

    if (!optional && !this.existsOn(input)) {
      yield new _MissingPropertyErrorItem.default(
        path,
        input,
        this.__objectType,
        this
      )
      return
    }

    const target = input[key]

    if (optional && target === undefined) {
      return
    }

    yield* value.errors(validation, targetPath, target)
  }

  accepts(input) {
    // @flowIgnore
    const { optional, key, value } = this

    if (!optional && !this.existsOn(input)) {
      return false
    }

    const target = input[key]

    if (optional && target === undefined) {
      return true
    }

    return value.accepts(target)
  }

  toString() {
    return `${(0, _keyToString.keyToString)(this.key)}${
      this.optional ? '?' : ''
    }: ${this.value.toString()}`
  }
}

exports.default = ObjectTypeProperty
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9PYmplY3RUeXBlUHJvcGVydHkudHMiXSwibmFtZXMiOlsiT2JqZWN0VHlwZVByb3BlcnR5IiwiVHlwZSIsImNvbnN0cnVjdG9yIiwia2V5IiwidmFsdWUiLCJvcHRpb25hbCIsIkVycm9yIiwiY2xvbmUiLCJleGlzdHNPbiIsImlucHV0IiwiZXJyb3JzIiwidmFsaWRhdGlvbiIsInBhdGgiLCJ0YXJnZXRQYXRoIiwiY29uY2F0IiwiTWlzc2luZ1Byb3BlcnR5RXJyb3JJdGVtIiwiX19vYmplY3RUeXBlIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiYWNjZXB0cyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxrQkFBTixTQUdMQyxhQUhLLENBR0c7QUFPaEJDLEVBQUFBLFdBQVcsQ0FBQ0MsR0FBRCxFQUFTQyxLQUFULEVBQXlCQyxRQUF6QixFQUE0QztBQUNyRDs7QUFEcUQsc0NBTjVDLG9CQU00Qzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwwQ0FGN0IsSUFFNkI7O0FBRXJELFlBQVEsT0FBT0YsR0FBZjtBQUNFLFdBQUssUUFBTDtBQUNBLFdBQUssUUFBTDtBQUNBLFdBQUssUUFBTDtBQUNFOztBQUNGO0FBQ0UsY0FBTSxJQUFJRyxLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQU5KOztBQVFBLDRCQUFhRixLQUFiLEVBQW9CLE9BQXBCO0FBQ0EsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7QUFFREUsRUFBQUEsS0FBSyxHQUE2QjtBQUNoQyxXQUFPLElBQUlQLGtCQUFKLENBQXVCLEtBQUtHLEdBQTVCLEVBQWlDLEtBQUtDLEtBQXRDLEVBQTZDLEtBQUtDLFFBQWxELENBQVA7QUFDRDtBQUVEOzs7OztBQUdBRyxFQUFBQSxRQUFRLENBQUNDLEtBQUQsRUFBc0M7QUFDNUM7QUFDQSxVQUFNO0FBQUVOLE1BQUFBO0FBQUYsUUFBVSxJQUFoQjtBQUNBLFdBQU9BLEdBQUcsSUFBSU0sS0FBUCxLQUFpQixJQUF4QjtBQUNEOztBQUVELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VILEtBSEYsRUFJa0M7QUFDaEM7QUFDQSxVQUFNO0FBQUVKLE1BQUFBLFFBQUY7QUFBWUYsTUFBQUEsR0FBWjtBQUFpQkMsTUFBQUE7QUFBakIsUUFBMkIsSUFBakM7QUFDQSxVQUFNUyxVQUFVLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxDQUFZWCxHQUFaLENBQW5COztBQUNBLFFBQUksQ0FBQ0UsUUFBRCxJQUFhLENBQUMsS0FBS0csUUFBTCxDQUFjQyxLQUFkLENBQWxCLEVBQXdDO0FBQ3RDLFlBQU0sSUFBSU0saUNBQUosQ0FBNkJILElBQTdCLEVBQW1DSCxLQUFuQyxFQUEwQyxLQUFLTyxZQUEvQyxFQUE2RCxJQUE3RCxDQUFOO0FBQ0E7QUFDRDs7QUFDRCxVQUFNQyxNQUFNLEdBQUdSLEtBQUssQ0FBQ04sR0FBRCxDQUFwQjs7QUFDQSxRQUFJRSxRQUFRLElBQUlZLE1BQU0sS0FBS0MsU0FBM0IsRUFBc0M7QUFDcEM7QUFDRDs7QUFDRCxXQUFPZCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsVUFBYixFQUF5QkUsVUFBekIsRUFBcUNJLE1BQXJDLENBQVA7QUFDRDs7QUFFREUsRUFBQUEsT0FBTyxDQUFDVixLQUFELEVBQW9DO0FBQ3pDO0FBQ0EsVUFBTTtBQUFFSixNQUFBQSxRQUFGO0FBQVlGLE1BQUFBLEdBQVo7QUFBaUJDLE1BQUFBO0FBQWpCLFFBQTJCLElBQWpDOztBQUNBLFFBQUksQ0FBQ0MsUUFBRCxJQUFhLENBQUMsS0FBS0csUUFBTCxDQUFjQyxLQUFkLENBQWxCLEVBQXdDO0FBQ3RDLGFBQU8sS0FBUDtBQUNEOztBQUNELFVBQU1RLE1BQU0sR0FBR1IsS0FBSyxDQUFDTixHQUFELENBQXBCOztBQUVBLFFBQUlFLFFBQVEsSUFBSVksTUFBTSxLQUFLQyxTQUEzQixFQUFzQztBQUNwQyxhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPZCxLQUFLLENBQUNlLE9BQU4sQ0FBY0YsTUFBZCxDQUFQO0FBQ0Q7O0FBRURHLEVBQUFBLFFBQVEsR0FBVztBQUNqQixXQUFRLEdBQUUsOEJBQVksS0FBS2pCLEdBQWpCLENBQXNCLEdBQzlCLEtBQUtFLFFBQUwsR0FBZ0IsR0FBaEIsR0FBc0IsRUFDdkIsS0FBSSxLQUFLRCxLQUFMLENBQVdnQixRQUFYLEVBQXNCLEVBRjNCO0FBR0Q7O0FBMUVlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUsIHsgYXNzZXJ0SXNUeXBlIH0gZnJvbSAnLi9UeXBlJ1xuaW1wb3J0IFZhbGlkYXRpb24sIHsgSWRlbnRpZmllclBhdGggfSBmcm9tICcuLi9WYWxpZGF0aW9uJ1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4uL2Vycm9yUmVwb3J0aW5nL1J1bnRpbWVUeXBlRXJyb3JJdGVtJ1xuaW1wb3J0IE1pc3NpbmdQcm9wZXJ0eUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9NaXNzaW5nUHJvcGVydHlFcnJvckl0ZW0nXG5pbXBvcnQgeyBrZXlUb1N0cmluZyB9IGZyb20gJy4uL2Vycm9yUmVwb3J0aW5nL2tleVRvU3RyaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RUeXBlUHJvcGVydHk8XG4gIEsgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsXG4gIFZcbj4gZXh0ZW5kcyBUeXBlPFY+IHtcbiAgdHlwZU5hbWUgPSAnT2JqZWN0VHlwZVByb3BlcnR5J1xuICByZWFkb25seSBrZXk6IEtcbiAgcmVhZG9ubHkgdmFsdWU6IFR5cGU8Vj5cbiAgcmVhZG9ubHkgb3B0aW9uYWw6IGJvb2xlYW5cbiAgX19vYmplY3RUeXBlOiBUeXBlPGFueT4gPSBudWxsIGFzIGFueVxuXG4gIGNvbnN0cnVjdG9yKGtleTogSywgdmFsdWU6IFR5cGU8Vj4sIG9wdGlvbmFsOiBib29sZWFuKSB7XG4gICAgc3VwZXIoKVxuICAgIHN3aXRjaCAodHlwZW9mIGtleSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgbXVzdCBiZSBhIG51bWJlciwgc3RyaW5nIG9yIHN5bWJvbCcpXG4gICAgfVxuICAgIGFzc2VydElzVHlwZSh2YWx1ZSwgJ3ZhbHVlJylcbiAgICB0aGlzLmtleSA9IGtleVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMub3B0aW9uYWwgPSBvcHRpb25hbFxuICB9XG5cbiAgY2xvbmUoKTogT2JqZWN0VHlwZVByb3BlcnR5PEssIFY+IHtcbiAgICByZXR1cm4gbmV3IE9iamVjdFR5cGVQcm9wZXJ0eSh0aGlzLmtleSwgdGhpcy52YWx1ZSwgdGhpcy5vcHRpb25hbClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcHJvcGVydHkgZXhpc3RzIG9uIHRoZSBnaXZlbiBpbnB1dCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgKi9cbiAgZXhpc3RzT24oaW5wdXQ6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBib29sZWFuIHtcbiAgICAvLyBAZmxvd0lnbm9yZVxuICAgIGNvbnN0IHsga2V5IH0gPSB0aGlzXG4gICAgcmV0dXJuIGtleSBpbiBpbnB1dCA9PT0gdHJ1ZVxuICB9XG5cbiAgKmVycm9ycyhcbiAgICB2YWxpZGF0aW9uOiBWYWxpZGF0aW9uLFxuICAgIHBhdGg6IElkZW50aWZpZXJQYXRoLFxuICAgIGlucHV0OiBhbnlcbiAgKTogSXRlcmFibGU8UnVudGltZVR5cGVFcnJvckl0ZW0+IHtcbiAgICAvLyBAZmxvd0lnbm9yZVxuICAgIGNvbnN0IHsgb3B0aW9uYWwsIGtleSwgdmFsdWUgfSA9IHRoaXNcbiAgICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aC5jb25jYXQoa2V5KVxuICAgIGlmICghb3B0aW9uYWwgJiYgIXRoaXMuZXhpc3RzT24oaW5wdXQpKSB7XG4gICAgICB5aWVsZCBuZXcgTWlzc2luZ1Byb3BlcnR5RXJyb3JJdGVtKHBhdGgsIGlucHV0LCB0aGlzLl9fb2JqZWN0VHlwZSwgdGhpcylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dFtrZXldXG4gICAgaWYgKG9wdGlvbmFsICYmIHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgeWllbGQqIHZhbHVlLmVycm9ycyh2YWxpZGF0aW9uLCB0YXJnZXRQYXRoLCB0YXJnZXQpXG4gIH1cblxuICBhY2NlcHRzKGlucHV0OiBSZWNvcmQ8SywgVj4pOiBpbnB1dCBpcyBhbnkge1xuICAgIC8vIEBmbG93SWdub3JlXG4gICAgY29uc3QgeyBvcHRpb25hbCwga2V5LCB2YWx1ZSB9ID0gdGhpc1xuICAgIGlmICghb3B0aW9uYWwgJiYgIXRoaXMuZXhpc3RzT24oaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5wdXRba2V5XVxuXG4gICAgaWYgKG9wdGlvbmFsICYmIHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS5hY2NlcHRzKHRhcmdldClcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2tleVRvU3RyaW5nKHRoaXMua2V5KX0ke1xuICAgICAgdGhpcy5vcHRpb25hbCA/ICc/JyA6ICcnXG4gICAgfTogJHt0aGlzLnZhbHVlLnRvU3RyaW5nKCl9YFxuICB9XG59XG4iXX0=
