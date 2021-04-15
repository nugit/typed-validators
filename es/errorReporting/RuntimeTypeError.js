'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _stringifyValue = _interopRequireDefault(require('./stringifyValue'))

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

const delimiter = '\n\n-------------------------------------------------\n\n'

class RuntimeTypeError extends TypeError {
  constructor(errors) {
    super()

    _defineProperty(this, 'name', 'RuntimeTypeError')

    _defineProperty(this, 'errors', void 0)

    this.errors = errors
  }

  get message() {
    return this.formatMessage()
  }

  formatMessage({ limit = 10000 } = {}) {
    const result = []
    let remaining =
      limit - delimiter.length + `... ${this.errors.length} more errors`.length

    for (let i = 0; i < this.errors.length; i++) {
      const error = this.errors[i]
      if (result.length) remaining -= delimiter.length
      const stringified = error.toString()
      remaining -= stringified.length
      const actualValuePart = `\n\nActual Value: ${(0, _stringifyValue.default)(
        error.valueAtPath,
        {
          limit: remaining - `\n\nActual Value: `.length,
        }
      )}`
      remaining -= actualValuePart.length

      if (remaining < 0 && result.length) {
        result.push(`... ${this.errors.length - i} more errors`)
        break
      }

      result.push(remaining < 0 ? stringified : stringified + actualValuePart)
    }

    return result.join(delimiter)
  }
}

