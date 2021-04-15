'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _RuntimeTypeErrorItem = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
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

class ViolatedConstraintErrorItem extends _RuntimeTypeErrorItem.default {
  constructor(path, valueAtPath, expectedTypeAtPath, constraintErrorMessage) {
    super(path, valueAtPath, expectedTypeAtPath)

    _defineProperty(this, 'constraintErrorMessage', void 0)

    this.constraintErrorMessage = constraintErrorMessage
  }

  messageAtPath() {
    return this.constraintErrorMessage
  }
}

exports.default = ViolatedConstraintErrorItem

_defineProperty(ViolatedConstraintErrorItem, 'code', void 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9WaW9sYXRlZENvbnN0cmFpbnRFcnJvckl0ZW0udHMiXSwibmFtZXMiOlsiVmlvbGF0ZWRDb25zdHJhaW50RXJyb3JJdGVtIiwiUnVudGltZVR5cGVFcnJvckl0ZW0iLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJ2YWx1ZUF0UGF0aCIsImV4cGVjdGVkVHlwZUF0UGF0aCIsImNvbnN0cmFpbnRFcnJvck1lc3NhZ2UiLCJtZXNzYWdlQXRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7OztBQUVlLE1BQU1BLDJCQUFOLFNBQTBDQyw2QkFBMUMsQ0FBK0Q7QUFJNUVDLEVBQUFBLFdBQVcsQ0FDVEMsSUFEUyxFQUVUQyxXQUZTLEVBR1RDLGtCQUhTLEVBSVRDLHNCQUpTLEVBS1Q7QUFDQSxVQUFNSCxJQUFOLEVBQVlDLFdBQVosRUFBeUJDLGtCQUF6Qjs7QUFEQTs7QUFFQSxTQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0Q7O0FBRURDLEVBQUFBLGFBQWEsR0FBVztBQUN0QixXQUFPLEtBQUtELHNCQUFaO0FBQ0Q7O0FBaEIyRTs7OztnQkFBekROLDJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUgZnJvbSAnLi4vdHlwZXMvVHlwZSdcbmltcG9ydCB7IElkZW50aWZpZXJQYXRoIH0gZnJvbSAnLi4vVmFsaWRhdGlvbidcbmltcG9ydCBSdW50aW1lVHlwZUVycm9ySXRlbSBmcm9tICcuL1J1bnRpbWVUeXBlRXJyb3JJdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaW9sYXRlZENvbnN0cmFpbnRFcnJvckl0ZW0gZXh0ZW5kcyBSdW50aW1lVHlwZUVycm9ySXRlbSB7XG4gIHN0YXRpYyByZWFkb25seSBjb2RlOiAnVklPTEFURURfQ09OU1RSQUlOVCdcbiAgcmVhZG9ubHkgY29uc3RyYWludEVycm9yTWVzc2FnZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aDogSWRlbnRpZmllclBhdGgsXG4gICAgdmFsdWVBdFBhdGg6IHVua25vd24sXG4gICAgZXhwZWN0ZWRUeXBlQXRQYXRoOiBUeXBlPHVua25vd24+LFxuICAgIGNvbnN0cmFpbnRFcnJvck1lc3NhZ2U6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihwYXRoLCB2YWx1ZUF0UGF0aCwgZXhwZWN0ZWRUeXBlQXRQYXRoKVxuICAgIHRoaXMuY29uc3RyYWludEVycm9yTWVzc2FnZSA9IGNvbnN0cmFpbnRFcnJvck1lc3NhZ2VcbiAgfVxuXG4gIG1lc3NhZ2VBdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50RXJyb3JNZXNzYWdlXG4gIH1cbn1cbiJdfQ==
