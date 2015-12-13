# babel-plugin-transform-catch-promise

A babel plugin that:

- Append `var CatchPromise = require('catch-promise');` at beginning of file

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
- https://gist.github.com/zbraniecki/649e0390d57ac353494d