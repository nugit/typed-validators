'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _InvalidLengthErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidLengthErrorItem')
)

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
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

class TupleType extends _Type.default {
  constructor(types) {
    super()

    _defineProperty(this, 'typeName', 'TupleType')

    _defineProperty(this, 'types', void 0)

    for (let i = 0; i < types.length; i++) {
      ;(0, _Type.assertIsType)(types[i], `types[${i}]`)
    }

    this.types = types
  }

  *errors(validation, path, input) {
    const { types } = this

    if (!Array.isArray(input)) {
      yield new _InvalidTypeErrorItem.default(path, input, this)
      return
    }

    if (input.length !== types.length) {
      yield new _InvalidLengthErrorItem.default(path, input, this, types.length)
    }

    for (let i = 0; i < Math.min(input.length, types.length); i++) {
      yield* types[i].errors(validation, path.concat(i), input[i])
    }
  }

  accepts(input) {
    const { types } = this
    const { length } = types

    if (!Array.isArray(input) || input.length !== length) {
      return false
    }

    for (let i = 0; i < length; i++) {
      const type = types[i]

      if (!type.accepts(input[i])) {
        return false
      }
    }

    return true
  }

  get acceptsSomeCompositeTypes() {
    return true
  }

  toString(options) {
    if (
      options === null || options === void 0 ? void 0 : options.formatForMustBe
    )
      return `of type ${this.toString()}`
    return `[${this.types.join(', ')}]`
  }
}

