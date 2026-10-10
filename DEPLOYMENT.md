# Deployment

How heykaan.dev moves from branch publishing to the GitHub Actions workflow in `.github/workflows/deploy.yml`, and how to roll back.

## Current production (before launch)

- GitHub Pages, source “Deploy from a branch”: `main`, repository root (Jekyll build by GitHub's `pages-build-deployment`).
- Published commit: `e423059`, tagged `pre-astro-launch-2026-09`.
- Custom domain `heykaan.dev` (apex A records to GitHub Pages; `www` CNAME to `kaanddemir.github.io`), HTTPS enforced.

## Why the order matters

While Pages publishes from the `main` branch, any push to `main` is published as-is. The Astro source has no root `index.html`, so merging before the source is switched would briefly publish a broken site. The Pages source must therefore be “GitHub Actions” **before** the Astro commits reach `main`. Switching the source is expected to leave the current deployment live until the workflow deploys; step 3 checks this before anything else changes.

## Launch

1. **Publish the rollback tag**, then confirm it on the remote:
   ```sh
   git push origin pre-astro-launch-2026-09
   git ls-remote --tags origin pre-astro-launch-2026-09
   ```
2. **Create a rollback branch** from the tag, so the old site can be republished without touching `main`:
   ```sh
   git push origin pre-astro-launch-2026-09^{commit}:refs/heads/legacy-site
   ```
3. **Switch the Pages source**: Settings → Pages → Build and deployment → Source: **GitHub Actions**. Keep the custom domain `heykaan.dev` and **Enforce HTTPS**. Check that https://heykaan.dev/ still serves the old site.
4. **Check the environment**: Settings → Environments → `github-pages` → deployment branches must allow `main`.
5. **Merge** `astro-migration` into `main` (a fast-forward) and push `main`. The push starts “Deploy to GitHub Pages”.
6. **Watch the run** in Actions until both `build` and `deploy` succeed.
7. **Verify the live site**:
   - HTTPS, and the `http://` and `www` redirects;
   - `/`, `/readscore/`, `/ux-heatgrid/`, `/soft-blackout/`, and `/about/` (redirects to `/#about`);
   - an unknown path returns status 404 with the Astro page;
   - `sitemap.xml`, `robots.txt`, `manifest.json`, the icons and the four images in `/assets/og/`;
   - page titles and social metadata;
   - social-card previews.

## Rollback

Use this if the Astro site must be taken down. It does not reset or force-push `main`.

1. **Stop new deployments**: Actions → “Deploy to GitHub Pages” → **Disable workflow**. This prevents a push to `main` from redeploying the Astro site mid-rollback.
2. **Publish the old site**: Settings → Pages → Source: **Deploy from a branch**, branch `legacy-site`, folder `/ (root)`. Confirm the custom domain still shows `heykaan.dev` and HTTPS stays enforced (the branch contains the same `CNAME`).
3. **Wait for** the `pages-build-deployment` run for `legacy-site` to finish.
4. **Verify**: https://heykaan.dev/ returns the old homepage (title “heykaan.dev | Kaan Demir”), and its HTML matches `git show pre-astro-launch-2026-09:index.html`.

To relaunch later, re-enable the workflow, set the source back to **GitHub Actions**, and run the workflow manually from `main`.
