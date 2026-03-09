import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-container">
      <div class="loader" *ngIf="showLoader"></div>

      <div class="landing-content" [class.fade-in]="!showLoader">
        <div class="floating-elements">
          <div class="float-element element-1">�</div>
          <div class="float-element element-2">🌺</div>
          <div class="float-element element-3">🦋</div>
          <div class="float-element element-4">🌸</div>
          <div class="float-element element-5">💐</div>
        </div>

        <div class="glass-card landing-card">
          <h1 class="birthday-title">Happy Birthday</h1>
          <img 
            src="assets/chokie-main.jpg" 
            alt="Chokie" 
            class="birthday-image"
            (error)="onImageError()"
          >
          <h2 class="name">Chokie ✨</h2>
          <p class="subtitle">May your day be as beautiful as you are</p>
          
          <button class="explore-btn" (click)="startCelebration()">
            <span class="material-icons">celebration</span>
            Let's Celebrate
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .landing-container {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .loader {
      width: 60px;
      height: 60px;
      border: 5px solid rgba(236, 64, 122, 0.2);
      border-top: 5px solid var(--primary-pink);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      position: absolute;
      z-index: 100;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .landing-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }

    .landing-content.fade-in {
      animation: fadeIn 0.8s ease-in-out forwards;
    }

    .landing-card {
      text-align: center;
      max-width: 500px;
      width: 90%;
      margin: 0 auto;
      animation: slideInUp 1s ease-out 0.5s forwards;
    }

    .floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }

    .float-element {
      position: absolute;
      font-size: 3rem;
      animation: float 3s ease-in-out infinite;
      opacity: 0.7;
    }

    .element-1 {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .element-2 {
      top: 20%;
      right: 15%;
      animation-delay: 0.5s;
    }

    .element-3 {
      bottom: 20%;
      left: 15%;
      animation-delay: 1s;
    }

    .element-4 {
      bottom: 15%;
      right: 10%;
      animation-delay: 1.5s;
    }

    .element-5 {
      top: 50%;
      right: 5%;
      animation-delay: 2s;
    }

    .birthday-title {
      font-size: clamp(2.5rem, 10vw, 3.5rem);
      margin-bottom: 20px;
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink), rgba(255, 255, 255, 0.3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 15px rgba(236, 64, 122, 0.15);
      animation: slideInDown 1s ease-out 0.7s forwards;
      opacity: 0;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .birthday-image {
      width: 250px;
      height: 250px;
      border-radius: 20px;
      object-fit: cover;
      margin: 30px auto;
      border: 4px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 15px 40px rgba(236, 64, 122, 0.3);
      animation: slideInUp 1s ease-out 0.8s forwards;
      opacity: 0;
      transition: transform 0.3s ease;
    }

    .birthday-image:hover {
      transform: scale(1.05);
    }

    .name {
      font-size: clamp(1.8rem, 6vw, 2.5rem);
      margin-bottom: 10px;
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: slideInUp 1s ease-out 0.9s forwards;
      opacity: 0;
      font-weight: 700;
    }

    .subtitle {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      margin-bottom: 30px;
      animation: slideInUp 1s ease-out 1s forwards;
      opacity: 0;
      font-style: italic;
      color: var(--text-secondary);
    }

    .explore-btn {
      animation: slideInUp 1s ease-out 1.1s forwards;
      opacity: 0;
      background: linear-gradient(135deg, var(--primary-pink), var(--light-pink));
      border: 1.5px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 6px 20px rgba(236, 64, 122, 0.35);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 0 auto;
    }

    .explore-btn:hover {
      background: linear-gradient(135deg, var(--darker-pink), var(--primary-pink));
      transform: scale(1.08);
      box-shadow: 0 8px 25px rgba(236, 64, 122, 0.45);
      border-color: rgba(255, 255, 255, 0.6);
    }

    .material-icons {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      .birthday-image {
        width: 200px;
        height: 200px;
      }

      .float-element {
        font-size: 2rem;
      }
    }
  `]
})
export class LandingComponent implements OnInit {
  showLoader = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Show loader for 2 seconds then fade to content
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  startCelebration(): void {
    this.router.navigate(['/home']);
  }

  onImageError(): void {
    // Handle image not found gracefully
    console.log('Image not found, using placeholder');
  }
}
