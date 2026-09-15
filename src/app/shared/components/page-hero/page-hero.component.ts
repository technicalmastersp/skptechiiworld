import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'tn-page-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  template: `
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="eyebrow eyebrow--on-dark">{{ eyebrow }}</span>
        <h1 class="page-hero__title">{{ title }}</h1>
        <p class="page-hero__sub" *ngIf="subtitle">{{ subtitle }}</p>
        <div class="page-hero__crumbs">
          <a routerLink="/">Home</a>
          <tn-icon name="chevron-right" [size]="14" />
          <span>{{ title }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      background: var(--gradient-navy);
      padding: 130px 0 var(--space-16);
      color: var(--color-text-on-dark);
      position: relative;
      overflow: hidden;
    }
    .page-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 85% 20%, rgba(124,58,237,0.35), transparent 55%);
      pointer-events: none;
    }
    .page-hero__inner { position: relative; z-index: 1; }
    .page-hero__title {
      font-size: var(--fs-3xl);
      color: #fff;
      margin-top: var(--space-3);
    }
    .page-hero__sub {
      margin-top: var(--space-4);
      color: var(--color-text-on-dark-muted);
      max-width: 620px;
      font-size: var(--fs-md);
      line-height: var(--lh-relaxed);
    }
    .page-hero__crumbs {
      margin-top: var(--space-6);
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--fs-sm);
      color: var(--color-text-on-dark-muted);
    }
    .page-hero__crumbs a { color: #8fb6ff; }
    @media (max-width: 640px) {
      .page-hero { padding: 110px 0 var(--space-10); }
      .page-hero__title { font-size: var(--fs-2xl); }
    }
  `],
})
export class PageHeroComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() subtitle = '';
}
