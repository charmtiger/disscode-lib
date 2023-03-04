const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')

const spinner = ora('Copy h5 website to docs...')

spinner.start()

// packages/disscode-lib-docs/dist/h5
fs.emptyDirSync(path.resolve(__dirname, '../dist/h5'))

fs.copy(
  // packages/disscode-lib-demo/dist
  path.resolve(__dirname, '../../disscode-lib-demo/dist'),
  path.resolve(__dirname, '../dist/h5')
)
  .then(() => {
    spinner.stop()
  })
  .catch(err => console.error(err))
