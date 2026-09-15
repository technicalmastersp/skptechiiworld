import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ABOUT_POINTS, STATS, PROCESS_STEPS } from '../../core/data/site-data';

@Component({
  selector: 'tn-about',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, SectionHeadingComponent, IconComponent],
  template: `
    <tn-page-hero
      eyebrow="About Us"
      title="We Are More Than Just a Development Team"
      subtitle="TechNova Studio turns ideas into powerful digital experiences — helping businesses build a strong online presence and achieve long-term growth."
    />

    <section class="section">
      <div class="container about-grid-page">
        <div class="about-media-page">
          <img src="assets/images/workspace-1.png" alt="TechNova Studio workspace" />
        </div>
        <div>
          <span class="eyebrow">Our Story</span>
          <h2 class="section-title">Turning Ideas Into Digital Reality Since Day One</h2>
          <p class="section-sub">
            We started TechNova Studio with a simple belief: every business, regardless of size, deserves
            a fast, beautiful and reliable digital presence. Today we partner with startups, agencies and
            enterprises to design, build and maintain the products their customers rely on.
          </p>
          <ul class="about-points">
            <li *ngFor="let point of aboutPoints"><tn-icon name="check-circle" [size]="18" /> {{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="grid grid-4">
          <div class="stat" *ngFor="let s of stats">
            <span class="stat__icon"><tn-icon [name]="s.icon" [size]="22" /></span>
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <tn-section-heading eyebrow="How We Work" title="A Process Built on Transparency" [center]="true" />
        <div class="process-row">
          <div class="process-step" *ngFor="let step of processSteps">
            <span class="process-step__icon"><tn-icon [name]="step.icon" [size]="22" /></span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="section-title" style="color:#fff">Let's build something great together</h2>
          <p class="section-sub" style="color:rgba(255,255,255,.85)">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>
        <a routerLink="/contact" class="btn btn-outline-light">Get in Touch <tn-icon name="arrow-right" [size]="16" /></a>
      </div>
    </section>
  `,
  styles: [`
    .about-grid-page {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: var(--space-12);
      align-items: center;
    }
    .about-media-page img { border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }
    @media (max-width: 860px) {
      .about-grid-page { grid-template-columns: 1fr; }
    }
  `],
})
export class AboutComponent {
  aboutPoints = ABOUT_POINTS;
  stats = STATS;
  processSteps = PROCESS_STEPS;
}
