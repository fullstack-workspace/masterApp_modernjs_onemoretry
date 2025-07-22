import { createModuleFederationConfig } from '@module-federation/modern-js';

const loginCodespaceName = process.env.REMOTE_LOGIN_APP_CODESPACE_SUBDOMAIN;
const loginPort = process.env.REMOTE_LOGIN_APP_PORT;

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: `remote@https://${loginCodespaceName}-${loginPort}.app.github.dev/static/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
