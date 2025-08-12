import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// Github codespace specific
const codespaceName = process.env.MASTER_APP_CODESPACE_SUBDOMAIN;
const port = Number.parseInt(process.env.MASTER_APP_PORT || '3052', 10);

// Vercel speicifc
const assetPrefix = process.env.MASTER_APP_URL;

export default defineConfig({
  dev: {
    // assetPrefix: `https://${codespaceName}-${port}.app.github.dev/`,
    // port: port,

    assetPrefix: assetPrefix,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack',
    }),
    moduleFederationPlugin(),
  ],
});
