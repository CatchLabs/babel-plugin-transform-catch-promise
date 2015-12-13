# babel-plugin-transform-catch-promise

This babel plugin that:

- Prepend `var CatchPromise = require('catch-promise');` to the file

- Replace all `Promise` identifiers with `CatchPromise`

## Status

WIP

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
