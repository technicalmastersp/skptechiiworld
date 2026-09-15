import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SERVICES, PROCESS_STEPS } from '../../core/data/site-data';

@Component({
  selector: 'tn-services',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, SectionHeadingComponent, IconComponent],
  template: `
    <tn-page-hero
      eyebrow="Our Services"
      title="Comprehensive Web Development Services"
      subtitle="From simple business websites to complex web applications, we provide end-to-end solutions tailored to your needs."
    />

    <section class="section">
      <div class="container">
        <div class="grid grid-4 services-grid">
          <div class="card service-card" *ngFor="let s of services">
            <span class="service-card__icon"><tn-icon [name]="s.icon" [size]="22" /></span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.description }}</p>
            <a routerLink="/contact" class="link-more link-more--sm">Get Started <tn-icon name="arrow-right" [size]="14" /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <tn-section-heading eyebrow="Our Process" title="How We Work" [center]="true"
          subtitle="A proven, transparent process that takes your idea from concept to a fully deployed product." />
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
          <h2 class="section-title" style="color:#fff">Have a project in mind?</h2>
          <p class="section-sub" style="color:rgba(255,255,255,.85)">Tell us what you need and we'll get back to you with a free quote within 24 hours.</p>
        </div>
        <a routerLink="/contact" class="btn btn-outline-light">Get a Free Quote <tn-icon name="arrow-right" [size]="16" /></a>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services = SERVICES;
  processSteps = PROCESS_STEPS;
}
