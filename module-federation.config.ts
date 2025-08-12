import { createModuleFederationConfig } from '@module-federation/modern-js';

const loginAppNameForCodespace =
  process.env.REMOTE_LOGIN_APP_CODESPACE_SUBDOMAIN;
const remoteLoginAppPortForCodespace = process.env.REMOTE_LOGIN_APP_PORT;

const remoteLoginURLForVercel = process.env.REMOTE_LOGIN_APP_URL;

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    // Github codespace specific login remote url
    // loginRemote: `loginRemote@https://${loginAppNameForCodespace}-${remoteLoginAppPortForCodespace}.app.github.dev/static/mf-manifest.json`,

    // Vercel specific login remote url
    loginRemote: `loginRemote@${remoteLoginURLForVercel}/static/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
