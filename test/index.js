/**
 * test/index.js
 * Ensures our code lints correctly
 */

const path = require('path')
const standard = require('../src')
const test = require('ava')

function lint (file) {
  return new Promise((resolve, reject) => {
    standard.lintFiles([file], {}, (err, res) => {
      if (err) {
        return reject(err)
      }

      if (res.errorCount === 0 && res.warningCount === 0) {
        return resolve()
      }

      const msg = `${res.errorCount} error/s and ${res.warningCount} warning/s found`
      return reject(new Error(msg))
    })
  })
}

test('lints javascript files correctly', (t) => {
  return t.notThrowsAsync(lint(path.join(__dirname, '_fixture.js')))
})

test('lints vue files correctly', (t) => {
  return t.notThrowsAsync(lint(path.join(__dirname, '_fixture.vue')))
})
