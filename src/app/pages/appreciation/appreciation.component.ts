import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-appreciation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="appreciation-container">
      <nav class="navbar">
        <div class="nav-content">
          <h1 class="nav-title">Photo Gallery 📸</h1>
          <div class="nav-links">
            <button class="nav-btn" (click)="navigate('/')">
              <span class="material-icons">home</span>
            </button>
            <button class="nav-btn" (click)="navigate('/appreciation')" class="active">
              <span class="material-icons">favorite</span>
            </button>
          </div>
        </div>
      </nav>

      <div class="appreciation-content">
        <div class="container">
          <h1 class="gallery-title slide-up">Moments of Joy 💕</h1>
          
          <!-- Slider -->
          <div class="slider-wrapper">
            <div class="slider" [style.transform]="'translateX(' + (-currentIndex * 100) + '%)'">
              <div class="slide" *ngFor="let photo of photos">
                <div class="slide-content">
                  <img 
                    [src]="photo.src" 
                    [alt]="photo.alt"
                    class="slide-image"
                    (error)="onImageError(photo.id)"
                  >
                  <div class="slide-overlay"></div>
                  <p class="slide-caption">{{ photo.caption }}</p>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <button class="slider-btn prev" (click)="previousSlide()" [disabled]="photos.length <= 1">
              <span class="material-icons">chevron_left</span>
            </button>
            <button class="slider-btn next" (click)="nextSlide()" [disabled]="photos.length <= 1">
              <span class="material-icons">chevron_right</span>
            </button>
          </div>

          <!-- Indicators -->
          <div class="indicators">
            <button 
              *ngFor="let i of [].constructor(photos.length); let j = index"
              class="indicator"
              [class.active]="j === currentIndex"
              (click)="goToSlide(j)"
            ></button>
          </div>

          <!-- Appreciation Message -->
          <div class="glass-card appreciation-section mt-2 slide-up">
            <h2>Thank You For The Memories 🌟</h2>
            <p>
              Every photograph here is a testament to the beautiful moments we've shared. 
              From the laughter-filled days to the quiet moments of support, 
              you've been a constant source of joy and strength. 
              We're grateful for every memory, every hug, every word of encouragement.
            </p>
          </div>

          <!-- Footer -->
          <footer class="footer">
            <p>&copy; 2026 <strong>juliusjurenzo</strong> - Made with 💕</p>
            <a href="https://www.instagram.com/t1notenda__?igsh=MWVhNXlsOHprZm9hdA%3D%3D&utm_source=qr" 
               target="_blank" 
               rel="noopener noreferrer"
               class="instagram-link">
              <span class="material-icons">link</span>
              Follow on Instagram
            </a>
          </footer>
        </div>
      </div>

      <div class="floating-elements">
        <div class="element element-1">✨</div>
        <div class="element element-2">💕</div>
        <div class="element element-3">🎀</div>
      </div>
    </div>
  `,
  styles: [`
    .appreciation-container {
      min-height: 100vh;
      position: relative;
      padding-bottom: 100px;
    }

    .navbar {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 20px 0;
      position: sticky;
      top: 0;
      z-index: 50;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .nav-title {
      font-size: clamp(1.5rem, 5vw, 2rem);
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 800;
      text-shadow: 0 2px 10px rgba(236, 64, 122, 0.15);
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: 15px;
    }

    .nav-btn {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(236, 64, 122, 0.25));
      border: 1.5px solid rgba(255, 255, 255, 0.4);
      color: var(--primary-pink);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(236, 64, 122, 0.15);
      backdrop-filter: blur(10px);
    }

    .nav-btn:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(236, 64, 122, 0.4));
      border-color: rgba(255, 255, 255, 0.6);
      transform: scale(1.15);
      box-shadow: 0 6px 20px rgba(236, 64, 122, 0.25);
    }

    .nav-btn.active {
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink));
      color: white;
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 6px 20px rgba(236, 64, 122, 0.35);
    }

    .appreciation-content {
      position: relative;
      z-index: 10;
    }

    .gallery-title {
      text-align: center;
      margin-top: 60px;
      margin-bottom: 50px;
      font-size: clamp(2rem, 8vw, 3.5rem);
    }

    /* Slider Styles */
    .slider-wrapper {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto 40px;
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(236, 64, 122, 0.25);
    }

    .slider {
      display: flex;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    }

    .slide {
      min-width: 100%;
      flex-shrink: 0;
    }

    .slide-content {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      overflow: hidden;
    }

    .slide-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: imageZoom 0.6s ease-out;
    }

    @keyframes imageZoom {
      from {
        transform: scale(1.1);
        opacity: 0.8;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .slide-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, transparent 0%, rgba(236, 64, 122, 0.3) 100%);
      z-index: 1;
    }

    .slide-caption {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      color: white;
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      font-weight: 500;
      z-index: 2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      margin: 0;
    }

    .slider-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(236, 64, 122, 0.25));
      border: 1.5px solid rgba(255, 255, 255, 0.4);
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 10;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(236, 64, 122, 0.2);
    }

    .slider-btn:hover:not(:disabled) {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(236, 64, 122, 0.4));
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-50%) scale(1.2);
      box-shadow: 0 6px 20px rgba(236, 64, 122, 0.3);
    }

    .slider-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .slider-btn.prev {
      left: 15px;
    }

    .slider-btn.next {
      right: 15px;
    }

    /* Indicators */
    .indicators {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 30px;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(236, 64, 122, 0.3);
      border: 1px solid rgba(236, 64, 122, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .indicator.active {
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink));
      width: 30px;
      border-radius: 6px;
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 3px 10px rgba(236, 64, 122, 0.3);
    }

    .indicator:hover {
      background: linear-gradient(135deg, var(--light-pink), var(--primary-pink));
      border-color: rgba(236, 64, 122, 0.8);
    }

    .appreciation-section {
      text-align: center;
      max-width: 700px;
      margin: 60px auto 0;
    }

    .appreciation-section h2 {
      margin-bottom: 20px;
    }

    .appreciation-section p {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      line-height: 1.8;
    }

    /* Footer */
    .footer {
      text-align: center;
      margin-top: 80px;
      padding: 40px 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 20px;
    }

    .footer p {
      margin-bottom: 15px;
      font-weight: 500;
    }

    .footer strong {
      color: var(--primary-pink);
      font-weight: 700;
    }

    .instagram-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--primary-pink);
      color: white;
      padding: 12px 30px;
      border-radius: 50px;
      transition: all 0.3s ease;
      text-decoration: none;
      font-weight: 600;
    }

    .instagram-link:hover {
      background: var(--darker-pink);
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(236, 64, 122, 0.4);
    }

    .material-icons {
      font-size: 20px;
    }

    .floating-elements {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      pointer-events: none;
    }

    .element {
      position: absolute;
      font-size: 3rem;
      opacity: 0.3;
      animation: float 6s ease-in-out infinite;
    }

    .element-1 {
      top: 10%;
      right: 5%;
    }

    .element-2 {
      bottom: 20%;
      left: 5%;
      animation-delay: 2s;
    }

    .element-3 {
      top: 50%;
      right: 3%;
      animation-delay: 4s;
    }

    @media (max-width: 768px) {
      .slider-btn {
        width: 40px;
        height: 40px;
      }

      .slider-btn.prev {
        left: 10px;
      }

      .slider-btn.next {
        right: 10px;
      }

      .appreciation-section {
        margin-top: 40px;
      }

      .footer {
        margin-top: 60px;
      }

      .element {
        font-size: 2rem;
      }
    }

    @media (max-width: 480px) {
      .gallery-title {
        margin-top: 40px;
        margin-bottom: 30px;
      }

      .slider-wrapper {
        margin-bottom: 30px;
      }

      .slide-caption {
        font-size: 0.9rem;
        bottom: 15px;
        left: 15px;
        right: 15px;
      }

      .indicators {
        margin-top: 20px;
      }
    }
  `]
})
export class AppreciationComponent implements OnInit {
  photos: Photo[] = [
    {
      id: 1,
      src: 'assets/chokie-1.jpg',
      alt: 'Chokie Photo 1',
      caption: 'Your beautiful smile lights up the room'
    },
    {
      id: 2,
      src: 'assets/chokie-2.jpg',
      alt: 'Chokie Photo 2',
      caption: 'Every moment with you is precious'
    },
    {
      id: 3,
      src: 'assets/chokie-3.jpg',
      alt: 'Chokie Photo 3',
      caption: 'The strength you show inspires us'
    },
    {
      id: 4,
      src: 'assets/chokie-4.jpg',
      alt: 'Chokie Photo 4',
      caption: 'Together through thick and thin'
    },
    {
      id: 5,
      src: 'assets/chokie-5.jpg',
      alt: 'Chokie Photo 5',
      caption: 'Friends forever, always by your side'
    },
    {
      id: 6,
      src: 'assets/chokie-6.jpg',
      alt: 'Chokie Photo 6',
      caption: 'Beautiful memories we cherish forever'
    },
    {
      id: 7,
      src: 'assets/chokie-7.jpg',
      alt: 'Chokie Photo 7',
      caption: 'This friendship means everything to us'
    }
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    this.resetAutoSlide();
  }

  previousSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide every 5 seconds
  }

  private resetAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  onImageError(photoId: number): void {
    console.log('Image not found for photo:', photoId);
    // Images will show broken state if file doesn't exist
  }
}
