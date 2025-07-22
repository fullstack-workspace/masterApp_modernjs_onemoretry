import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

const codespaceName = process.env.MASTER_APP_CODESPACE_SUBDOMAIN;
const port = Number.parseInt(process.env.MASTER_APP_PORT || '3052', 10);

export default defineConfig({
  dev: {
    assetPrefix: `https://${codespaceName}-${port}.app.github.dev/`,
    port: port,
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
