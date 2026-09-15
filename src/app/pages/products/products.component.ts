import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { PRODUCTS } from '../../core/data/site-data';

@Component({
  selector: 'tn-products',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, SectionHeadingComponent, IconComponent],
  template: `
    <tn-page-hero
      eyebrow="Our Products"
      title="Innovative Solutions for Your Business"
      subtitle="Beyond client projects, we build our own digital products that solve real problems and help businesses grow faster."
    />

    <section class="section">
      <div class="container">
        <div class="grid grid-3 products-grid-light">
          <div class="card product-card-light" *ngFor="let p of products">
            <span class="product-card-light__icon"><tn-icon [name]="p.icon" [size]="22" /></span>
            <h3>{{ p.name }}</h3>
            <p>{{ p.description }}</p>
            <a routerLink="/contact" class="link-more link-more--sm">Request a Demo <tn-icon name="arrow-right" [size]="14" /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <tn-section-heading eyebrow="Why Our Products" title="Built With The Same Craft We Bring To Client Work" [center]="true"
          subtitle="Every product we ship follows the same standards of design, performance and security as our client engagements." />
        <div class="grid grid-3" style="margin-top:var(--space-10)">
          <div class="card info-card" *ngFor="let f of features">
            <span class="info-card__icon"><tn-icon [name]="f.icon" [size]="20" /></span>
            <div>
              <h4>{{ f.title }}</h4>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="section-title" style="color:#fff">Want a custom product built for your business?</h2>
          <p class="section-sub" style="color:rgba(255,255,255,.85)">We can design and build a bespoke web app tailored exactly to your workflow.</p>
        </div>
        <a routerLink="/contact" class="btn btn-outline-light">Get a Free Quote <tn-icon name="arrow-right" [size]="16" /></a>
      </div>
    </section>
  `,
  styles: [`
    .product-card-light { display: flex; flex-direction: column; }
    .product-card-light__icon {
      width: 46px; height: 46px;
      border-radius: var(--radius-md);
      background: var(--gradient-brand);
      color: #fff;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: var(--space-4);
    }
    .product-card-light h3 { font-size: var(--fs-md); margin-bottom: var(--space-2); }
    .product-card-light p { font-size: var(--fs-sm); line-height: var(--lh-relaxed); flex: 1; }
  `],
})
export class ProductsComponent {
  products = PRODUCTS;
  features = [
    { icon: 'shield', title: 'Secure by Default', desc: 'Authentication, data encryption and best-practice security baked in.' },
    { icon: 'layers', title: 'Scalable Architecture', desc: 'Built to grow from a handful of users to thousands without a rewrite.' },
    { icon: 'palette', title: 'Thoughtful UX', desc: 'Every screen is designed around the way real users actually work.' },
  ];
}
