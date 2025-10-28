# SEO & Pages setup

## Files
- robots.txt: allows all, sitemap at `PRIMARY_DOMAINBASE_PATH/sitemap.xml`
- .nojekyll: disables Jekyll on GitHub Pages
- scripts/generate_sitemap.mjs: Node script (no deps) to build `sitemap.xml`
- .github/workflows/sitemap.yml: auto-generate sitemap on push to `main`

## Environment
- PRIMARY_DOMAIN: e.g. `https://oneofhersisters.github.io` or your custom domain (`https://mysite.com`)
- BASE_PATH: `"/piespatron"` for user/repo pages; empty `""` for custom domain or org/user root

## Meta tags template (per page)
In `<head>`:

```
<title>{{PAGE_TITLE}} | Pies Patron</title>
<meta name="description" content="{{PAGE_DESCRIPTION}}">
<link rel="canonical" href="PRIMARY_DOMAINBASE_PATH{{PAGE_PATH}}">
<meta name="robots" content="index,follow">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Pies Patron">
<meta property="og:url" content="PRIMARY_DOMAINBASE_PATH{{PAGE_PATH}}">
<meta property="og:title" content="{{PAGE_TITLE}}">
<meta property="og:description" content="{{PAGE_DESCRIPTION}}">
<meta property="og:image" content="PRIMARY_DOMAINBASE_PATH/og-default.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{PAGE_TITLE}}">
<meta name="twitter:description" content="{{PAGE_DESCRIPTION}}">
<meta name="twitter:image" content="PRIMARY_DOMAINBASE_PATH/og-default.jpg">

<meta name="google-site-verification" content="SEARCH_CONSOLE_VERIFICATION">
```

- `{{PAGE_PATH}}`: `/`, `/credits.html`, etc.
- Ensure single `<h1>` per page.
- Add meaningful `alt` to images; use `loading="lazy"` for images below the fold.

## Generate sitemap locally
```
PRIMARY_DOMAIN=https://oneofhersisters.github.io \
BASE_PATH=/piespatron \
npm run sitemap
```

## GitHub Actions
- Add repository secrets: `PRIMARY_DOMAIN`, `BASE_PATH` under Settings → Secrets and variables → Actions
- On push to `main`, sitemap.xml will be updated and committed automatically.

## Canonical/redirects on GH Pages
- No server redirects. Use `<link rel="canonical">` on pages.
- For canonical host/HTTPS/www handling, use custom domain + DNS/Cloudflare.
