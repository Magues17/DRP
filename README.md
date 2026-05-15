# Done Right Plumbing Website

React/Vite landing page for Done Right Plumbing in Tarboro, North Carolina.

## Run locally

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build
```

The production files will be created inside the `dist` folder.

## Environments

| Branch    | Purpose                                            | URL                    |
| --------- | -------------------------------------------------- | ---------------------- |
| `local`   | Active development (source code)                   | `localhost:5173`       |
| `staging` | Auto-built artifact pulled by Hostinger — do not edit | http://drp.4klabs.net/ |
| `live`    | Production (TBD)                                   | _not yet deployed_     |

### How deploys work

`.github/workflows/deploy-staging.yml` triggers on every push to `local`.
It runs `npm run build` and force-pushes the compiled `dist/` contents
as a single orphan commit to the `staging` branch. Hostinger's GIT
integration is pointed at `staging` and pulls the result into
`public_html`, so `drp.4klabs.net` is always whatever you last pushed
to `local`.

**Do not commit to `staging` by hand** — anything there is wiped on the
next build.

### Promotion flow

```bash
# edit on local, push, drp.4klabs.net auto-updates
git push origin local
```

## Replace before launch

- Phone number
- Email address
- Business hours
- License number, if applicable
- Real service photos
- Google Business Profile link