exports.default = TupleType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9UdXBsZVR5cGUudHMiXSwibmFtZXMiOlsiVHVwbGVUeXBlIiwiVHlwZSIsImNvbnN0cnVjdG9yIiwidHlwZXMiLCJpIiwibGVuZ3RoIiwiZXJyb3JzIiwidmFsaWRhdGlvbiIsInBhdGgiLCJpbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsIkludmFsaWRUeXBlRXJyb3JJdGVtIiwiSW52YWxpZExlbmd0aEVycm9ySXRlbSIsIk1hdGgiLCJtaW4iLCJjb25jYXQiLCJhY2NlcHRzIiwidHlwZSIsImFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMiLCJ0b1N0cmluZyIsIm9wdGlvbnMiLCJmb3JtYXRGb3JNdXN0QmUiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxTQUFOLFNBQXlDQyxhQUF6QyxDQUFpRDtBQUk5REMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQWdEO0FBQ3pEOztBQUR5RCxzQ0FIaEQsV0FHZ0Q7O0FBQUE7O0FBRXpELFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyw4QkFBYUQsS0FBSyxDQUFDQyxDQUFELENBQWxCLEVBQXdCLFNBQVFBLENBQUUsR0FBbEM7QUFDRDs7QUFDRCxTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRCxHQUFDRyxNQUFELENBQ0VDLFVBREYsRUFFRUMsSUFGRixFQUdFQyxLQUhGLEVBSWtDO0FBQ2hDLFVBQU07QUFBRU4sTUFBQUE7QUFBRixRQUFZLElBQWxCOztBQUNBLFFBQUksQ0FBQ08sS0FBSyxDQUFDQyxPQUFOLENBQWNGLEtBQWQsQ0FBTCxFQUEyQjtBQUN6QixZQUFNLElBQUlHLDZCQUFKLENBQXlCSixJQUF6QixFQUErQkMsS0FBL0IsRUFBc0MsSUFBdEMsQ0FBTjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUEsS0FBSyxDQUFDSixNQUFOLEtBQWlCRixLQUFLLENBQUNFLE1BQTNCLEVBQW1DO0FBQ2pDLFlBQU0sSUFBSVEsK0JBQUosQ0FBMkJMLElBQTNCLEVBQWlDQyxLQUFqQyxFQUF3QyxJQUF4QyxFQUE4Q04sS0FBSyxDQUFDRSxNQUFwRCxDQUFOO0FBQ0Q7O0FBQ0QsU0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVSxJQUFJLENBQUNDLEdBQUwsQ0FBU04sS0FBSyxDQUFDSixNQUFmLEVBQXVCRixLQUFLLENBQUNFLE1BQTdCLENBQXBCLEVBQTBERCxDQUFDLEVBQTNELEVBQStEO0FBQzdELGFBQVFELEtBQUssQ0FBQ0MsQ0FBRCxDQUFOLENBQXdCRSxNQUF4QixDQUNMQyxVQURLLEVBRUxDLElBQUksQ0FBQ1EsTUFBTCxDQUFZWixDQUFaLENBRkssRUFHTEssS0FBSyxDQUFDTCxDQUFELENBSEEsQ0FBUDtBQUtEO0FBQ0Y7O0FBRURhLEVBQUFBLE9BQU8sQ0FBQ1IsS0FBRCxFQUF5QjtBQUM5QixVQUFNO0FBQUVOLE1BQUFBO0FBQUYsUUFBWSxJQUFsQjtBQUNBLFVBQU07QUFBRUUsTUFBQUE7QUFBRixRQUFhRixLQUFuQjs7QUFFQSxRQUFJLENBQUNPLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUQsSUFBeUJBLEtBQUssQ0FBQ0osTUFBTixLQUFpQkEsTUFBOUMsRUFBc0Q7QUFDcEQsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxNQUFwQixFQUE0QkQsQ0FBQyxFQUE3QixFQUFpQztBQUMvQixZQUFNYyxJQUFJLEdBQUdmLEtBQUssQ0FBQ0MsQ0FBRCxDQUFsQjs7QUFDQSxVQUFJLENBQUNjLElBQUksQ0FBQ0QsT0FBTCxDQUFhUixLQUFLLENBQUNMLENBQUQsQ0FBbEIsQ0FBTCxFQUE2QjtBQUMzQixlQUFPLEtBQVA7QUFDRDtBQUNGOztBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUllLHlCQUFKLEdBQXlDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNEOztBQUVEQyxFQUFBQSxRQUFRLENBQUNDLE9BQUQsRUFBa0Q7QUFDeEQsUUFBSUEsT0FBSixhQUFJQSxPQUFKLHVCQUFJQSxPQUFPLENBQUVDLGVBQWIsRUFBOEIsT0FBUSxXQUFVLEtBQUtGLFFBQUwsRUFBZ0IsRUFBbEM7QUFDOUIsV0FBUSxJQUFHLEtBQUtqQixLQUFMLENBQVdvQixJQUFYLENBQWdCLElBQWhCLENBQXNCLEdBQWpDO0FBQ0Q7O0FBekQ2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlLCB7IGFzc2VydElzVHlwZSB9IGZyb20gJy4vVHlwZSdcbmltcG9ydCBWYWxpZGF0aW9uLCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbSdcbmltcG9ydCBJbnZhbGlkTGVuZ3RoRXJyb3JJdGVtIGZyb20gJy4uL2Vycm9yUmVwb3J0aW5nL0ludmFsaWRMZW5ndGhFcnJvckl0ZW0nXG5pbXBvcnQgSW52YWxpZFR5cGVFcnJvckl0ZW0gZnJvbSAnLi4vZXJyb3JSZXBvcnRpbmcvSW52YWxpZFR5cGVFcnJvckl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1cGxlVHlwZTxUIGV4dGVuZHMgYW55W10+IGV4dGVuZHMgVHlwZTxUPiB7XG4gIHR5cGVOYW1lID0gJ1R1cGxlVHlwZSdcbiAgcmVhZG9ubHkgdHlwZXM6IHsgW0luZGV4IGluIGtleW9mIFRdOiBUeXBlPFRbSW5kZXhdPiB9XG5cbiAgY29uc3RydWN0b3IodHlwZXM6IHsgW0luZGV4IGluIGtleW9mIFRdOiBUeXBlPFRbSW5kZXhdPiB9KSB7XG4gICAgc3VwZXIoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFzc2VydElzVHlwZSh0eXBlc1tpXSwgYHR5cGVzWyR7aX1dYClcbiAgICB9XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzXG4gIH1cblxuICAqZXJyb3JzKFxuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICApOiBJdGVyYWJsZTxSdW50aW1lVHlwZUVycm9ySXRlbT4ge1xuICAgIGNvbnN0IHsgdHlwZXMgfSA9IHRoaXNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICB5aWVsZCBuZXcgSW52YWxpZFR5cGVFcnJvckl0ZW0ocGF0aCwgaW5wdXQsIHRoaXMpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGlucHV0Lmxlbmd0aCAhPT0gdHlwZXMubGVuZ3RoKSB7XG4gICAgICB5aWVsZCBuZXcgSW52YWxpZExlbmd0aEVycm9ySXRlbShwYXRoLCBpbnB1dCwgdGhpcywgdHlwZXMubGVuZ3RoKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGlucHV0Lmxlbmd0aCwgdHlwZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICB5aWVsZCogKHR5cGVzW2ldIGFzIFR5cGU8YW55PikuZXJyb3JzKFxuICAgICAgICB2YWxpZGF0aW9uLFxuICAgICAgICBwYXRoLmNvbmNhdChpKSxcbiAgICAgICAgaW5wdXRbaV1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhY2NlcHRzKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBUIHtcbiAgICBjb25zdCB7IHR5cGVzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHR5cGVzXG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpIHx8IGlucHV0Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdHlwZSA9IHR5cGVzW2ldIGFzIFR5cGU8YW55PlxuICAgICAgaWYgKCF0eXBlLmFjY2VwdHMoaW5wdXRbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZ2V0IGFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHRvU3RyaW5nKG9wdGlvbnM/OiB7IGZvcm1hdEZvck11c3RCZT86IGJvb2xlYW4gfSk6IHN0cmluZyB7XG4gICAgaWYgKG9wdGlvbnM/LmZvcm1hdEZvck11c3RCZSkgcmV0dXJuIGBvZiB0eXBlICR7dGhpcy50b1N0cmluZygpfWBcbiAgICByZXR1cm4gYFske3RoaXMudHlwZXMuam9pbignLCAnKX1dYFxuICB9XG59XG4iXX0=
