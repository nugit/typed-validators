'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireWildcard(require('./Type'))

var _ObjectType = _interopRequireDefault(require('./ObjectType'))

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

class MergedObjectType extends _Type.default {
  constructor(objects, exact = true) {
    super()

    _defineProperty(this, 'typeName', 'MergedObjectType')

    _defineProperty(this, 'objects', void 0)

    _defineProperty(this, 'exact', void 0)

    _defineProperty(this, 'resolved', void 0)

    for (let i = 0; i < objects.length; i++) {
      ;(0, _Type.assertIsType)(objects[i], `objects[${i}]`)
    }

    this.objects = objects
    this.exact = exact
  }

  resolveType() {
    if (!this.resolved) {
      const properties = {}

      for (const object of this.objects) {
        const resolved = object.resolveType()

        if (!(resolved instanceof _ObjectType.default)) {
          throw new Error(
            `a merged type didn't resolve to an ObjectType: ${object.toString()}${
              resolved !== object ? ` (resolved to ${resolved.toString()})` : ''
            }`
          )
        }

        for (const property of resolved.properties) {
          properties[property.key] = property.clone()
        }
      }

      this.resolved = new _ObjectType.default(
        Object.values(properties),
        this.exact
      )
    }

    return this.resolved
  }

  *errors(validation, path, input) {
    yield* this.resolveType().errors(validation, path, input)
  }

  accepts(input) {
    return this.resolveType().accepts(input)
  }

  get acceptsSomeCompositeTypes() {
    return true
  }

  toString(options) {
    return this.resolveType().toString(options)
  }
}

