'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _RuntimeTypeErrorItem = _interopRequireDefault(
  require('./RuntimeTypeErrorItem')
)

var _keyToString = require('./keyToString')

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

class MissingPropertyErrorItem extends _RuntimeTypeErrorItem.default {
  constructor(path, valueAtPath, expectedTypeAtPath, propertyType) {
    super(path, valueAtPath, expectedTypeAtPath, path.length + 1)

    _defineProperty(this, 'propertyType', void 0)

    this.propertyType = propertyType
  }

  messageAtPath() {
    return `is missing required property ${(0, _keyToString.keyToString)(
      this.propertyType.key
    )}, which must be ${this.propertyType.value.toString({
      formatForMustBe: true,
    })}`
  }
}

exports.default = MissingPropertyErrorItem

_defineProperty(MissingPropertyErrorItem, 'code', void 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9NaXNzaW5nUHJvcGVydHlFcnJvckl0ZW0udHMiXSwibmFtZXMiOlsiTWlzc2luZ1Byb3BlcnR5RXJyb3JJdGVtIiwiUnVudGltZVR5cGVFcnJvckl0ZW0iLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJ2YWx1ZUF0UGF0aCIsImV4cGVjdGVkVHlwZUF0UGF0aCIsInByb3BlcnR5VHlwZSIsImxlbmd0aCIsIm1lc3NhZ2VBdFBhdGgiLCJrZXkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiZm9ybWF0Rm9yTXVzdEJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7OztBQUVlLE1BQU1BLHdCQUFOLFNBQXVDQyw2QkFBdkMsQ0FBNEQ7QUFJekVDLEVBQUFBLFdBQVcsQ0FDVEMsSUFEUyxFQUVUQyxXQUZTLEVBR1RDLGtCQUhTLEVBSVRDLFlBSlMsRUFLVDtBQUNBLFVBQU1ILElBQU4sRUFBWUMsV0FBWixFQUF5QkMsa0JBQXpCLEVBQTZDRixJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUEzRDs7QUFEQTs7QUFFQSxTQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOztBQUVERSxFQUFBQSxhQUFhLEdBQVc7QUFDdEIsV0FBUSxnQ0FBK0IsOEJBQ3JDLEtBQUtGLFlBQUwsQ0FBa0JHLEdBRG1CLENBRXJDLG1CQUFrQixLQUFLSCxZQUFMLENBQWtCSSxLQUFsQixDQUF3QkMsUUFBeEIsQ0FBaUM7QUFDbkRDLE1BQUFBLGVBQWUsRUFBRTtBQURrQyxLQUFqQyxDQUVqQixFQUpIO0FBS0Q7O0FBcEJ3RTs7OztnQkFBdERaLHdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUgZnJvbSAnLi4vdHlwZXMvVHlwZSdcbmltcG9ydCBPYmplY3RUeXBlUHJvcGVydHkgZnJvbSAnLi4vdHlwZXMvT2JqZWN0VHlwZVByb3BlcnR5J1xuaW1wb3J0IFJ1bnRpbWVUeXBlRXJyb3JJdGVtIGZyb20gJy4vUnVudGltZVR5cGVFcnJvckl0ZW0nXG5pbXBvcnQgeyBJZGVudGlmaWVyUGF0aCB9IGZyb20gJy4uL1ZhbGlkYXRpb24nXG5pbXBvcnQgeyBrZXlUb1N0cmluZyB9IGZyb20gJy4va2V5VG9TdHJpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbmdQcm9wZXJ0eUVycm9ySXRlbSBleHRlbmRzIFJ1bnRpbWVUeXBlRXJyb3JJdGVtIHtcbiAgc3RhdGljIHJlYWRvbmx5IGNvZGU6ICdNSVNTSU5HX1BST1BFUlRZJ1xuICByZWFkb25seSBwcm9wZXJ0eVR5cGU6IE9iamVjdFR5cGVQcm9wZXJ0eTxhbnksIGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRoOiBJZGVudGlmaWVyUGF0aCxcbiAgICB2YWx1ZUF0UGF0aDogdW5rbm93bixcbiAgICBleHBlY3RlZFR5cGVBdFBhdGg6IFR5cGU8YW55PixcbiAgICBwcm9wZXJ0eVR5cGU6IE9iamVjdFR5cGVQcm9wZXJ0eTxhbnksIGFueT5cbiAgKSB7XG4gICAgc3VwZXIocGF0aCwgdmFsdWVBdFBhdGgsIGV4cGVjdGVkVHlwZUF0UGF0aCwgcGF0aC5sZW5ndGggKyAxKVxuICAgIHRoaXMucHJvcGVydHlUeXBlID0gcHJvcGVydHlUeXBlXG4gIH1cblxuICBtZXNzYWdlQXRQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBpcyBtaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICR7a2V5VG9TdHJpbmcoXG4gICAgICB0aGlzLnByb3BlcnR5VHlwZS5rZXlcbiAgICApfSwgd2hpY2ggbXVzdCBiZSAke3RoaXMucHJvcGVydHlUeXBlLnZhbHVlLnRvU3RyaW5nKHtcbiAgICAgIGZvcm1hdEZvck11c3RCZTogdHJ1ZSxcbiAgICB9KX1gXG4gIH1cbn1cbiJdfQ==
