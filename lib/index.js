'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            Program: function Program(path, file) {
                path.unshiftContainer('body', t.expressionStatement(t.stringLiteral('use catch-promise;')));
            }
            //MemberExpression(path) {
            //    if (path.get('object').matchesPattern('Promise')) {
            //        let key = path.toComputedKey();
            //        if (t.isStringLiteral(key)) {
            //            path.replaceWith(t.valueToNode('CatchPromise'));
            //        }
            //    }
            //}

        }
    };
};