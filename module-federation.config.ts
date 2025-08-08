import { createModuleFederationConfig } from '@module-federation/modern-js';

// const loginCodespaceName = process.env.REMOTE_LOGIN_APP_CODESPACE_SUBDOMAIN;
const remoteLoginURL = process.env.REMOTE_LOGIN_APP_URL;

// const remoteLoginPort = process.env.REMOTE_LOGIN_APP_PORT;

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    // Github codespace specific login remote url
    // loginRemote: `loginRemote@https://${remoteLoginURL}-${remoteLoginPort}.app.github.dev/static/mf-manifest.json`,

    // Vercel specific login remote url
    loginRemote: `loginRemote@${remoteLoginURL}/static/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
