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

| Branch          | Purpose                                       | URL                       |
| --------------- | --------------------------------------------- | ------------------------- |
| `local`         | Active development                            | `localhost:5173`          |
| `staging`       | Pre-launch testing — source for the build     | (not served directly)     |
| `staging-build` | Auto-generated build output served by Hostinger | http://drp.4klabs.net/  |
| `live`          | Production (TBD)                              | _not yet deployed_        |

### Why a build branch?

The browser cannot execute the JSX source in `staging` directly. The
GitHub Action `.github/workflows/deploy-staging.yml` runs `npm run build`
on every push to `staging` and force-pushes the resulting `dist/`
contents to `staging-build`. Hostinger's GIT integration pulls from
`staging-build` into `public_html` and serves the compiled site.

### Promotion flow

```bash
# work happens on local
git checkout staging
git merge local
git push                # triggers build → publishes to staging-build → live on drp.4klabs.net
```

## Replace before launch

- Phone number
- Email address
- Business hours
- License number, if applicable
- Real service photos
- Google Business Profile link
