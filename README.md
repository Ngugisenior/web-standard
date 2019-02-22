<div align="center">
  <h1>@system76/standard</h1>
  <h3>System76 standard JavaScript linting</h3>
  <br>
  <br>
</div>

---

[![Greenkeeper badge](https://badges.greenkeeper.io/system76/standard.svg)](https://greenkeeper.io/)

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
