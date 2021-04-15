'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _typeConstraints = require('../typeConstraints')

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

class TypeAlias extends _Type.default {
  constructor(name, type) {
    super()

    _defineProperty(this, 'typeName', 'TypeAlias')

    _defineProperty(this, 'name', void 0)

    _defineProperty(this, 'type', void 0)

    _defineProperty(this, 'constraints', [])

    ;(0, _Type.assertIsType)(type, 'type')
    this.name = name
    this.type = type
  }

  resolveType() {
    return this.type.resolveType()
  }

  addConstraint(...constraints) {
    this.constraints.push(...constraints)
    return this
  }

  get hasConstraints() {
    return this.constraints.length > 0
  }

  *errors(validation, path, input) {
    const { type } = this
    let hasErrors = false

    for (const error of type.errors(validation, path, input)) {
      hasErrors = true
      yield error
    }

    if (!hasErrors) {
      yield* (0, _typeConstraints.collectConstraintErrors)(
        this,
        validation,
        path,
        input
      )
    }
  }

  accepts(input) {
    const { type } = this

    if (!type.accepts(input)) {
      return false
    } else if (!(0, _typeConstraints.constraintsAccept)(this, input)) {
      return false
    } else {
      return true
    }
  }

  get acceptsSomeCompositeTypes() {
    return this.type.acceptsSomeCompositeTypes
  }

  toString() {
    return this.name
  }
}

