# @ctx-core/loader

## 8.0.11

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 8.0.10

### Patch Changes

- tsconfig.json: "target": "es2019"

## 8.0.9

### Patch Changes

- fix: cjs: load as a Promise

## 8.0.8

### Patch Changes

- "main": "./dist/index.cjs"

## 8.0.7

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 8.0.6

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 8.0.5

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 8.0.4

### Patch Changes

- support cjs & esm: + "exports"

## 8.0.3

### Patch Changes

- fix: module imports;types

## 8.0.2

### Patch Changes

- fix: "type": "module"

## 8.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 8.0.0

### Major Changes

- "type": "module": module npm type

## 7.0.10

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 7.0.9

### Patch Changes

- dist directory

## 7.0.8

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 7.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 7.0.6

### Patch Changes

- fix: deploying \*.js files

## 7.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 7.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 7.0.3

### Patch Changes

- fix: npm run clean

## 7.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 7.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 7.0.0

### Major Changes

- move from dist to src directory

## 6.3.3

### Patch Changes

- version bump: run build

## 6.3.2

### Patch Changes

- fix: build: clean up old build files in dist

## 6.3.1

### Patch Changes

- update dependencies

## 6.3.0

### Minor Changes

- fix tsc build directory issues

## 6.2.1

### Patch Changes

- .gitignore: - \*.js

## 6.2.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 6.1.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 6.1.2

### Patch Changes

- .npmignore: + ~

## 6.1.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 6.1.0

### Minor Changes

- "noImplicitAny": true

## 6.0.10

### Patch Changes

- update dependencies

## 6.0.9

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 6.0.8

### Patch Changes

- version bump

## 6.0.7

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 6.0.6

### Patch Changes

- fix: npm run compile: tsc -b .

## 6.0.5

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 6.0.4

### Patch Changes

- version bump

## 6.0.3

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 6.0.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 6.0.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 6.0.0

### Major Changes

- src directory

## 5.0.5

### Patch Changes

- - .rush

## 5.0.4

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 5.0.3

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 5.0.1

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 5.0.0

### Major Changes

- Typescript strict checking

## 4.0.34

### Patch Changes

- fix: npm run compile: path to tsc
