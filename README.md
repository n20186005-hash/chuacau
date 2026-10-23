# Chùa Cầu Hội An visitor guide

Independent Vietnamese, English and Traditional Chinese guide, built with Astro SSR on Cloudflare Workers. The domain is https://chuacau.org/ and Worker project is `chuacau`.

```sh
CI=true corepack pnpm install --frozen-lockfile
npm run check
npm run build
npx wrangler deploy --dry-run
```

`pnpm-lock.yaml` is the authoritative lockfile for the declared pnpm package manager. Wrangler is pinned directly to the same version already required by the adapter.

The locked native package build scripts are allowed only for the reviewed esbuild and workerd versions in `pnpm-workspace.yaml`; all other package build scripts remain subject to pnpm policy. The build sanitizes generated public module identifiers. Wrangler must use the adapter-generated configuration and guarded SSR entry, including for static legal routes. Source configuration keeps `run_worker_first` enabled.

See [image credits](CREDITS.md). The source references on each language homepage distinguish restoration, current administration, ticket packages and third-party map hours. Do not convert map reviews into a site-owned aggregate rating or publish map hours as unconditional structured hours.
