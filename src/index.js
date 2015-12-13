export default function ({ types: t }) {
    return {
        visitor: {
            Program(path, file) {
                path.unshiftContainer('body', t.expressionStatement(t.stringLiteral('use catch-promise;')));
                //path.unshiftContainer('body', t.variableDeclaration('var', [
                //    t.variableDeclarator(t.identifier('CatchPromise'),
                //]));
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