exports.default = MergedObjectType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9NZXJnZWRPYmplY3RUeXBlLnRzIl0sIm5hbWVzIjpbIk1lcmdlZE9iamVjdFR5cGUiLCJUeXBlIiwiY29uc3RydWN0b3IiLCJvYmplY3RzIiwiZXhhY3QiLCJpIiwibGVuZ3RoIiwicmVzb2x2ZVR5cGUiLCJyZXNvbHZlZCIsInByb3BlcnRpZXMiLCJvYmplY3QiLCJPYmplY3RUeXBlIiwiRXJyb3IiLCJ0b1N0cmluZyIsInByb3BlcnR5Iiwia2V5IiwiY2xvbmUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uIiwicGF0aCIsImlucHV0IiwiYWNjZXB0cyIsImFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFLZSxNQUFNQSxnQkFBTixTQUE2Q0MsYUFBN0MsQ0FBcUQ7QUFNbEVDLEVBQUFBLFdBQVcsQ0FBQ0MsT0FBRCxFQUFxQkMsS0FBSyxHQUFHLElBQTdCLEVBQW1DO0FBQzVDOztBQUQ0QyxzQ0FMbkMsa0JBS21DOztBQUFBOztBQUFBOztBQUFBOztBQUU1QyxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0csTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDdkMsOEJBQWFGLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQixFQUEwQixXQUFVQSxDQUFFLEdBQXRDO0FBQ0Q7O0FBQ0QsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBRURHLEVBQUFBLFdBQVcsR0FBWTtBQUNyQixRQUFJLENBQUMsS0FBS0MsUUFBVixFQUFvQjtBQUNsQixZQUFNQyxVQUFxRCxHQUFHLEVBQTlEOztBQUNBLFdBQUssTUFBTUMsTUFBWCxJQUFxQixLQUFLUCxPQUExQixFQUFtQztBQUNqQyxjQUFNSyxRQUFRLEdBQUdFLE1BQU0sQ0FBQ0gsV0FBUCxFQUFqQjs7QUFDQSxZQUFJLEVBQUVDLFFBQVEsWUFBWUcsbUJBQXRCLENBQUosRUFBdUM7QUFDckMsZ0JBQU0sSUFBSUMsS0FBSixDQUNILGtEQUFpREYsTUFBTSxDQUFDRyxRQUFQLEVBQWtCLEdBQ2xFTCxRQUFRLEtBQUtFLE1BQWIsR0FBdUIsaUJBQWdCRixRQUFRLENBQUNLLFFBQVQsRUFBb0IsR0FBM0QsR0FBZ0UsRUFDakUsRUFIRyxDQUFOO0FBS0Q7O0FBQ0QsYUFBSyxNQUFNQyxRQUFYLElBQXVCTixRQUFRLENBQUNDLFVBQWhDLEVBQTRDO0FBQzFDQSxVQUFBQSxVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsR0FBVixDQUFWLEdBQWtDRCxRQUFRLENBQUNFLEtBQVQsRUFBbEM7QUFDRDtBQUNGOztBQUNELFdBQUtSLFFBQUwsR0FBZ0IsSUFBSUcsbUJBQUosQ0FBZU0sTUFBTSxDQUFDQyxNQUFQLENBQWNULFVBQWQsQ0FBZixFQUEwQyxLQUFLTCxLQUEvQyxDQUFoQjtBQUNEOztBQUNELFdBQU8sS0FBS0ksUUFBWjtBQUNEOztBQUVELEdBQUNXLE1BQUQsQ0FDRUMsVUFERixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJa0M7QUFDaEMsV0FBTyxLQUFLZixXQUFMLEdBQW1CWSxNQUFuQixDQUEwQkMsVUFBMUIsRUFBc0NDLElBQXRDLEVBQTRDQyxLQUE1QyxDQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLE9BQU8sQ0FBQ0QsS0FBRCxFQUF5QjtBQUM5QixXQUFPLEtBQUtmLFdBQUwsR0FBbUJnQixPQUFuQixDQUEyQkQsS0FBM0IsQ0FBUDtBQUNEOztBQUVELE1BQUlFLHlCQUFKLEdBQXlDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNEOztBQUVEWCxFQUFBQSxRQUFRLENBQUNZLE9BQUQsRUFBa0Q7QUFDeEQsV0FBTyxLQUFLbEIsV0FBTCxHQUFtQk0sUUFBbkIsQ0FBNEJZLE9BQTVCLENBQVA7QUFDRDs7QUF0RGlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUsIHsgYXNzZXJ0SXNUeXBlIH0gZnJvbSAnLi9UeXBlJ1xuaW1wb3J0IE9iamVjdFR5cGUgZnJvbSAnLi9PYmplY3RUeXBlJ1xuaW1wb3J0IE9iamVjdFR5cGVQcm9wZXJ0eSBmcm9tICcuL09iamVjdFR5cGVQcm9wZXJ0eSdcbmltcG9ydCBWYWxpZGF0aW9uLCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVyZ2VkT2JqZWN0VHlwZTxUIGV4dGVuZHMge30+IGV4dGVuZHMgVHlwZTxUPiB7XG4gIHR5cGVOYW1lID0gJ01lcmdlZE9iamVjdFR5cGUnXG4gIHJlYWRvbmx5IG9iamVjdHM6IFR5cGU8VD5bXVxuICByZWFkb25seSBleGFjdDogYm9vbGVhblxuICBwcml2YXRlIHJlc29sdmVkOiBPYmplY3RUeXBlPFQ+IHwgdW5kZWZpbmVkXG5cbiAgY29uc3RydWN0b3Iob2JqZWN0czogVHlwZTxUPltdLCBleGFjdCA9IHRydWUpIHtcbiAgICBzdXBlcigpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhc3NlcnRJc1R5cGUob2JqZWN0c1tpXSwgYG9iamVjdHNbJHtpfV1gKVxuICAgIH1cbiAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RzXG4gICAgdGhpcy5leGFjdCA9IGV4YWN0XG4gIH1cblxuICByZXNvbHZlVHlwZSgpOiBUeXBlPFQ+IHtcbiAgICBpZiAoIXRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXM6IFJlY29yZDxhbnksIE9iamVjdFR5cGVQcm9wZXJ0eTxhbnksIGFueT4+ID0ge31cbiAgICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIHRoaXMub2JqZWN0cykge1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG9iamVjdC5yZXNvbHZlVHlwZSgpXG4gICAgICAgIGlmICghKHJlc29sdmVkIGluc3RhbmNlb2YgT2JqZWN0VHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgYSBtZXJnZWQgdHlwZSBkaWRuJ3QgcmVzb2x2ZSB0byBhbiBPYmplY3RUeXBlOiAke29iamVjdC50b1N0cmluZygpfSR7XG4gICAgICAgICAgICAgIHJlc29sdmVkICE9PSBvYmplY3QgPyBgIChyZXNvbHZlZCB0byAke3Jlc29sdmVkLnRvU3RyaW5nKCl9KWAgOiAnJ1xuICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiByZXNvbHZlZC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgcHJvcGVydGllc1twcm9wZXJ0eS5rZXkgYXMgYW55XSA9IHByb3BlcnR5LmNsb25lKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZXNvbHZlZCA9IG5ldyBPYmplY3RUeXBlKE9iamVjdC52YWx1ZXMocHJvcGVydGllcyksIHRoaXMuZXhhY3QpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlc29sdmVkXG4gIH1cblxuICAqZXJyb3JzKFxuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICApOiBJdGVyYWJsZTxSdW50aW1lVHlwZUVycm9ySXRlbT4ge1xuICAgIHlpZWxkKiB0aGlzLnJlc29sdmVUeXBlKCkuZXJyb3JzKHZhbGlkYXRpb24sIHBhdGgsIGlucHV0KVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgVCB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVR5cGUoKS5hY2NlcHRzKGlucHV0KVxuICB9XG5cbiAgZ2V0IGFjY2VwdHNTb21lQ29tcG9zaXRlVHlwZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHRvU3RyaW5nKG9wdGlvbnM/OiB7IGZvcm1hdEZvck11c3RCZT86IGJvb2xlYW4gfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVR5cGUoKS50b1N0cmluZyhvcHRpb25zKVxuICB9XG59XG4iXX0=
