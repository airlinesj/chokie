# Getting Started - Step by Step

Follow these exact steps to get your birthday website running!

## Prerequisites Check

Before starting, make sure you have:

- Node.js installed (download from [https://nodejs.org/](https://nodejs.org/))
- Internet connection (for downloading packages)
- VS Code or any text editor (optional, but recommended)

Check if Node.js is installed:

```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js first.

## Step-by-Step Instructions


### Step 1: Navigate to Project Directory

Open terminal/command prompt and run:

```bash
cd /home/julius/Desktop/chokie
```

### Step 2: Install All Dependencies


This will download and install Angular and other required packages (~200MB):

```bash
npm install
```

⏳ **Wait time**: 2-5 minutes depending on internet speed
☕ Good time to grab a coffee!

### Step 3: Create Assets Folder

Create a folder for your images:

```bash
mkdir -p src/assets
```

### Step 4: Add Your Photos


Copy these photos to `src/assets/` folder:

**Essential Photos:**

- `chokie-main.jpg` - Main birthday photo for landing page
- `chokie-1.jpg` to `chokie-5.jpg` - Gallery photos (5 photos total)

**Photo Tips:**

- Use JPG format for best quality
- Keep files under 500KB each
- Square aspect ratio works best (500x500px)
- Clear, well-lit photos look great with glass morphism

### Step 5: Start Development Server

Run this command to start the website:

```bash
npm start
```

The server should start within 30 seconds. You'll see:

```text
✔ Compiled successfully.
⠋ Building...
Application bundle generation complete. [2.345 seconds]

Watch mode enabled. Watching for file changes in .../chokie
Local:            http://localhost:4200/
```

### Step 6: Open in Browser


Click or copy this link in your browser:

```text
http://localhost:4200
```

## What You Should See

### Landing Page (/)

- Loading spinner for 2 seconds ⏳
- Birthday greeting "Happy Birthday Chokie"
- Main image (chokie-main.jpg)
- "Let's Celebrate" button

### Home Page (/home)

- Sticky navbar at top
- Heartfelt friendship appreciation message
- "View Appreciation Gallery" button

### Appreciation Page (/appreciation)

- Photo gallery with sliding images
- Auto-plays every 5 seconds
- Manual navigation arrows
- Dot indicators to jump to specific photos
- Instagram link at bottom

## Common Issues & Solutions

### "npm: command not found"

**Problem**: Node.js not installed
**Solution**: Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)

### "Port 4200 already in use"

**Problem**: Another application using port 4200
**Solution**:

```bash
# Use different port
ng serve --port 4300
# Then open: http://localhost:4300
```

### "Images not showing"

**Problem**: Photos not in right location
**Solution**:

1. Check photos are in: `src/assets/` folder
2. Check exact names: `chokie-main.jpg`, `chokie-1.jpg`, etc.
3. Refresh browser (Ctrl+F5 or Cmd+Shift+R)

### "Module not found errors"

**Problem**: Incomplete npm install
**Solution**:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### "Styles look broken"

**Problem**: CSS not loading
**Solution**:

```bash
# Stop server (Ctrl+C)
npm install
npm start
# Open http://localhost:4200
```

## Make It Your Own

### Change the Name

Replace "Chokie" with the actual name in:

1. `src/app/pages/landing/landing.component.ts` - Change `<h2 class="name">Chokie 🎀</h2>`
2. `src/app/pages/home/home.component.ts` - In title
3. `src/index.html` - Change `<title>`

### Change Text Messages

Edit these files:

- **Landing**: `src/app/pages/landing/landing.component.ts`
- **Home**: `src/app/pages/home/home.component.ts`
- **Gallery**: `src/app/pages/appreciation/appreciation.component.ts`

### Change Colors

Edit `src/styles.css`:

```css
:root {
  --primary-pink: #ec407a;      /* Change to any color */
  --light-pink: #f06292;
  --darker-pink: #c2185b;
}
```

## Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build
# Output: dist/chokie-birthday/

# Watch for changes (compile automatically)
npm run watch

# Stop the development server
# Press: Ctrl+C in terminal
```

## Next: Share Your Website

### Share Locally

Share the link: `http://localhost:4200`
(Only works on your computer while server is running)

### Deploy Online (Free Options)

### Option 1: GitHub Pages

```bash
npm run build
# Upload dist/chokie-birthday/ to GitHub Pages
```

### Option 2: Netlify

- Go to netlify.com
- Drag & drop `dist/chokie-birthday/` folder
- Get a live link instantly!

### Option 3: Vercel

- Go to vercel.com
- Connect Your GitHub repository
- Auto-deploys on push

## File Locations Quick Reference

```text
/home/julius/Desktop/chokie/
├── src/assets/                    👈 Your photos go here
├── src/styles.css                 👈 Change colors here
├── src/app/pages/landing/         👈 Landing page text
├── src/app/pages/home/            👈 Home page text
└── src/app/pages/appreciation/    👈 Gallery captions
```

## Development Tips

### Edit & See Changes Live

1. Edit any file (e.g., `styles.css`)
2. Save the file (Ctrl+S)
3. Browser auto-refreshes!
4. No need to restart server

### Add More Photos

1. Add photos to `src/assets/`
2. Edit `appreciation.component.ts`
3. Add to the `photos` array
4. Restart server to see changes

### Debug in Browser

- Open Developer Tools (F12)
- Check Console for errors
- Use Elements tab to inspect HTML

## Once You're Happy

### Stop the Server

Press `Ctrl+C` in the terminal

### Build for Sharing

```bash
npm run build
```

This creates optimized files in `dist/chokie-birthday/` ready to deploy!

## Support & Documentation

- **Full Guide**: See `README.md`
- **Project Details**: See `PROJECT-SUMMARY.md`
- **File Structure**: See `FILE-STRUCTURE.md`
- **Angular Docs**: [https://angular.io/docs](https://angular.io/docs)

## Quick Checklist

- [ ] Node.js installed? (`node --version`)
- [ ] In correct folder? (`cd /home/julius/Desktop/chokie`)
- [ ] Dependencies installed? (`npm install` completed)
- [ ] Images added? (5-6 JPG files in `src/assets/`)
- [ ] Server running? (`npm start` successful)
- [ ] Browser open? ([http://localhost:4200](http://localhost:4200))
- [ ] Can you see landing page? ✨

## You're All Set! 🎉

Your birthday website is ready to wow Chokie!

### Features

- ✨ Modern glass morphism design
- 📱 Fully responsive (mobile & desktop)
- 🎠 Auto-playing photo gallery
- 🚀 Smooth animations throughout
- 🎀 Beautiful pink theme
- 💕 Heartfelt appreciation message
- 🔗 Instagram link in footer

Happy celebrating! 🎂💕

For questions, refer to the documentation files in the project folder.
