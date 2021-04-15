'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = stringifyValue

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
)

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'))

var _keyToString = require('./keyToString')

function stringifyValue(value) {
  var options =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  var _options$indent = options.indent,
    indent = _options$indent === void 0 ? '' : _options$indent,
    _options$limit = options.limit,
    limit = _options$limit === void 0 ? Infinity : _options$limit,
    _options$enclosing = options.enclosing,
    enclosing =
      _options$enclosing === void 0 ? new WeakMap() : _options$enclosing,
    _options$refCounter = options.refCounter,
    refCounter = _options$refCounter === void 0 ? [0] : _options$refCounter,
    _options$reachedLimit = options.reachedLimit,
    reachedLimit =
      _options$reachedLimit === void 0 ? [false] : _options$reachedLimit

  if (value === null) {
    return 'null'
  }

  switch ((0, _typeof2['default'])(value)) {
    case 'string': {
      var result = JSON.stringify(value)

      if (result.length > limit) {
        var truncTo =
          limit -
          ' ... '.concat(result.length - limit, ' more characters"').length -
          1
        var numElided = result.length - truncTo
        return (
          result.substring(0, truncTo) +
          ' ... '
            .concat(numElided, ' more character')
            .concat(numElided === 1 ? '' : 's', '"')
        )
      }

      return result
    }

    case 'number':
      return Object.is(value, -0) ? '-0' : String(value)

    case 'symbol':
    case 'boolean':
    case 'undefined':
      return String(value)

    case 'function':
      return '[function '.concat(value.name, ']')
  }

  if (enclosing.has(value)) {
    var refNumber = enclosing.get(value)

    if (refNumber == null) {
      refNumber = ++refCounter[0]
      enclosing.set(value, refNumber)
    }

    return '<ref *'.concat(refNumber, '>')
  }

  enclosing.set(value, null)

  try {
    var nextIndent = indent + '  '
    var recurseOptions = {
      indent: nextIndent,
      limit: limit,
      enclosing: enclosing,
      reachedLimit: reachedLimit,
      refCounter: refCounter,
    }

    if (Array.isArray(value)) {
      // ARRAY
      if (!value.length) return '[]'
      var remaining =
        limit -
        '[\n'
          .concat(nextIndent, '... ')
          .concat(value.length, ' more elements\n')
          .concat(indent, ']').length
      var lines = ['[']

      for (var i = 0; i < value.length; i++) {
        var elem = value[i]
        recurseOptions.limit = remaining - (nextIndent.length + 1)
        var stringified =
          nextIndent + stringifyValue(elem, recurseOptions) + ','
        remaining -= stringified.length + 1

        if (remaining < 0 || reachedLimit[0]) {
          var _numElided = value.length - i

          lines.push(
            ''
              .concat(nextIndent, '... ')
              .concat(_numElided, ' more element')
              .concat(_numElided === 1 ? '' : 's')
          )
          break
        }

        lines.push(stringified)
      }

      lines.push(indent + ']')

      var _refNumber = enclosing.get(value)

      if (_refNumber != null)
        lines[0] = '<ref *'.concat(_refNumber, '> ').concat(lines[0])
      return lines.join('\n')
    } else {
      // OBJECT
      var _constructor = value.constructor
      var opener =
        _constructor != null && _constructor !== Object
          ? ''.concat(_constructor.name, ' {')
          : '{'
      var keys = [].concat(
        (0, _toConsumableArray2['default'])(Object.keys(value)),
        (0, _toConsumableArray2['default'])(Object.getOwnPropertySymbols(value))
      )

      var _remaining =
        limit -
        ''
          .concat(opener, '\n')
          .concat(nextIndent, '... ')
          .concat(keys.length, ' more properties\n')
          .concat(indent, '}').length

      var _lines = [opener]

      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i]
        var propValue = value[key]
        var stringifiedKey = (0, _keyToString.keyToString)(key)
        recurseOptions.limit =
          _remaining - (stringifiedKey.length + 3 + nextIndent.length)
        var stringifiedValue = stringifyValue(propValue, recurseOptions)

        var _final = ''
          .concat(nextIndent)
          .concat(stringifiedKey, ': ')
          .concat(stringifiedValue, ',')

        _remaining -= _final.length + 1

        if (_remaining < 0 || reachedLimit[0]) {
          var _numElided2 = keys.length - _i

          _lines.push(
            ''
              .concat(nextIndent, '... ')
              .concat(_numElided2, ' more propert')
              .concat(_numElided2 === 1 ? 'y' : 'ies')
          )

          break
        }

        _lines.push(_final)
      }

      if (_lines.length === 1) return opener + '}'

      _lines.push(indent + '}')

      var _refNumber2 = enclosing.get(value)

      if (_refNumber2 != null)
        _lines[0] = '<ref *'.concat(_refNumber2, '> ').concat(_lines[0])
      return _lines.join('\n')
    }
  } finally {
    enclosing['delete'](value)
  }
}
