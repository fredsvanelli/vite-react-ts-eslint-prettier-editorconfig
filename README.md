# React 18, Vite 5, Typescript 5, Vitest 1, Eslint 8, Prettier 3, EditorConfig

A starter for React with Typescript with the blazing fast Vite, strong Vitest framework and all static code testing with Eslint and formatting with Prettier and EditorConfig.

## Requirements

- [Node.js](https://nodejs.org/) v18 (recommended to install via nvm)

## Installation & run

1. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extensions for VS Code. **Do not install the Prettier extension** (Prettier will be managed by ESLint)

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

To see on Vitest UI

```
yarn test --ui
```

To run with coverage reports (the results will output to `/coverage/index.html`)

```
yarn coverage
```

## Troubleshooting

Error:

```
Cannot find module 'node:path'
```

Solution: Use Node.js v18

---

Error:

```
Command failed: node /path/to/project/node_modules/esbuild/bin/esbuild --version dyld: Symbol not found: \_SecTrustEvaluateWithError
```

Solution:

1. Stop using `npm` or `yarn` for this project
2. Install [pnpm](https://pnpm.io)
3. Remove `node_modules`
4. Remove `yarn.lock` (if exists)
5. Remove `package-lock.json` (if exists)
6. Add the following to `package.json`

```
"devDependencies": {
    // ... other dependencies
    "esbuild-wasm":"latest",
},
"pnpm": {
    "overrides": {
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
