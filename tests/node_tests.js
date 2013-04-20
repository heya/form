/* UMD.define */ (typeof define=="function"&&define||function(d,f,m){m={module:module,require:require};module.exports=f.apply(null,d.map(function(n){return m[n]||require(n)}))})
(["module", "heya-unit", "../queryString"], function(module, unit, qs){
	"use strict";

	// tests

	unit.add(module, [
		function test_qs(t){
			var t1 = {a: 1, b: "Hi!", c: [3, 5]};
			//eval(t.TEST("qs.objectToQuery(t1) === 'a=1&b=Hi!&c=3&c=5'"));
			eval(t.TEST("t.unify(qs.queryToObject(qs.objectToQuery(t1)), {a: '1', b: 'Hi!', c: ['3', '5']})"));
		}
	]);

	unit.run();
});
