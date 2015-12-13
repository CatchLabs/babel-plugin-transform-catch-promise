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
            },
            Identifier(path) {
                // Replace `Promise` with `CatchPromise`
                if (path.node.name === 'Promise') {
                    path.replaceWith(t.identifier('CatchPromise'));
                }
            }
        }
    };
}