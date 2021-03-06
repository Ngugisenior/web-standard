<div align="center">
  <h1>@system76/standard</h1>
  <h3>System76 standard JavaScript linting</h3>
  <br>
  <br>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@system76/standard/">
    <img src="https://img.shields.io/npm/v/@system76/standard.svg" alt="npm">
  </a>

  <a href="https://travis-ci.org/system76/web-standard">
    <img src="https://travis-ci.org/system76/web-standard.svg" alt="travis-ci">
  </a>

  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="renovate">
  </a>

  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standard">
  </a>
</p>

---

This is a System76 extension of [standard](https://github.com/feross/standard)
that includes many plugins for tools we use in our projects. It _does not_
change any standard rules. It does however add new ones.

## Using

```
npm install --save-dev @system76/standard
```

Then add a convenience function to your `package.json`:

```json
{
  "scripts": {
    "lint": "standard"
  }
}
```

## Deployment

Simply push to master and travis will do all the work for you!
