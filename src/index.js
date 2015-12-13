import * as babylon from "babylon";

export default function ({ types: t }) {
    return {

        visitor: {
            Program(path, file) {
                // Inject `var CatchPromise = require('catch-promise');`
                var catchPromiseDeclaration = t.variableDeclaration('var', [
                    t.variableDeclarator(
                        t.identifier('CatchPromise'),
                        t.callExpression(
                            t.identifier('require'),
                            [t.stringLiteral('catch-promise')]
                        )
                    )
                ]);
                path.unshiftContainer('body', catchPromiseDeclaration);
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
}