'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = merge

var _MergedObjectType = _interopRequireDefault(
  require('./types/MergedObjectType')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// @flow
function merge(...types) {
  return new _MergedObjectType.default(types)
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZS50cyJdLCJuYW1lcyI6WyJtZXJnZSIsInR5cGVzIiwiTWVyZ2VkT2JqZWN0VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0FBSEE7QUEyRmUsU0FBU0EsS0FBVCxDQUFlLEdBQUdDLEtBQWxCLEVBQStDO0FBQzVELFNBQU8sSUFBSUMseUJBQUosQ0FBcUJELEtBQXJCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBUeXBlIGZyb20gJy4vdHlwZXMvVHlwZSdcbmltcG9ydCBNZXJnZWRPYmplY3RUeXBlIGZyb20gJy4vdHlwZXMvTWVyZ2VkT2JqZWN0VHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2U8VDEgZXh0ZW5kcyB7fT4odDE6IFR5cGU8VDE+KTogVHlwZTxUMT5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlPFQxIGV4dGVuZHMge30sIFQyIGV4dGVuZHMge30+KFxuICB0MTogVHlwZTxUMT4sXG4gIHQyOiBUeXBlPFQyPlxuKTogVHlwZTxUMSAmIFQyPlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2U8VDEgZXh0ZW5kcyB7fSwgVDIgZXh0ZW5kcyB7fSwgVDMgZXh0ZW5kcyB7fT4oXG4gIHQxOiBUeXBlPFQxPixcbiAgdDI6IFR5cGU8VDI+LFxuICB0MzogVHlwZTxUMz5cbik6IFR5cGU8VDEgJiBUMiAmIFQzPlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2U8XG4gIFQxIGV4dGVuZHMge30sXG4gIFQyIGV4dGVuZHMge30sXG4gIFQzIGV4dGVuZHMge30sXG4gIFQ0IGV4dGVuZHMge31cbj4oXG4gIHQxOiBUeXBlPFQxPixcbiAgdDI6IFR5cGU8VDI+LFxuICB0MzogVHlwZTxUMz4sXG4gIHQ0OiBUeXBlPFQ0PlxuKTogVHlwZTxUMSAmIFQyICYgVDMgJiBUND5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlPFxuICBUMSBleHRlbmRzIHt9LFxuICBUMiBleHRlbmRzIHt9LFxuICBUMyBleHRlbmRzIHt9LFxuICBUNCBleHRlbmRzIHt9LFxuICBUNSBleHRlbmRzIHt9XG4+KFxuICB0MTogVHlwZTxUMT4sXG4gIHQyOiBUeXBlPFQyPixcbiAgdDM6IFR5cGU8VDM+LFxuICB0NDogVHlwZTxUND4sXG4gIHQ1OiBUeXBlPFQ1PlxuKTogVHlwZTxUMSAmIFQyICYgVDMgJiBUNCAmIFQ1PlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2U8XG4gIFQxIGV4dGVuZHMge30sXG4gIFQyIGV4dGVuZHMge30sXG4gIFQzIGV4dGVuZHMge30sXG4gIFQ0IGV4dGVuZHMge30sXG4gIFQ1IGV4dGVuZHMge30sXG4gIFQ2IGV4dGVuZHMge31cbj4oXG4gIHQxOiBUeXBlPFQxPixcbiAgdDI6IFR5cGU8VDI+LFxuICB0MzogVHlwZTxUMz4sXG4gIHQ0OiBUeXBlPFQ0PixcbiAgdDU6IFR5cGU8VDU+LFxuICB0NjogVHlwZTxUNj5cbik6IFR5cGU8VDEgJiBUMiAmIFQzICYgVDQgJiBUNSAmIFQ2PlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2U8XG4gIFQxIGV4dGVuZHMge30sXG4gIFQyIGV4dGVuZHMge30sXG4gIFQzIGV4dGVuZHMge30sXG4gIFQ0IGV4dGVuZHMge30sXG4gIFQ1IGV4dGVuZHMge30sXG4gIFQ2IGV4dGVuZHMge30sXG4gIFQ3IGV4dGVuZHMge31cbj4oXG4gIHQxOiBUeXBlPFQxPixcbiAgdDI6IFR5cGU8VDI+LFxuICB0MzogVHlwZTxUMz4sXG4gIHQ0OiBUeXBlPFQ0PixcbiAgdDU6IFR5cGU8VDU+LFxuICB0NjogVHlwZTxUNj4sXG4gIHQ3OiBUeXBlPFQ3PlxuKTogVHlwZTxUMSAmIFQyICYgVDMgJiBUNCAmIFQ1ICYgVDYgJiBUNz5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlPFxuICBUMSBleHRlbmRzIHt9LFxuICBUMiBleHRlbmRzIHt9LFxuICBUMyBleHRlbmRzIHt9LFxuICBUNCBleHRlbmRzIHt9LFxuICBUNSBleHRlbmRzIHt9LFxuICBUNiBleHRlbmRzIHt9LFxuICBUNyBleHRlbmRzIHt9LFxuICBUOCBleHRlbmRzIHt9XG4+KFxuICB0MTogVHlwZTxUMT4sXG4gIHQyOiBUeXBlPFQyPixcbiAgdDM6IFR5cGU8VDM+LFxuICB0NDogVHlwZTxUND4sXG4gIHQ1OiBUeXBlPFQ1PixcbiAgdDY6IFR5cGU8VDY+LFxuICB0NzogVHlwZTxUNz4sXG4gIHQ4OiBUeXBlPFQ4PlxuKTogVHlwZTxUMSAmIFQyICYgVDMgJiBUNCAmIFQ1ICYgVDYgJiBUNyAmIFQ4PlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZSguLi50eXBlczogVHlwZTx7fT5bXSk6IFR5cGU8e30+IHtcbiAgcmV0dXJuIG5ldyBNZXJnZWRPYmplY3RUeXBlKHR5cGVzKVxufVxuIl19
