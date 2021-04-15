'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.stringifyPath = stringifyPath
exports.default = void 0

var _cyclic = require('./cyclic')

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

class Validation {
  // Tracks whether we're in validation of cyclic objects.
  constructor(input, prefix = '', path) {
    _defineProperty(this, 'input', void 0)

    _defineProperty(this, 'path', [])

    _defineProperty(this, 'prefix', void 0)

    _defineProperty(this, 'errors', [])

    _defineProperty(this, 'cyclic', new WeakMap())

    this.input = input
    this.prefix = prefix
    if (path) this.path.push(...path)
  }

  inCycle(type, input) {
    const tracked = this.cyclic.get(type)

    if (!tracked) {
      return false
    } else {
      return (0, _cyclic.weakSetHas)(tracked, input)
    }
  }

  startCycle(type, input) {
    let tracked = this.cyclic.get(type)

    if (!tracked) {
      tracked = new WeakSet()
      this.cyclic.set(type, tracked)
    }

    ;(0, _cyclic.weakSetAdd)(tracked, input)
  }

  endCycle(type, input) {
    const tracked = this.cyclic.get(type)

    if (tracked) {
      ;(0, _cyclic.weakSetDelete)(tracked, input)
    }
  }

  hasErrors() {
    return this.errors.length > 0
  }
}

exports.default = Validation
const validIdentifierOrAccessor = /^[$A-Z_][0-9A-Z_$[\].]*$/i

