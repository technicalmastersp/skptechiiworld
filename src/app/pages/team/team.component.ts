import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { TEAM } from '../../core/data/site-data';

@Component({
  selector: 'tn-team',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, SectionHeadingComponent, IconComponent],
  template: `
    <tn-page-hero
      eyebrow="Our Team"
      title="Meet the People Behind the Magic"
      subtitle="We go beyond just coding — we build and problem-solve to ensure your business grows online."
    />

    <section class="section">
      <div class="container">
        <div class="grid grid-5 team-grid">
          <div class="team-card" *ngFor="let member of team">
            <img [src]="member.photo" [alt]="member.name" />
            <h4>{{ member.name }}</h4>
            <p>{{ member.role }}</p>
            <a href="#" class="team-card__social"><tn-icon name="linkedin" [size]="14" /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--navy">
      <div class="container cta-band__inner">
        <div>
          <span class="eyebrow eyebrow--on-dark">Join Our Team</span>
          <h2 class="section-title" style="color:#fff">We're Always Looking for Great Talent</h2>
          <p class="section-sub" style="color:var(--color-text-on-dark-muted)">If you're passionate about building great products, we'd love to hear from you.</p>
        </div>
        <a routerLink="/contact" class="btn btn-primary">See Open Roles <tn-icon name="arrow-right" [size]="16" /></a>
      </div>
    </section>
  `,
})
export class TeamComponent {
  team = TEAM;
}
