'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.keyToString = keyToString

function keyToString(key) {
  switch (typeof key) {
    case 'symbol':
      return `[${String(key)}]`

    case 'number':
      return String(key)

    case 'string':
      if (/^[_a-z][_a-z0-9]*$/i.test(key)) return key
  }

  return JSON.stringify(key)
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvclJlcG9ydGluZy9rZXlUb1N0cmluZy50cyJdLCJuYW1lcyI6WyJrZXlUb1N0cmluZyIsImtleSIsIlN0cmluZyIsInRlc3QiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBNEQ7QUFDakUsVUFBUSxPQUFPQSxHQUFmO0FBQ0UsU0FBSyxRQUFMO0FBQ0UsYUFBUSxJQUFHQyxNQUFNLENBQUNELEdBQUQsQ0FBTSxHQUF2Qjs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPQyxNQUFNLENBQUNELEdBQUQsQ0FBYjs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJLHNCQUFzQkUsSUFBdEIsQ0FBMkJGLEdBQTNCLENBQUosRUFBcUMsT0FBT0EsR0FBUDtBQU56Qzs7QUFRQSxTQUFPRyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosR0FBZixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24ga2V5VG9TdHJpbmcoa2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBzdHJpbmcge1xuICBzd2l0Y2ggKHR5cGVvZiBrZXkpIHtcbiAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgcmV0dXJuIGBbJHtTdHJpbmcoa2V5KX1dYFxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gU3RyaW5nKGtleSlcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKC9eW19hLXpdW19hLXowLTldKiQvaS50ZXN0KGtleSkpIHJldHVybiBrZXlcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoa2V5KVxufVxuIl19
