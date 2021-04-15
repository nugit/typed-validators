'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Type = _interopRequireDefault(require('./Type'))

var _InvalidTypeErrorItem = _interopRequireDefault(
  require('../errorReporting/InvalidTypeErrorItem')
)

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

class InstanceOfType extends _Type.default {
  get classType() {
    return this._classType()
  }

  constructor(classType) {
    super()

    _defineProperty(this, 'typeName', 'InstanceOfType')

    _defineProperty(this, '_classType', void 0)

    this._classType = classType
  }

  *errors(validation, path, input) {
    if (!(input instanceof this.classType)) {
      yield new _InvalidTypeErrorItem.default(path, input, this)
    }
  }

  accepts(input) {
    return input instanceof this.classType
  }

  get acceptsSomeCompositeTypes() {
    return true
  }

  toString(options) {
    return (options === null || options === void 0
    ? void 0
    : options.formatForMustBe)
      ? `an instance of ${this.classType.prototype.constructor.name}`
      : this.classType.prototype.constructor.name
  }
}

exports.default = InstanceOfType
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9JbnN0YW5jZU9mVHlwZS50cyJdLCJuYW1lcyI6WyJJbnN0YW5jZU9mVHlwZSIsIlR5cGUiLCJjbGFzc1R5cGUiLCJfY2xhc3NUeXBlIiwiY29uc3RydWN0b3IiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uIiwicGF0aCIsImlucHV0IiwiSW52YWxpZFR5cGVFcnJvckl0ZW0iLCJhY2NlcHRzIiwiYWNjZXB0c1NvbWVDb21wb3NpdGVUeXBlcyIsInRvU3RyaW5nIiwib3B0aW9ucyIsImZvcm1hdEZvck11c3RCZSIsInByb3RvdHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBS2UsTUFBTUEsY0FBTixTQUFnQ0MsYUFBaEMsQ0FBd0M7QUFJckQsTUFBSUMsU0FBSixHQUE2QztBQUMzQyxXQUFPLEtBQUtDLFVBQUwsRUFBUDtBQUNEOztBQUVEQyxFQUFBQSxXQUFXLENBQUNGLFNBQUQsRUFBZ0M7QUFDekM7O0FBRHlDLHNDQVBoQyxnQkFPZ0M7O0FBQUE7O0FBRXpDLFNBQUtDLFVBQUwsR0FBa0JELFNBQWxCO0FBQ0Q7O0FBRUQsR0FBQ0csTUFBRCxDQUNFQyxVQURGLEVBRUVDLElBRkYsRUFHRUMsS0FIRixFQUlrQztBQUNoQyxRQUFJLEVBQUVBLEtBQUssWUFBWSxLQUFLTixTQUF4QixDQUFKLEVBQXdDO0FBQ3RDLFlBQU0sSUFBSU8sNkJBQUosQ0FBeUJGLElBQXpCLEVBQStCQyxLQUEvQixFQUFzQyxJQUF0QyxDQUFOO0FBQ0Q7QUFDRjs7QUFFREUsRUFBQUEsT0FBTyxDQUFDRixLQUFELEVBQXlCO0FBQzlCLFdBQU9BLEtBQUssWUFBWSxLQUFLTixTQUE3QjtBQUNEOztBQUVELE1BQUlTLHlCQUFKLEdBQXlDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNEOztBQUVEQyxFQUFBQSxRQUFRLENBQUNDLE9BQUQsRUFBa0Q7QUFDeEQsV0FBTyxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMsZUFBVCxJQUNGLGtCQUFpQixLQUFLWixTQUFMLENBQWVhLFNBQWYsQ0FBeUJYLFdBQXpCLENBQXFDWSxJQUFLLEVBRHpELEdBRUgsS0FBS2QsU0FBTCxDQUFlYSxTQUFmLENBQXlCWCxXQUF6QixDQUFxQ1ksSUFGekM7QUFHRDs7QUFuQ29EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJ1xuaW1wb3J0IFZhbGlkYXRpb24sIHsgSWRlbnRpZmllclBhdGggfSBmcm9tICcuLi9WYWxpZGF0aW9uJ1xuaW1wb3J0IEludmFsaWRUeXBlRXJyb3JJdGVtIGZyb20gJy4uL2Vycm9yUmVwb3J0aW5nL0ludmFsaWRUeXBlRXJyb3JJdGVtJ1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4uL2Vycm9yUmVwb3J0aW5nL1J1bnRpbWVUeXBlRXJyb3JJdGVtJ1xuXG5leHBvcnQgdHlwZSBDbGFzc1R5cGVPcHRpb248VD4gPSAoKSA9PiB7IG5ldyAoLi4uYXJnczogYW55W10pOiBUIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VPZlR5cGU8VD4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgdHlwZU5hbWUgPSAnSW5zdGFuY2VPZlR5cGUnXG4gIHByaXZhdGUgX2NsYXNzVHlwZTogQ2xhc3NUeXBlT3B0aW9uPFQ+XG5cbiAgZ2V0IGNsYXNzVHlwZSgpOiB7IG5ldyAoLi4uYXJnczogYW55W10pOiBUIH0ge1xuICAgIHJldHVybiB0aGlzLl9jbGFzc1R5cGUoKVxuICB9XG5cbiAgY29uc3RydWN0b3IoY2xhc3NUeXBlOiBDbGFzc1R5cGVPcHRpb248VD4pIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY2xhc3NUeXBlID0gY2xhc3NUeXBlXG4gIH1cblxuICAqZXJyb3JzKFxuICAgIHZhbGlkYXRpb246IFZhbGlkYXRpb24sXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgaW5wdXQ6IGFueVxuICApOiBJdGVyYWJsZTxSdW50aW1lVHlwZUVycm9ySXRlbT4ge1xuICAgIGlmICghKGlucHV0IGluc3RhbmNlb2YgdGhpcy5jbGFzc1R5cGUpKSB7XG4gICAgICB5aWVsZCBuZXcgSW52YWxpZFR5cGVFcnJvckl0ZW0ocGF0aCwgaW5wdXQsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgYWNjZXB0cyhpbnB1dDogYW55KTogaW5wdXQgaXMgVCB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgdGhpcy5jbGFzc1R5cGVcbiAgfVxuXG4gIGdldCBhY2NlcHRzU29tZUNvbXBvc2l0ZVR5cGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB0b1N0cmluZyhvcHRpb25zPzogeyBmb3JtYXRGb3JNdXN0QmU/OiBib29sZWFuIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRpb25zPy5mb3JtYXRGb3JNdXN0QmVcbiAgICAgID8gYGFuIGluc3RhbmNlIG9mICR7dGhpcy5jbGFzc1R5cGUucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWV9YFxuICAgICAgOiB0aGlzLmNsYXNzVHlwZS5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZVxuICB9XG59XG4iXX0=
