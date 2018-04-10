# vue-simple-rollup-lib-starter
A simple vue lib starter with rollup

## Usage

Just download as ZIP or clone, delete `.git` folder and edit `package.json` to suit your project.

## NPM scripts

```bash
# Runs example & docs with hot-reload
npm run dev

# Builds a lib for different ES versions and browsers
npm run build

# Builds docs for gitpages
npm run docs

# Build docs and lib, increment version, commit everything, publish to npm and push to git
npm run patch # increment patch version
npm run minor # increment minor version
npm run major # increment major version
```

## Project directory outline

```bash
./ # Root
 ├── build/
 │    ├── bundles.js # A bundle config, defines polyfills and etc.
 │    ├── rollup.config.js # Rollup config.
 │    └── index.js
 ├── example/
 │    ├── src/
 │    ├── webpack.config.js # Webpack config for the example.
 │    └── .babelrc # Babel config for the example.
 ├── lib/
 │    ├── YourComponent.vue
 │    └── index.js
 └── config.js
```

## Configuration

### `./config.js`

```js
module.exports = {
  // Lib main entry
  entry: 'lib/index.js',

  // Lib entry with auto-install to window.Vue
  entryWithAutoDefine: 'lib/index.auto.js',

  // Lib compiled output
  output: 'dist',

  // Lib name
  name: ''
}
```

### `./build/bundles.js`

A bundle config, defines polyfills and etc.

```js
module.exports = exports = {
  // Key - rollup build format
  ['cjs' || 'es6' || 'es7' || 'umd' || 'iife']: {
    // Whether to minify the output
    compress: true/false,

    // Whether to auto-install the lib in this build
    autoDefine: true/false,

    // Define polyfills for the build
    polyfills: {
      // Polyfill arrow functions
      arrows: true/false,

      // Polyfill Object.assign and friends
      assign: true/false,

      // Polyfill async/await with promises
      async: true/false,

      // Polyfill promises & fetch
      promise: true/false
    },
  }
}
```
