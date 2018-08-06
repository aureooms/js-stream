'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;

var _from = require('./from');

var _to = require('./to');

var _jsItertools = require('@aureooms/js-itertools');

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
function chain(stream) {

  return (0, _from.fromiterable)((0, _jsItertools.chain)((0, _jsItertools.map)(_to.toiterable, (0, _to.toiterable)(stream))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInN0cmVhbSIsInRvaXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxLLEdBQUFBLEs7O0FBUmhCOztBQUNBOztBQUNBOztBQUVBOzs7O0FBSU8sU0FBU0EsS0FBVCxDQUFpQkMsTUFBakIsRUFBMEI7O0FBRWhDLFNBQU8sd0JBQWMsd0JBQVEsc0JBQU1DLGNBQU4sRUFBbUIsb0JBQVlELE1BQVosQ0FBbkIsQ0FBUixDQUFkLENBQVA7QUFFQSIsImZpbGUiOiJjaGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZnJvbWl0ZXJhYmxlIH0gZnJvbSAnLi9mcm9tJyA7XG5pbXBvcnQgeyB0b2l0ZXJhYmxlIH0gZnJvbSAnLi90bycgO1xuaW1wb3J0IHsgbWFwIGFzIF9tYXAgLCBjaGFpbiBhcyBfY2hhaW4gfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gb2Ygc3RyZWFtcyBvZiB0b2tlbnMgdG8gYSBzdHJlYW0gb2YgdG9rZW5zLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhaW4gKCBzdHJlYW0gKSB7XG5cblx0cmV0dXJuIGZyb21pdGVyYWJsZSggX2NoYWluKCBfbWFwKCB0b2l0ZXJhYmxlICwgdG9pdGVyYWJsZSggc3RyZWFtICkgKSApICkgO1xuXG59XG4iXX0=