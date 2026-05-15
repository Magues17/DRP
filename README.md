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

| Branch    | Purpose                          | URL                       |
| --------- | -------------------------------- | ------------------------- |
| `local`   | Active development               | `localhost:5173`          |
| `staging` | Pre-launch testing on Hostinger  | http://drp.4klabs.net/    |
| `live`    | Production (TBD)                 | _not yet deployed_        |

Pushes to `staging` are built and uploaded to Hostinger automatically by
`.github/workflows/deploy-staging.yml`. See that file's comments for the
required GitHub repository secrets (`FTP_SERVER`, `FTP_USERNAME`,
`FTP_PASSWORD`, `FTP_SERVER_DIR`).

## Replace before launch

- Phone number
- Email address
- Business hours
- License number, if applicable
- Real service photos
- Google Business Profile link
