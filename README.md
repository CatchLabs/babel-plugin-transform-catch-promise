# babel-plugin-transform-catch-promise

This is a babel plugin that:

- Prepend `var CatchPromise = require('catch-promise');` to the file

- Replace all `Promise` identifiers with `CatchPromise`

## Dev

```
npm run build
```

## npm publish

```bash
npm run build
npm publish
```

## Refs

- https://github.com/thejameskyle/babel-plugin-handbook
- https://github.com/babel/babel/tree/master/packages/babel-types
- https://gist.github.com/zbraniecki/649e0390d57ac353494d
