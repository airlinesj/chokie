import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <nav class="navbar">
        <div class="nav-content">
          <h1 class="nav-title">Chokie ✨</h1>
          <div class="nav-links">
            <button class="nav-btn" (click)="navigate('/')">
              <span class="material-icons">home</span>
            </button>
            <button class="nav-btn" (click)="navigate('/appreciation')">
              <span class="material-icons">favorite</span>
            </button>
          </div>
        </div>
      </nav>

      <div class="home-content">
        <div class="container">
          <div class="glass-card hero-section slide-up">
            <h1>Celebrating You 🌸</h1>
            <p class="friendship-message">
              Friendship isn't just about the good times—it's about showing up when things get tough. 
              Through the darkest moments and the brightest days, you've been a constant light in our lives. 
              Your strength, kindness, and unwavering spirit have carried us through challenges we thought 
              were impossible. Today, we celebrate not just your birthday, but the incredible person you are 
              and the beautiful friendship we share. Thank you for being our rock, our laughter, and our hope. 
              Here's to you and the beautiful journey we're on together. 💕
            </p>
          </div>

          <div class="action-section mt-2">
            <button class="btn btn-primary" (click)="navigate('/appreciation')">
              <span class="material-icons">photo_gallery</span>
              View Appreciation Gallery
            </button>
          </div>
        </div>
      </div>

      <div class="floating-bg">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      position: relative;
      padding-bottom: 50px;
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

    .material-icons {
      font-size: 24px;
    }

    .home-content {
      position: relative;
      z-index: 10;
    }

    .hero-section {
      margin-top: 60px;
    }

    .friendship-message {
      font-size: clamp(1rem, 2.5vw, 1.15rem);
      line-height: 2;
      font-weight: 300;
      color: var(--text-primary);
      margin-top: 25px;
    }

    .action-section {
      text-align: center;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink));
      color: white;
      padding: 15px 40px;
      font-size: clamp(0.95rem, 2vw, 1.05rem);
      display: inline-flex;
      align-items: center;
      gap: 10px;
      border: 1.5px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 6px 20px rgba(236, 64, 122, 0.3);
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, var(--darker-pink), var(--primary-pink));
      transform: scale(1.08);
      box-shadow: 0 8px 25px rgba(236, 64, 122, 0.45);
      border-color: rgba(255, 255, 255, 0.6);
    }

    .floating-bg {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      pointer-events: none;
    }

    .circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(236, 64, 122, 0.05);
      filter: blur(40px);
    }

    .circle-1 {
      width: 300px;
      height: 300px;
      top: 10%;
      right: 5%;
      animation: float 20s ease-in-out infinite;
    }

    .circle-2 {
      width: 250px;
      height: 250px;
      bottom: 20%;
      left: 10%;
      animation: float 25s ease-in-out infinite;
      animation-delay: 5s;
    }

    .circle-3 {
      width: 200px;
      height: 200px;
      top: 50%;
      left: 5%;
      animation: float 30s ease-in-out infinite;
      animation-delay: 10s;
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(30px, -30px);
      }
      50% {
        transform: translate(0, 30px);
      }
      75% {
        transform: translate(-30px, -30px);
      }
    }

    @media (max-width: 768px) {
      .home-content {
        margin-top: 20px;
      }

      .hero-section {
        margin-top: 40px;
      }

      .friendship-message {
        line-height: 1.8;
      }

      .circle {
        filter: blur(30px);
      }

      .circle-1 {
        width: 200px;
        height: 200px;
      }

      .circle-2 {
        width: 180px;
        height: 180px;
      }

      .circle-3 {
        width: 150px;
        height: 150px;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
