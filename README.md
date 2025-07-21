# masterApp_modernjs_onemoretry

## Setup

Install the dependencies:

```bash
npm install
```

## Get Started

Start the dev server:

```bash
npm dev
```

Enable optional features or add a new entry:

```bash
npm new
```

Build the app for production:

```bash
npm build
```

Preview the production build locally:

```bash
npm serve
```

For more information, see the [Modern.js documentation](https://modernjs.dev/en).

## Deployment

### Configuring `dev.assetPrefix` for GitHub Codespaces

When running this Modern.js remote app on a [GitHub Codespace](https://docs.github.com/en/codespaces), you need to set the `dev.assetPrefix` in your `modern.config.ts` to your deployed Codespaces domain. This ensures that assets are loaded correctly from the remote environment.

#### Example

Suppose your Codespace is running at:

```
https://<your-github-codespace-domain>-<port>.github.dev
```

Update your `modern.config.ts` as follows:

```typescript
export default {
  dev: {
    assetPrefix: 'https://<your-github-codespace-domain>-<port>.github.dev',
    port: <port>
  },
  // ...other config
}
```

> **Tip:** You can find your Codespaces domain by opening the app in the browser from Codespaces.

---

**Note:**
If you move or restart your Codespace, the domain may change. Always update `dev.assetPrefix` to match your current Codespaces URL.

### Module Federation: [Remotes Configuration](https://modernjs.dev/guides/topic-detail/module-federation/usage.html#use-modules-in-consumer)

Now, modify the consumers code to use the modules exported by producer
Under module-federation.config.ts file add remotes array

#### Example

```typescript
export default {
  remotes: {
    remoteApp: 'remoteApp@https://<your-github-codespace-domain>-<port>.github.dev/static/mf-manifest.json',
    anotherRemoteApp: 'anotherRemoteApp@https://cdn.example.com/anotherRemoteEntry.js',
  },
  // ...other config
}
```

> **Tip:** You can find your Codespaces domain by opening the app in the browser from Codespaces.

---

**Note:**
If you move or restart your Codespace, the domain may change. Always update the things accordingly to match your current Codespaces URL.
