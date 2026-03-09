# Happy Birthday Chokie Website 🎉

A beautiful, modern celebration website built with Angular featuring glass morphism design, smooth animations, and responsive mobile-first layout.

## Features ✨

- 🎨 **Glass Morphism Design** - Apple-inspired frosted glass UI
- 📱 **Fully Responsive** - Perfect on mobile and desktop
- ✨ **Smooth Animations** - Elegant transitions and floating effects
- 🖼️ **Photo Gallery** - Image slider with navigation
- 💕 **Beautiful Typography** - Roboto font with gradient text effects
- 🌸 **Modern Aesthetics** - White and pink color fusion

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm start
```
Open http://localhost:4200 in your browser

### 3. Deploy to Netlify
**See [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md) for deployment instructions**

Quick option:
- Push to GitHub
- Connect repo to Netlify
- Auto-deploys on every push!

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── landing/      # Loading animation & greeting
│   │   ├── home/         # Friendship message
│   │   └── appreciation/ # Photo gallery
│   ├── app.routes.ts     # Navigation
│   └── app.component.ts  # Root component
├── assets/               # Images & resources
├── index.html            # Main HTML
├── main.ts              # Bootstrap
└── styles.css           # Global styles
```

## Development

- **Build**: `npm run build`
- **Test**: `npm test`
- **Watch Build**: `npm run watch`

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
   Create an `assets` folder in `src/` and add the following images:
   - `chokie-main.jpg` - Main image for landing page (recommended: 250x250px)
   - `chokie-1.jpg` through `chokie-5.jpg` - Gallery images (recommended: square aspect ratio)

3. **Start Development Server**:
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Navigation Flow

1. **Landing Page** (`/`) - Shows loading animation, birthday greeting with main image
2. **Home Page** (`/home`) - Friendship appreciation message
3. **Appreciation Page** (`/appreciation`) - Photo gallery with sliding animations
4. **Instagram Link** - Footer copyright links to Instagram profile

## Image Requirements

- **Landing Image**: `src/assets/chokie-main.jpg`
  - Recommended: 250x250px square
  - Format: JPG, PNG
  - Used on landing page

- **Gallery Images**: `src/assets/chokie-1.jpg` to `chokie-5.jpg`
  - Recommended: Square aspect ratio (500x500px or similar)
  - Format: JPG, PNG
  - Auto-sliding gallery with 5-second intervals

## Customization

### Change Colors
Edit `src/styles.css` root colors:
```css
:root {
  --primary-pink: #ec407a;
  --light-pink: #f06292;
  --darker-pink: #c2185b;
  /* ... */
}
```

### Change Text
Update component templates in:
- `src/app/pages/landing/landing.component.ts`
- `src/app/pages/home/home.component.ts`
- `src/app/pages/appreciation/appreciation.component.ts`

### Change Instagram Link
Edit the link in appreciation component footer.

### Adjust Auto-Slide Timing
In `appreciation.component.ts`, change the interval value in `startAutoSlide()`:
```typescript
}, 5000); // Change 5000 to desired milliseconds
```

## Technologies Used

- **Angular 18**: Modern web framework
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Glass morphism, animations, responsive design
- **Google Fonts**: Roboto font family and Material Icons

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Copyright

© 2026 **juliusjurenzo** - Made with 💕

Instagram: https://www.instagram.com/t1notenda__?igsh=MWVhNXlsOHprZm9hdA%3D%3D&utm_source=qr

---

Made with love for Chokie's birthday celebration! 🎂✨
