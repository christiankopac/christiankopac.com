# Deployment Guide

## Netlify Deployment

This website is configured for deployment on Netlify with optimized settings for Gatsby v5.

### Configuration Files

- **netlify.toml**: Build configuration and optimization settings
- **.nvmrc**: Node.js version specification (18.19.0)

### Build Settings

The following settings are configured in `netlify.toml`:

**Build Command:** `npm run build`
**Publish Directory:** `public`
**Node Version:** 18.19.0

### Build Environment

The build uses the following environment settings:

```toml
NODE_VERSION = "18.19.0"
NPM_FLAGS = "--legacy-peer-deps"
```

The `--legacy-peer-deps` flag is required due to some peer dependency warnings in the Gatsby ecosystem. This is a known issue and doesn't affect functionality.

### Automatic Optimizations

Netlify will automatically:

- Detect and use `@netlify/plugin-gatsby` for Gatsby-specific optimizations
- Bundle and minify CSS
- Bundle and minify JavaScript
- Compress images
- Generate pretty URLs
- Set appropriate cache headers

**Note:** The `gatsby-plugin-netlify` package in your Gatsby config (gatsby-config.js) generates `_headers` and `_redirects` files during the build. Netlify automatically processes these files - no additional Netlify Build plugins are needed.

### Security Headers

The deployment includes security headers:

- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Caching Strategy

**Static Assets** (`/static/*`, `*.js`, `*.css`):
- Cache-Control: `public, max-age=31536000, immutable`
- These files are cached for 1 year as they have content hashes

**Page Data** (`/page-data/*`):
- Cache-Control: `public, max-age=0, must-revalidate`
- Always fetches fresh data for dynamic content

### Sharp Image Processing

The `sharp` library (required for image optimization) will install correctly in Netlify's build environment. If you encounter build errors locally due to Sharp, this is expected and won't affect production deployment.

### First Deployment

When deploying for the first time:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**: These should auto-detect from `netlify.toml`
3. **Environment Variables**: None required for basic deployment
4. **Deploy**: Netlify will automatically install dependencies and build

### Build Time

Expected build time: 3-8 minutes depending on:
- Number of MDX files to process
- Image optimization requirements
- Cold build vs cached build

### Troubleshooting

**Build Fails with Sharp Errors:**
- Netlify's build environment should handle Sharp automatically
- Ensure Node.js version is 18.x or higher
- Check that `NPM_FLAGS = "--legacy-peer-deps"` is set in netlify.toml

**Build Succeeds but Site Doesn't Load:**
- Check Netlify deploy logs for errors
- Verify `public` directory is being published
- Check browser console for JavaScript errors

**Outdated Content:**
- Clear Netlify's cache: Deploy Settings → Build & Deploy → Clear Cache
- Trigger a new deploy

### Manual Deployment

To deploy manually:

```bash
# Clean previous builds
npm run clean

# Install dependencies
npm install --legacy-peer-deps

# Build for production
npm run build

# The public/ directory is now ready for deployment
```

### Continuous Deployment

Netlify automatically deploys when:
- Changes are pushed to the main branch
- Pull requests are merged (creates preview deployments for PRs)

### Performance

Gatsby v5 includes several performance improvements:
- Partial Hydration
- Script loading optimization
- Improved image loading with gatsby-plugin-image

Expected Lighthouse scores:
- Performance: 90-100
- Accessibility: 90-100
- Best Practices: 90-100
- SEO: 90-100

### Additional Resources

- [Netlify Gatsby Documentation](https://docs.netlify.com/integrations/frameworks/gatsby/)
- [Gatsby v5 Release Notes](https://www.gatsbyjs.com/docs/reference/release-notes/v5.0/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)

---

## Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run develop

# Access at http://localhost:8000
# GraphQL playground at http://localhost:8000/___graphql
```

## Production Build (Local)

```bash
# Clean cache
npm run clean

# Build
npm run build

# Serve locally (requires gatsby-cli)
gatsby serve
```
