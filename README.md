# Happy Birthday Chokie Website 🎉

A beautiful, modern celebration website built with Angular featuring glass morphism design, smooth animations, and a responsive mobile-first layout.

## Features ✨

- **Landing Page**: Loading animation with birthday greeting
- **Home Page**: Heartfelt friendship appreciation message
- **Photo Gallery**: Sliding image gallery with auto-play and manual navigation
- **Glass Morphism**: Apple-inspired frosted glass UI design
- **Responsive Design**: Fully optimized for mobile and desktop
- **Modern Animations**: Smooth transitions and floating elements
- **Roboto Font**: Beautiful typography throughout
- **Pink Theme**: Vibrant pink color scheme

## Project Structure

```
chokie/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── landing/
│   │   │   │   └── landing.component.ts
│   │   │   ├── home/
│   │   │   │   └── home.component.ts
│   │   │   └── appreciation/
│   │   │       └── appreciation.component.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── chokie-main.jpg (landing page image)
│   │   ├── chokie-1.jpg through chokie-5.jpg (gallery images)
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Add Images**:
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
