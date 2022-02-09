const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
require('dotenv').config();

const remote_template_url = process.env.REMOTE_TMPL_URL || '/remote_template/remoteEntry.js';

module.exports = {
  moduleFederation: new ModuleFederationPlugin({
    name: "host",
    filename: 'remoteEntry.js',
    remotes: {
      remote_template: `remote_template@${remote_template_url}`,
    },
    exposes: {
      './StoreMessages': './src/services/common/StoreMessages',
    },
    shared: {
      ...deps,
      "@consta/uikit": {
        singleton: true,
        requiredVersion: deps["@consta/uikit"],
      },
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      'react-router-dom': {
        singleton: true,
        version: deps['react-router-dom']
      },
      'mobx-react-lite': {
        singleton: true,
        version: deps['mobx-react-lite']
      },
      mobx: {
        singleton: true,
        version: deps['mobx']
      },
      'highcharts': {
        singleton: true,
        version: deps['highcharts']
      },
      'highcharts-react-official': {
        singleton: true,
        version: deps['highcharts-react-official']
      },
      'ag-grid-community': {
        singleton: true,
        version: deps['ag-grid-community']
      },
      'ag-grid-enterprise': {
        singleton: true,
        version: deps['ag-grid-enterprise']
      },
      'ag-grid-react': {
        singleton: true,
        version: deps['ag-grid-react']
      },
    },
  }),
}
