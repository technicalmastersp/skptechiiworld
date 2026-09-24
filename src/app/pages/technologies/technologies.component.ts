import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { TECH_STACK } from '../../core/data/site-data';

@Component({
  selector: 'tn-technologies',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, SectionHeadingComponent, TechBadgeComponent, IconComponent],
  template: `
    <tn-page-hero
      eyebrow="Our Tech Stack"
      title="Modern Technologies for Powerful Solutions"
      subtitle="We use the latest and most reliable technologies to build fast, secure and scalable applications."
    />

    <section class="section">
      <div class="container">
        <div class="tech-grid-page">
          <tn-tech-badge *ngFor="let t of techStack" [techKey]="t.key" [name]="t.name" />
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <tn-section-heading eyebrow="Why This Stack" title="Chosen for Performance, Security &amp; Scale" [center]="true" />
        <div class="grid grid-3" style="margin-top:var(--space-10)">
          <div class="card info-card" *ngFor="let r of reasons">
            <span class="info-card__icon"><tn-icon [name]="r.icon" [size]="20" /></span>
            <div><h4>{{ r.title }}</h4><p>{{ r.desc }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="section-title" style="color:#fff">Not sure which stack fits your project?</h2>
          <p class="section-sub" style="color:rgba(255,255,255,.85)">We'll recommend the right technologies for your goals and budget.</p>
        </div>
        <a routerLink="/contact" class="btn btn-outline-light">Talk to Us <tn-icon name="arrow-right" [size]="16" /></a>
      </div>
    </section>
  `,
  styles: [`
    .tech-grid-page {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: var(--space-8) var(--space-6);
    }
    @media (max-width: 860px) { .tech-grid-page { grid-template-columns: repeat(4, 1fr); } }
    @media (max-width: 560px) { .tech-grid-page { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 400px) { .tech-grid-page { grid-template-columns: repeat(2, 1fr); gap: var(--space-6) var(--space-4); } }
  `],
})
export class TechnologiesComponent {
  techStack = TECH_STACK;
  reasons = [
    { icon: 'rocket', title: 'Performance First', desc: 'Optimised builds, lazy-loading and caching for fast load times.' },
    { icon: 'shield', title: 'Secure Foundations', desc: 'Industry-standard authentication, validation and data protection.' },
    { icon: 'layers', title: 'Future-Proof', desc: 'Modular architecture that scales as your product grows.' },
  ];
}
