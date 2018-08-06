"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asyncMap;

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

/**
 * Utility function to apply a sync callable to each item of an async iterable.
 * @param {Callable} callable the callable to apply
 * @param {AsyncIterable} iterable the iterable to process
 */
function asyncMap(_x, _x2) {
  return _asyncMap.apply(this, arguments);
}

function _asyncMap() {
  _asyncMap = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(callable, iterable) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, item;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // should the callable also be async ?
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(iterable);

          case 4:
            _context.next = 6;
            return _awaitAsyncGenerator(_iterator.next());

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _awaitAsyncGenerator(_step.value);

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 18;
              break;
            }

            item = _value;
            _context.next = 15;
            return callable(item);

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return _awaitAsyncGenerator(_iterator.return());

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(24);

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _asyncMap.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3luY01hcC5qcyJdLCJuYW1lcyI6WyJhc3luY01hcCIsImNhbGxhYmxlIiwiaXRlcmFibGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O1NBSytCQSxROzs7Ozs7OzBCQUFoQixpQkFBMkJDLFFBQTNCLEVBQXNDQyxRQUF0QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Q7QUFEYztBQUFBO0FBQUE7QUFBQSx1Q0FFWUEsUUFGWjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJQyxZQUFBQSxJQUZKO0FBQUE7QUFFdUIsbUJBQU1GLFFBQVEsQ0FBQ0UsSUFBRCxDQUFkOztBQUZ2QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGFwcGx5IGEgc3luYyBjYWxsYWJsZSB0byBlYWNoIGl0ZW0gb2YgYW4gYXN5bmMgaXRlcmFibGUuXG4gKiBAcGFyYW0ge0NhbGxhYmxlfSBjYWxsYWJsZSB0aGUgY2FsbGFibGUgdG8gYXBwbHlcbiAqIEBwYXJhbSB7QXN5bmNJdGVyYWJsZX0gaXRlcmFibGUgdGhlIGl0ZXJhYmxlIHRvIHByb2Nlc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIGFzeW5jTWFwICggY2FsbGFibGUgLCBpdGVyYWJsZSApIHtcblx0Ly8gc2hvdWxkIHRoZSBjYWxsYWJsZSBhbHNvIGJlIGFzeW5jID9cblx0Zm9yIGF3YWl0ICggY29uc3QgaXRlbSBvZiBpdGVyYWJsZSApIHlpZWxkIGNhbGxhYmxlKGl0ZW0pIDtcbn1cbiJdfQ==