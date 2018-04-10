const rollup = require('rollup').rollup;
const bundles = require('./bundles');
const config = require('./rollup.config');
const fs = require('fs-extra');

const config = require('../config');

const roll = (format, name, conf) => {
  rollup(
    config(conf.compress, conf.polyfills, conf.autoDefine)
  ).then(bundle => bundle
    .write({
      format,
      name: conig.name,
      file: config.output + '/' + name + '.js'
    })
  );
}

if (fs.pathExistsSync('dist')) {
  fs.removeSync('dist')
}

for (const format in bundles) {
  roll(format.replace(/\d+/g, ''), format, bundles[format]);
}