function stringifyPath(path) {
  if (!path.length) {
    return 'input'
  }

  const { length } = path
  const parts = new Array(length)

  for (let i = 0; i < length; i++) {
    const part = path[i]

    if (typeof part !== 'string' || !validIdentifierOrAccessor.test(part)) {
      parts[i] = `[${String(part)}]`
    } else if (i > 0) {
      parts[i] = `.${String(part)}`
    } else {
      parts[i] = String(part)
    }
  }

  return parts.join('')
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbIlZhbGlkYXRpb24iLCJjb25zdHJ1Y3RvciIsImlucHV0IiwicHJlZml4IiwicGF0aCIsIldlYWtNYXAiLCJwdXNoIiwiaW5DeWNsZSIsInR5cGUiLCJ0cmFja2VkIiwiY3ljbGljIiwiZ2V0Iiwic3RhcnRDeWNsZSIsIldlYWtTZXQiLCJzZXQiLCJlbmRDeWNsZSIsImhhc0Vycm9ycyIsImVycm9ycyIsImxlbmd0aCIsInZhbGlkSWRlbnRpZmllck9yQWNjZXNzb3IiLCJzdHJpbmdpZnlQYXRoIiwicGFydHMiLCJBcnJheSIsImkiLCJwYXJ0IiwidGVzdCIsIlN0cmluZyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFLZSxNQUFNQSxVQUFOLENBQWlCO0FBUzlCO0FBR0FDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFhQyxNQUFNLEdBQUcsRUFBdEIsRUFBMEJDLElBQTFCLEVBQWlEO0FBQUE7O0FBQUEsa0NBVDVCLEVBUzRCOztBQUFBOztBQUFBLG9DQUxsQixFQUtrQjs7QUFBQSxvQ0FGakIsSUFBSUMsT0FBSixFQUVpQjs7QUFDMUQsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsUUFBSUMsSUFBSixFQUFVLEtBQUtBLElBQUwsQ0FBVUUsSUFBVixDQUFlLEdBQUdGLElBQWxCO0FBQ1g7O0FBRURHLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBRCxFQUFrQk4sS0FBbEIsRUFBdUM7QUFDNUMsVUFBTU8sT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUMsR0FBWixDQUFnQkgsSUFBaEIsQ0FBaEI7O0FBQ0EsUUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWixhQUFPLEtBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLHdCQUFXQSxPQUFYLEVBQW9CUCxLQUFwQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRFUsRUFBQUEsVUFBVSxDQUFDSixJQUFELEVBQWtCTixLQUFsQixFQUFvQztBQUM1QyxRQUFJTyxPQUFPLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCSCxJQUFoQixDQUFkOztBQUNBLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1pBLE1BQUFBLE9BQU8sR0FBRyxJQUFJSSxPQUFKLEVBQVY7QUFDQSxXQUFLSCxNQUFMLENBQVlJLEdBQVosQ0FBZ0JOLElBQWhCLEVBQXNCQyxPQUF0QjtBQUNEOztBQUNELDRCQUFXQSxPQUFYLEVBQW9CUCxLQUFwQjtBQUNEOztBQUVEYSxFQUFBQSxRQUFRLENBQUNQLElBQUQsRUFBa0JOLEtBQWxCLEVBQW9DO0FBQzFDLFVBQU1PLE9BQU8sR0FBRyxLQUFLQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0JILElBQWhCLENBQWhCOztBQUNBLFFBQUlDLE9BQUosRUFBYTtBQUNYLGlDQUFjQSxPQUFkLEVBQXVCUCxLQUF2QjtBQUNEO0FBQ0Y7O0FBRURjLEVBQUFBLFNBQVMsR0FBWTtBQUNuQixXQUFPLEtBQUtDLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUE1QjtBQUNEOztBQTdDNkI7OztBQWdEaEMsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDOztBQUVPLFNBQVNDLGFBQVQsQ0FBdUJoQixJQUF2QixFQUFxRDtBQUMxRCxNQUFJLENBQUNBLElBQUksQ0FBQ2MsTUFBVixFQUFrQjtBQUNoQixXQUFPLE9BQVA7QUFDRDs7QUFDRCxRQUFNO0FBQUVBLElBQUFBO0FBQUYsTUFBYWQsSUFBbkI7QUFDQSxRQUFNaUIsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVUosTUFBVixDQUFkOztBQUNBLE9BQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsTUFBcEIsRUFBNEJLLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsVUFBTUMsSUFBSSxHQUFHcEIsSUFBSSxDQUFDbUIsQ0FBRCxDQUFqQjs7QUFDQSxRQUFJLE9BQU9DLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0wseUJBQXlCLENBQUNNLElBQTFCLENBQStCRCxJQUEvQixDQUFqQyxFQUF1RTtBQUNyRUgsTUFBQUEsS0FBSyxDQUFDRSxDQUFELENBQUwsR0FBWSxJQUFHRyxNQUFNLENBQUNGLElBQUQsQ0FBTyxHQUE1QjtBQUNELEtBRkQsTUFFTyxJQUFJRCxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ2hCRixNQUFBQSxLQUFLLENBQUNFLENBQUQsQ0FBTCxHQUFZLElBQUdHLE1BQU0sQ0FBQ0YsSUFBRCxDQUFPLEVBQTVCO0FBQ0QsS0FGTSxNQUVBO0FBQ0xILE1BQUFBLEtBQUssQ0FBQ0UsQ0FBRCxDQUFMLEdBQVdHLE1BQU0sQ0FBQ0YsSUFBRCxDQUFqQjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0gsS0FBSyxDQUFDTSxJQUFOLENBQVcsRUFBWCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tICcuL3R5cGVzL1R5cGUnXG5pbXBvcnQgeyB3ZWFrU2V0QWRkLCB3ZWFrU2V0RGVsZXRlLCB3ZWFrU2V0SGFzIH0gZnJvbSAnLi9jeWNsaWMnXG5pbXBvcnQgUnVudGltZVR5cGVFcnJvckl0ZW0gZnJvbSAnLi9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9ySXRlbSdcblxuZXhwb3J0IHR5cGUgSWRlbnRpZmllclBhdGggPSBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2w+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb24ge1xuICByZWFkb25seSBpbnB1dDogYW55XG5cbiAgcmVhZG9ubHkgcGF0aDogSWRlbnRpZmllclBhdGggPSBbXVxuXG4gIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nXG5cbiAgcmVhZG9ubHkgZXJyb3JzOiBSdW50aW1lVHlwZUVycm9ySXRlbVtdID0gW11cblxuICAvLyBUcmFja3Mgd2hldGhlciB3ZSdyZSBpbiB2YWxpZGF0aW9uIG9mIGN5Y2xpYyBvYmplY3RzLlxuICBjeWNsaWM6IFdlYWtNYXA8VHlwZTxhbnk+LCBXZWFrU2V0PGFueT4+ID0gbmV3IFdlYWtNYXAoKVxuXG4gIGNvbnN0cnVjdG9yKGlucHV0OiBhbnksIHByZWZpeCA9ICcnLCBwYXRoPzogSWRlbnRpZmllclBhdGgpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXRcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeFxuICAgIGlmIChwYXRoKSB0aGlzLnBhdGgucHVzaCguLi5wYXRoKVxuICB9XG5cbiAgaW5DeWNsZSh0eXBlOiBUeXBlPGFueT4sIGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCB0cmFja2VkID0gdGhpcy5jeWNsaWMuZ2V0KHR5cGUpXG4gICAgaWYgKCF0cmFja2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdlYWtTZXRIYXModHJhY2tlZCwgaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRDeWNsZSh0eXBlOiBUeXBlPGFueT4sIGlucHV0OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgdHJhY2tlZCA9IHRoaXMuY3ljbGljLmdldCh0eXBlKVxuICAgIGlmICghdHJhY2tlZCkge1xuICAgICAgdHJhY2tlZCA9IG5ldyBXZWFrU2V0KClcbiAgICAgIHRoaXMuY3ljbGljLnNldCh0eXBlLCB0cmFja2VkKVxuICAgIH1cbiAgICB3ZWFrU2V0QWRkKHRyYWNrZWQsIGlucHV0KVxuICB9XG5cbiAgZW5kQ3ljbGUodHlwZTogVHlwZTxhbnk+LCBpbnB1dDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdHJhY2tlZCA9IHRoaXMuY3ljbGljLmdldCh0eXBlKVxuICAgIGlmICh0cmFja2VkKSB7XG4gICAgICB3ZWFrU2V0RGVsZXRlKHRyYWNrZWQsIGlucHV0KVxuICAgIH1cbiAgfVxuXG4gIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID4gMFxuICB9XG59XG5cbmNvbnN0IHZhbGlkSWRlbnRpZmllck9yQWNjZXNzb3IgPSAvXlskQS1aX11bMC05QS1aXyRbXFxdLl0qJC9pXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlQYXRoKHBhdGg6IElkZW50aWZpZXJQYXRoKTogc3RyaW5nIHtcbiAgaWYgKCFwYXRoLmxlbmd0aCkge1xuICAgIHJldHVybiAnaW5wdXQnXG4gIH1cbiAgY29uc3QgeyBsZW5ndGggfSA9IHBhdGhcbiAgY29uc3QgcGFydHMgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFydCA9IHBhdGhbaV1cbiAgICBpZiAodHlwZW9mIHBhcnQgIT09ICdzdHJpbmcnIHx8ICF2YWxpZElkZW50aWZpZXJPckFjY2Vzc29yLnRlc3QocGFydCkpIHtcbiAgICAgIHBhcnRzW2ldID0gYFske1N0cmluZyhwYXJ0KX1dYFxuICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgIHBhcnRzW2ldID0gYC4ke1N0cmluZyhwYXJ0KX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRzW2ldID0gU3RyaW5nKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIl19
