# Deploy to Netlify

This project is configured for easy deployment on Netlify!

## Quick Deploy

### Option 1: Connect via GitHub (Recommended)
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repo (`airlinesj/chokie`)
4. Netlify will automatically detect the configuration from `netlify.toml`
5. Click "Deploy"

### Option 2: Deploy via CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Configuration
The `netlify.toml` file handles:
- ✅ Build command: `npm ci && npm run build`
- ✅ Publish directory: `dist/chokie-birthday`
- ✅ Node.js version: 20
- ✅ Routing configuration for Angular SPA
- ✅ Caching headers optimization

## What Gets Deployed
- Angular production build
- Assets (images, styles, fonts)
- Routing configured for single-page application

## Environment Variables (if needed)
Add in Netlify dashboard under Site Settings > Build & Deploy > Environment

## Troubleshooting
- **Build fails**: Ensure `npm run build` works locally first
- **Routes not working**: Check that routing is configured in `app.routes.ts`
- **Images not loading**: Verify image paths in assets folder

## Local Build Testing
```bash
npm run build
npm install -g http-server
http-server dist/chokie-birthday
```

That's it! Your site will be live at a Netlify URL. 🎉
