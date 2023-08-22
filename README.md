# Vite + React + Typescript + Vitest + Eslint + Prettier + EditorConfig

A starter for React with Typescript with the blazing fast Vite, strong Vitest framework and all static code testing with Eslint and formatting with Prettier and EditorConfig.

## Installation & run

1. Install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extensions for VS Code. **Do not install the Prettier extension**

2. Clone the repo and run:

```
cp .env.example .env
```

```
yarn
```

```
yarn dev
```

## Test

```
yarn test
```

## Troubleshooting

### Error: Cannot find module 'node:path'

Solution: Use Node.js v16

---

### Error: Command failed: node /path/to/project/node_modules/esbuild/bin/esbuild --version dyld: Symbol not found: \_SecTrustEvaluateWithError

Solution:

- Stop using `npm` or `yarn` for this project
- Install [pnpm](https://pnpm.io)
- Remove `node_modules`
- Remove `yarn.lock` (if exists)
- Remove `package-lock.json` (if exists)
- Add the following to `package.json`

```
"devDependencies":
    "esbuild-wasm":"latest",
},
"pnpm":{
    "overrides":{
        "esbuild":"npm:esbuild-wasm@latest"
    }
},
```

Download the dependencies:

```
pnpm i
```

Run the project:

```
pnpm run dev
```

## Credits

This is a fork of [https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier)
