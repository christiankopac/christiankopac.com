# Migration Notes - Gatsby v4 to v5 & React 17 to 18

## Date: 2025-11-13

### Major Updates Completed

#### Core Framework Updates

- ✅ **Gatsby**: v4.6.1 → v5.13.0
- ✅ **React**: v17.0.2 → v18.3.0
- ✅ **React DOM**: v17.0.2 → v18.3.0

#### Gatsby Plugins Updated

All Gatsby plugins updated to v5/v6 compatible versions:

- gatsby-plugin-image: v2.6.0 → v3.13.0
- gatsby-plugin-manifest: v4.6.0 → v5.13.0
- gatsby-plugin-mdx: v3.6.0 → v5.13.0
- gatsby-plugin-offline: v5.6.0 → v6.13.0
- gatsby-plugin-react-helmet: v5.6.0 → v6.13.0
- gatsby-plugin-sharp: v4.6.0 → v5.13.0
- gatsby-plugin-netlify: v4.1.0 → v5.1.0
- gatsby-source-filesystem: v4.6.0 → v5.13.0
- gatsby-transformer-remark: v5.6.0 → v6.13.0
- gatsby-transformer-sharp: v4.6.0 → v5.13.0
- gatsby-remark-\* plugins all updated to v6/v7

#### MDX Updates

- @mdx-js/mdx: v1.0.0 → v2.3.0
- @mdx-js/react: v1.6.22 → v2.3.0

#### Theme UI & Styling

- theme-ui: v0.13.1 → v0.16.0
- @theme-ui/presets: v0.13.1 → v0.16.0
- @emotion/react: v11.7.1 → v11.13.0
- @emotion/styled: v11.6.0 → v11.13.0

#### Other Dependencies

- gsap: v3.9.1 → v3.12.5
- prismjs: v1.26.0 → v1.29.0
- react-spring: v9.4.2 → v9.7.0
- remark-emoji: v3.0.2 → v4.0.1

#### Dev Dependencies

- prettier: v2.5.1 → v3.3.0
- typescript: Added v5.5.0

### Packages Removed

#### Deprecated Packages

- ❌ **gatsby-image** - Replaced by gatsby-plugin-image (modern image component)
- ❌ **gatsby-plugin-transition-link** - Had peer dependency conflicts with React 18
- ❌ **react-pose** - Deprecated animation library
- ❌ **gatsby-transformer-mdx-content-pages** - No longer maintained
- ❌ **gatsby-plugin-netlify** - Replaced by gatsby-adapter-netlify (auto-installed by Netlify in Gatsby v5)

### Configuration Changes

#### gatsby-config.js

1. **gatsby-plugin-mdx**: Removed `defaultLayouts` option (deprecated in v5)
   - Layouts should now be handled via wrapper components or page templates

2. **gatsby-plugin-netlify**: Completely removed from configuration
   - Gatsby v5 uses adapters instead of deployment plugins
   - Netlify automatically installs and uses `gatsby-adapter-netlify`
   - Headers and redirects now configured in `netlify.toml`

#### gatsby-node.js

1. **GraphQL query updates for MDX v2**:
   - Changed `fileAbsolutePath` to `internal.contentFilePath`
   - Required for Gatsby v5 compatibility with MDX nodes

#### Resolution Updates

- graphql: ^15.4.0 → ^16.8.0
- webpack: ^5.24.2 → ^5.90.0
- Removed graphql-compose resolution (no longer needed)

### Known Issues

#### Sharp Installation (Build Environment)

The `sharp` image processing library requires native binaries that failed to download in the current build environment due to proxy restrictions. This is expected to work correctly in production environments (Netlify, Vercel, etc.).

**If you encounter Sharp errors:**

```bash
npm rebuild sharp --platform=linux --arch=x64
```

Or in production/deployment:

```bash
npm install --legacy-peer-deps
```

The `--ignore-scripts` flag was used during migration to bypass Sharp's postinstall script. In production, allow scripts to run normally.

### Migration Benefits

1. **Security**: Updated packages address multiple security vulnerabilities
2. **Performance**: Gatsby v5 includes significant performance improvements
3. **React 18**: Access to new React 18 features (concurrent rendering, automatic batching, transitions)
4. **Better Image Handling**: Modern gatsby-plugin-image instead of deprecated gatsby-image
5. **Updated MDX**: MDX v2 with better TypeScript support and performance
6. **Modern Tooling**: Updated Prettier, TypeScript, and build tools

### Breaking Changes to Watch For

1. **MDX v2**: Syntax changes if you use advanced MDX features
2. **React 18**: Review any class components for lifecycle method changes
3. **gatsby-plugin-transition-link removed**: Need to implement page transitions differently if required
4. **Layout handling**: If you were using defaultLayouts in MDX config, implement wrapper components instead

### Security Vulnerabilities

Some dependencies still have warnings (see `npm audit`). Most are:

- Low/moderate severity
- In transitive dependencies
- Waiting for upstream package updates

Notable vulnerabilities to monitor:

- `gatsby-plugin-react-svg` depends on deprecated packages
- Some Babel plugins show deprecation warnings (functionality still works)

### Next Steps

1. Test the build in Netlify/production environment where Sharp should install correctly
2. Review page transitions implementation if gatsby-plugin-transition-link was heavily used
3. Consider implementing alternatives for removed packages if features are missed
4. Monitor for Gatsby v5 updates and plugin compatibility improvements
5. Review and test all MDX content with MDX v2

### Deployment Instructions

When deploying:

1. Ensure Node.js version is 18.x or higher
2. Use `npm install --legacy-peer-deps` during build
3. Sharp should compile automatically in CI/CD environments
4. Test thoroughly on staging before production deployment

### References

- [Gatsby v5 Release Notes](https://www.gatsbyjs.com/docs/reference/release-notes/v5.0/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [MDX v2 Migration Guide](https://mdxjs.com/migrating/v2/)
