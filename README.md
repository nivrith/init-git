# init-git

[![CircleCI](https://circleci.com/gh/nivrith/init-git/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/init-git/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/init-git.svg)](https://www.npmjs.com/package/init-git)
[![node](https://img.shields.io/node/v/init-git.svg)](https://www.npmjs.com/package/init-git)
[![License MIT](https://img.shields.io/github/license/nivrith/init-git.svg)](https://github.com/nivrith/init-git/blob/master/LICENSE)

Initialize git repository at given directory path

## Highlights

- Written in Typescript

## Usage

> Initialize git repository at given directory path

```js

  const { initGit } = require('init-git');

  initGit('./my-git-repo')
  .then(result => console.log(result)) // true

  initGit('bad-path')
  .catch(error => console.log(error.message)) // Invalid path: bath-path

```

## License

MIT © [Nivrith](https://github.com/nivrith)