exports.default = RuntimeTypeError
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9SdW50aW1lVHlwZUVycm9yLnRzIl0sIm5hbWVzIjpbImRlbGltaXRlciIsIlJ1bnRpbWVUeXBlRXJyb3IiLCJUeXBlRXJyb3IiLCJjb25zdHJ1Y3RvciIsImVycm9ycyIsIm1lc3NhZ2UiLCJmb3JtYXRNZXNzYWdlIiwibGltaXQiLCJyZXN1bHQiLCJyZW1haW5pbmciLCJsZW5ndGgiLCJpIiwiZXJyb3IiLCJzdHJpbmdpZmllZCIsInRvU3RyaW5nIiwiYWN0dWFsVmFsdWVQYXJ0IiwidmFsdWVBdFBhdGgiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsMkRBQWxCOztBQUVlLE1BQU1DLGdCQUFOLFNBQStCQyxTQUEvQixDQUF5QztBQUl0REMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQWlDO0FBQzFDOztBQUQwQyxrQ0FIckMsa0JBR3FDOztBQUFBOztBQUUxQyxTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7QUFFRCxNQUFJQyxPQUFKLEdBQXNCO0FBQ3BCLFdBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0Q7O0FBRURBLEVBQUFBLGFBQWEsQ0FBQztBQUFFQyxJQUFBQSxLQUFLLEdBQUc7QUFBVixNQUF3QyxFQUF6QyxFQUFxRDtBQUNoRSxVQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQUlDLFNBQVMsR0FDWEYsS0FBSyxHQUFHUCxTQUFTLENBQUNVLE1BQWxCLEdBQTRCLE9BQU0sS0FBS04sTUFBTCxDQUFZTSxNQUFPLGNBQTFCLENBQXdDQSxNQURyRTs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1AsTUFBTCxDQUFZTSxNQUFoQyxFQUF3Q0MsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxZQUFNQyxLQUFLLEdBQUcsS0FBS1IsTUFBTCxDQUFZTyxDQUFaLENBQWQ7QUFDQSxVQUFJSCxNQUFNLENBQUNFLE1BQVgsRUFBbUJELFNBQVMsSUFBSVQsU0FBUyxDQUFDVSxNQUF2QjtBQUNuQixZQUFNRyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsUUFBTixFQUFwQjtBQUNBTCxNQUFBQSxTQUFTLElBQUlJLFdBQVcsQ0FBQ0gsTUFBekI7QUFDQSxZQUFNSyxlQUFlLEdBQUkscUJBQW9CLDZCQUMzQ0gsS0FBSyxDQUFDSSxXQURxQyxFQUUzQztBQUFFVCxRQUFBQSxLQUFLLEVBQUVFLFNBQVMsR0FBSSxvQkFBRCxDQUFxQkM7QUFBMUMsT0FGMkMsQ0FHM0MsRUFIRjtBQUlBRCxNQUFBQSxTQUFTLElBQUlNLGVBQWUsQ0FBQ0wsTUFBN0I7O0FBQ0EsVUFBSUQsU0FBUyxHQUFHLENBQVosSUFBaUJELE1BQU0sQ0FBQ0UsTUFBNUIsRUFBb0M7QUFDbENGLFFBQUFBLE1BQU0sQ0FBQ1MsSUFBUCxDQUFhLE9BQU0sS0FBS2IsTUFBTCxDQUFZTSxNQUFaLEdBQXFCQyxDQUFFLGNBQTFDO0FBQ0E7QUFDRDs7QUFDREgsTUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVlSLFNBQVMsR0FBRyxDQUFaLEdBQWdCSSxXQUFoQixHQUE4QkEsV0FBVyxHQUFHRSxlQUF4RDtBQUNEOztBQUNELFdBQU9QLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZbEIsU0FBWixDQUFQO0FBQ0Q7O0FBbENxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuL1J1bnRpbWVUeXBlRXJyb3JJdGVtJ1xuaW1wb3J0IHN0cmluZ2lmeVZhbHVlIGZyb20gJy4vc3RyaW5naWZ5VmFsdWUnXG5cbmNvbnN0IGRlbGltaXRlciA9ICdcXG5cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdW50aW1lVHlwZUVycm9yIGV4dGVuZHMgVHlwZUVycm9yIHtcbiAgbmFtZSA9ICdSdW50aW1lVHlwZUVycm9yJ1xuICByZWFkb25seSBlcnJvcnM6IFJ1bnRpbWVUeXBlRXJyb3JJdGVtW11cblxuICBjb25zdHJ1Y3RvcihlcnJvcnM6IFJ1bnRpbWVUeXBlRXJyb3JJdGVtW10pIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnNcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0TWVzc2FnZSgpXG4gIH1cblxuICBmb3JtYXRNZXNzYWdlKHsgbGltaXQgPSAxMDAwMCB9OiB7IGxpbWl0PzogbnVtYmVyIH0gPSB7fSk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBsZXQgcmVtYWluaW5nID1cbiAgICAgIGxpbWl0IC0gZGVsaW1pdGVyLmxlbmd0aCArIGAuLi4gJHt0aGlzLmVycm9ycy5sZW5ndGh9IG1vcmUgZXJyb3JzYC5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3JzW2ldXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCkgcmVtYWluaW5nIC09IGRlbGltaXRlci5sZW5ndGhcbiAgICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gZXJyb3IudG9TdHJpbmcoKVxuICAgICAgcmVtYWluaW5nIC09IHN0cmluZ2lmaWVkLmxlbmd0aFxuICAgICAgY29uc3QgYWN0dWFsVmFsdWVQYXJ0ID0gYFxcblxcbkFjdHVhbCBWYWx1ZTogJHtzdHJpbmdpZnlWYWx1ZShcbiAgICAgICAgZXJyb3IudmFsdWVBdFBhdGgsXG4gICAgICAgIHsgbGltaXQ6IHJlbWFpbmluZyAtIGBcXG5cXG5BY3R1YWwgVmFsdWU6IGAubGVuZ3RoIH1cbiAgICAgICl9YFxuICAgICAgcmVtYWluaW5nIC09IGFjdHVhbFZhbHVlUGFydC5sZW5ndGhcbiAgICAgIGlmIChyZW1haW5pbmcgPCAwICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYC4uLiAke3RoaXMuZXJyb3JzLmxlbmd0aCAtIGl9IG1vcmUgZXJyb3JzYClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHJlbWFpbmluZyA8IDAgPyBzdHJpbmdpZmllZCA6IHN0cmluZ2lmaWVkICsgYWN0dWFsVmFsdWVQYXJ0KVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oZGVsaW1pdGVyKVxuICB9XG59XG4iXX0=
