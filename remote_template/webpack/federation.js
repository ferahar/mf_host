const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;

const app_host_url = process.env.REMOTE_HOST_URL || '/remote_host/remoteEntry.js';

module.exports = {
  moduleFederation: new ModuleFederationPlugin({
    name: "remote_template",
    filename: 'remoteEntry.js',
    remotes: {
      host: `host@${app_host_url}`,
    },
    exposes: {
      './Kfa': './src/external-modules/kfa-module/Kfa',
      './KfaToolbar': './src/external-modules/kfa-module/KfaToolbar',
      './routes': './src/external-modules/kfa-module/routes',
    },
    shared: {
      ...deps,
      "@consta/uikit": {
        singleton: true,
      },
      react: {
        singleton: true,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      'react-router-dom': {
        singleton: true,
      },
      'mobx-react-lite': {
        singleton: true,
        version: deps['mobx-react-lite']
      },
      mobx: {
        singleton: true,
        version: deps['mobx']
      },
    },
  }),
}
