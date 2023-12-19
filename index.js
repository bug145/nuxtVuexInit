import { defu } from 'defu';
import { resolve } from 'path';

export default async function installer() {
  this.options.build = defu({ transpile: ['nuxt-server-client-init'] }, this.options.build);

  this.nuxt.hook('ready', async nuxt => {
    await this.addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'nuxt-server-client-init/vuex.plugin.module.js',
    });
  })
}

module.exports.meta = require('./package.json');
