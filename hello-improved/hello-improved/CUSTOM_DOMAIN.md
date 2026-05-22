# Free Custom Domain Setup — `czhewei.is-a.dev`

## What you get
`https://czhewei.is-a.dev` instead of `https://czhewei.github.io/hello`

This is completely free via [is-a.dev](https://is-a.dev), a community-maintained
project that gives developers a clean subdomain on `.is-a.dev`.

---

## Step 1 — Apply for your subdomain

1. Fork the repo: https://github.com/is-a-dev/register
2. Create a new file at `domains/czhewei.json` with this content:

```json
{
  "owner": {
    "username": "czhewei",
    "email": "czhewei.work@gmail.com"
  },
  "record": {
    "CNAME": "czhewei.github.io"
  }
}
```

3. Open a Pull Request — typically approved within 24–48 hours.

---

## Step 2 — Configure GitHub Pages for the custom domain

Once your PR is merged:

1. Go to your repo → **Settings** → **Pages**
2. Under **Custom domain**, enter: `czhewei.is-a.dev`
3. Click **Save** — GitHub will create a `CNAME` file in your repo root automatically.

---

## Step 3 — Update `package.json` homepage

Change:
```json
"homepage": "https://czhewei.github.io/hello"
```
To:
```json
"homepage": "https://czhewei.is-a.dev"
```

Also remove the `PUBLIC_URL` env var override in `deploy.yml` (or set it to `/`):
```yaml
PUBLIC_URL: '/'
```

---

## Step 4 — Enable HTTPS

Back in **Settings → Pages**, tick **Enforce HTTPS** (available after DNS propagates, usually 10–30 min).

---

## Result

| Before | After |
|--------|-------|
| `https://czhewei.github.io/hello` | `https://czhewei.is-a.dev` |

Your GitHub Actions pipeline handles everything else automatically. 🚀