exports.default = TypeAlias
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9UeXBlQWxpYXMudHMiXSwibmFtZXMiOlsiVHlwZUFsaWFzIiwiVHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInR5cGUiLCJyZXNvbHZlVHlwZSIsImFkZENvbnN0cmFpbnQiLCJjb25zdHJhaW50cyIsInB1c2giLCJoYXNDb25zdHJhaW50cyIsImxlbmd0aCIsImVycm9ycyIsInZhbGlkYXRpb24iLCJwYXRoIiwiaW5wdXQiLCJoYXNFcnJvcnMiLCJlcnJvciIsImFjY2VwdHMiLCJhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFPZSxNQUFNQSxTQUFOLFNBQTJCQyxhQUEzQixDQUFtQztBQU1oREMsRUFBQUEsV0FBVyxDQUFDQyxJQUFELEVBQWVDLElBQWYsRUFBOEI7QUFDdkM7O0FBRHVDLHNDQUw5QixXQUs4Qjs7QUFBQTs7QUFBQTs7QUFBQSx5Q0FGRyxFQUVIOztBQUV2Qyw0QkFBYUEsSUFBYixFQUFtQixNQUFuQjtBQUNBLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUVEQyxFQUFBQSxXQUFXLEdBQVk7QUFDckIsV0FBTyxLQUFLRCxJQUFMLENBQVVDLFdBQVYsRUFBUDtBQUNEOztBQUVEQyxFQUFBQSxhQUFhLENBQUMsR0FBR0MsV0FBSixFQUE0QztBQUN2RCxTQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixHQUFHRCxXQUF6QjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUlFLGNBQUosR0FBOEI7QUFDNUIsV0FBTyxLQUFLRixXQUFMLENBQWlCRyxNQUFqQixHQUEwQixDQUFqQztBQUNEOztBQUVELEdBQUNDLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEMsVUFBTTtBQUFFVixNQUFBQTtBQUFGLFFBQVcsSUFBakI7QUFDQSxRQUFJVyxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsU0FBSyxNQUFNQyxLQUFYLElBQW9CWixJQUFJLENBQUNPLE1BQUwsQ0FBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLENBQXBCLEVBQTBEO0FBQ3hEQyxNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNBLFlBQU1DLEtBQU47QUFDRDs7QUFDRCxRQUFJLENBQUNELFNBQUwsRUFBZ0I7QUFDZCxhQUFPLDhDQUF3QixJQUF4QixFQUE4QkgsVUFBOUIsRUFBMENDLElBQTFDLEVBQWdEQyxLQUFoRCxDQUFQO0FBQ0Q7QUFDRjs7QUFFREcsRUFBQUEsT0FBTyxDQUFDSCxLQUFELEVBQXlCO0FBQzlCLFVBQU07QUFBRVYsTUFBQUE7QUFBRixRQUFXLElBQWpCOztBQUNBLFFBQUksQ0FBQ0EsSUFBSSxDQUFDYSxPQUFMLENBQWFILEtBQWIsQ0FBTCxFQUEwQjtBQUN4QixhQUFPLEtBQVA7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDLHdDQUFrQixJQUFsQixFQUF3QkEsS0FBeEIsQ0FBTCxFQUFxQztBQUMxQyxhQUFPLEtBQVA7QUFDRCxLQUZNLE1BRUE7QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELE1BQUlJLHlCQUFKLEdBQXlDO0FBQ3ZDLFdBQU8sS0FBS2QsSUFBTCxDQUFVYyx5QkFBakI7QUFDRDs7QUFFREMsRUFBQUEsUUFBUSxHQUFXO0FBQ2pCLFdBQU8sS0FBS2hCLElBQVo7QUFDRDs7QUEzRCtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUsIHsgYXNzZXJ0SXNUeXBlIH0gZnJvbSAnLi9UeXBlJ1xuaW1wb3J0IFZhbGlkYXRpb24sIHsgSWRlbnRpZmllclBhdGggfSBmcm9tICcuLi9WYWxpZGF0aW9uJ1xuaW1wb3J0IHtcbiAgY29sbGVjdENvbnN0cmFpbnRFcnJvcnMsXG4gIGNvbnN0cmFpbnRzQWNjZXB0LFxuICBUeXBlQ29uc3RyYWludCxcbn0gZnJvbSAnLi4vdHlwZUNvbnN0cmFpbnRzJ1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4uL2Vycm9yUmVwb3J0aW5nL1J1bnRpbWVUeXBlRXJyb3JJdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlQWxpYXM8VD4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnVHlwZUFsaWFzJ1xuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgdHlwZTogVHlwZTxUPlxuICByZWFkb25seSBjb25zdHJhaW50czogVHlwZUNvbnN0cmFpbnQ8VD5bXSA9IFtdXG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBUeXBlPFQ+KSB7XG4gICAgc3VwZXIoKVxuICAgIGFzc2VydElzVHlwZSh0eXBlLCAndHlwZScpXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgfVxuXG4gIHJlc29sdmVUeXBlKCk6IFR5cGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUucmVzb2x2ZVR5cGUoKVxuICB9XG5cbiAgYWRkQ29uc3RyYWludCguLi5jb25zdHJhaW50czogVHlwZUNvbnN0cmFpbnQ8VD5bXSk6IHRoaXMge1xuICAgIHRoaXMuY29uc3RyYWludHMucHVzaCguLi5jb25zdHJhaW50cylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0IGhhc0NvbnN0cmFpbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aCA+IDBcbiAgfVxuXG4gICplcnJvcnMoXG4gICAgdmFsaWRhdGlvbjogVmFsaWRhdGlvbixcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICBpbnB1dDogYW55XG4gICk6IEl0ZXJhYmxlPFJ1bnRpbWVUeXBlRXJyb3JJdGVtPiB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzXG4gICAgbGV0IGhhc0Vycm9ycyA9IGZhbHNlXG4gICAgZm9yIChjb25zdCBlcnJvciBvZiB0eXBlLmVycm9ycyh2YWxpZGF0aW9uLCBwYXRoLCBpbnB1dCkpIHtcbiAgICAgIGhhc0Vycm9ycyA9IHRydWVcbiAgICAgIHlpZWxkIGVycm9yXG4gICAgfVxuICAgIGlmICghaGFzRXJyb3JzKSB7XG4gICAgICB5aWVsZCogY29sbGVjdENvbnN0cmFpbnRFcnJvcnModGhpcywgdmFsaWRhdGlvbiwgcGF0aCwgaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgVCB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzXG4gICAgaWYgKCF0eXBlLmFjY2VwdHMoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKCFjb25zdHJhaW50c0FjY2VwdCh0aGlzLCBpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUuYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlc1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cbn1cbiJdfQ==
