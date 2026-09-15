import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WorkHeroComponent } from '../../shared/components/work-hero/work-hero.component';
import { PORTFOLIO, TESTIMONIALS } from '../../core/data/site-data';

@Component({
  selector: 'tn-our-work',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, SectionHeadingComponent, IconComponent, WorkHeroComponent],
  template: `
    <tn-page-hero
      eyebrow="Our Work"
      title="Projects We're Proud Of"
      subtitle="A selection of websites, web apps and digital products we've designed and built for clients across industries."
    />

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          <div class="card work-card" *ngFor="let item of portfolio">
            <tn-work-hero [category]="item.category" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="work-card__tags">
              <span *ngFor="let tag of item.tags">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <tn-section-heading eyebrow="Client Feedback" title="What They Said About Working With Us" [center]="true" />
        <div class="grid grid-4 testimonial-grid">
          <div class="card testimonial-card" *ngFor="let t of testimonials">
            <p class="testimonial-card__quote">&ldquo;{{ t.quote }}&rdquo;</p>
            <div class="testimonial-card__author">
              <img [src]="t.photo" [alt]="t.name" />
              <div><strong>{{ t.name }}</strong><small>{{ t.role }}</small></div>
            </div>
            <div class="stars">★★★★★</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="section-title" style="color:#fff">Ready to start your project?</h2>
          <p class="section-sub" style="color:rgba(255,255,255,.85)">Let's talk about what you're building and how we can help.</p>
        </div>
        <a routerLink="/contact" class="btn btn-outline-light">Start a Project <tn-icon name="arrow-right" [size]="16" /></a>
      </div>
    </section>
  `,
})
export class OurWorkComponent {
  portfolio = PORTFOLIO;
  testimonials = TESTIMONIALS;
}
