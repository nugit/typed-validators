'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.collectConstraintErrors = collectConstraintErrors
exports.constraintsAccept = constraintsAccept

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _ViolatedConstraintErrorItem = _interopRequireDefault(
  require('./errorReporting/ViolatedConstraintErrorItem')
)

var _marked =
  /*#__PURE__*/
  _regenerator['default'].mark(collectConstraintErrors)

/**
 * Collect any errors from constraints on the given subject type.
 */
function collectConstraintErrors(subject, validation, path, input) {
  var constraints, length, i, constraint, violation
  return _regenerator['default'].wrap(function collectConstraintErrors$(
    _context
  ) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          constraints = subject.constraints
          length = constraints.length
          i = 0

        case 3:
          if (!(i < length)) {
            _context.next = 12
            break
          }

          constraint = constraints[i]
          violation = constraint(input)

          if (!(typeof violation === 'string')) {
            _context.next = 9
            break
          }

          _context.next = 9
          return new _ViolatedConstraintErrorItem['default'](
            path,
            input,
            subject,
            violation
          )

        case 9:
          i++
          _context.next = 3
          break

        case 12:
        case 'end':
          return _context.stop()
      }
    }
  },
  _marked)
}
/**
 * Determine whether the input passes the constraints on the subject type.
 */

function constraintsAccept(subject) {
  var constraints = subject.constraints
  var length = constraints.length

  for (
    var _len = arguments.length,
      input = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    input[_key - 1] = arguments[_key]
  }

  for (var i = 0; i < length; i++) {
    var constraint = constraints[i]

    if (typeof constraint.apply(void 0, input) === 'string') {
      return false
    }
  }

  return true
}
