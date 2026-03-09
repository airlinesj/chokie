# Quick Start Guide for Happy Birthday Chokie Website

## Installation & Setup

### Step 1: Install Node.js (if not already installed)
- Download from: https://nodejs.org/
- Get the LTS (Long Term Support) version

### Step 2: Navigate to Project Directory
```bash
cd /home/julius/Desktop/chokie
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Add Your Images
1. Create a folder: `src/assets/`
2. Add these images:
   - `chokie-main.jpg` - Landing page image (250x250px)
   - `chokie-1.jpg` to `chokie-5.jpg` - Gallery images (500x500px each)

See `src/assets/README.md` for detailed image requirements.

### Step 5: Start Development Server
```bash
npm start
```

The site will open at: `http://localhost:4200/`

## Navigation

1. **Landing Page** - Opens first, shows birthday greeting
2. Click **"Let's Celebrate"** → Goes to Home page
3. Click **"View Appreciation Gallery"** → Goes to appreciation page with photo slider
4. Footer has Instagram link

## Customization

### Change Messages
Edit text in component files:
- `src/app/pages/landing/landing.component.ts` - Landing page text
- `src/app/pages/home/home.component.ts` - Friendship message
- `src/app/pages/appreciation/appreciation.component.ts` - Gallery captions

### Change Colors
Edit color variables in `src/styles.css`:
```css
:root {
  --primary-pink: #ec407a;  /* Main pink color */
  --light-pink: #f06292;    /* Light pink */
  --darker-pink: #c2185b;   /* Dark pink */
}
```

### Change Auto-Slide Duration
In `src/app/pages/appreciation/appreciation.component.ts`, find:
```typescript
}, 5000); // Change 5000 to milliseconds
```
- 5000 = 5 seconds
- 3000 = 3 seconds
- 8000 = 8 seconds

## Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Watch mode (compiles on file changes)
npm run watch
```

## Troubleshooting

### Error: "npm: command not found"
- Node.js not installed. Download from https://nodejs.org/

### Port 4200 already in use
- Change by running: `ng serve --port 4300`

### Images not showing
- Make sure images are in `src/assets/` folder
- Check exact filenames match: `chokie-main.jpg`, `chokie-1.jpg`, etc.
- Try refreshing the page (Ctrl+F5 or Cmd+Shift+R)

### Styling looks broken
- Clear browser cache
- Stop server (Ctrl+C)
- Run `npm install` again
- Run `npm start`

## Production Deployment

To build for production:
```bash
npm run build
```

Output files will be in `dist/chokie-birthday/` folder.

## Support

For Angular questions: https://angular.io/docs
For styling help: CSS3 Backdrop Filter documentation

---

Enjoy the celebration! 🎉💕✨
