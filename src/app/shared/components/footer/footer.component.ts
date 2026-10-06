import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { BrandComponent } from '../brand/brand.component';
import { COMPANY, FOOTER_LINKS } from '../../../core/data/site-data';

@Component({
  selector: 'tn-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, BrandComponent],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div>
            <span class="eyebrow eyebrow--on-dark">Get In Touch</span>
            <h2 class="footer__heading">Let's Build Something Great Together</h2>
            <p class="footer__sub">Have a project in mind? Questions? We'd love to hear from you. Reach out to us and our team will get back to you soon.</p>

            <ul class="footer__contact">
              <li>
                <span class="footer__contact-icon"><tn-icon name="phone" [size]="16" /></span>
                <div><strong>{{ company.phone }}</strong><small>{{ company.phoneHours }}</small></div>
              </li>
              <li>
                <span class="footer__contact-icon"><tn-icon name="mail" [size]="16" /></span>
                <div><strong>{{ company.email }}</strong><small>{{ company.emailNote }}</small></div>
              </li>
              <li>
                <span class="footer__contact-icon"><tn-icon name="map-pin" [size]="16" /></span>
                <div><strong>{{ company.address }}</strong><small>{{ company.address2 }}</small><br/><small>{{ company.addressNote }}</small></div>
              </li>
            </ul>
          </div>

          <form class="footer__form" (submit)="$event.preventDefault()">
            <div class="footer__form-row">
              <label>Your Name *<input type="text" placeholder="Enter your name" /></label>
              <label>Email Address *<input type="email" placeholder="Enter your email" /></label>
            </div>
            <div class="footer__form-row">
              <label>Service Required
                <select>
                  <option>Select a service</option>
                  <option>Website Creation</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>E-commerce Solutions</option>
                </select>
              </label>
              <label>Message *<textarea rows="1" placeholder="Tell us about your project..."></textarea></label>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Send Message <tn-icon name="arrow-right" [size]="16" /></button>
          </form>
        </div>

        <div class="footer__divider"></div>

        <div class="footer__grid">
          <div class="footer__brand">
            <tn-brand variant="lockup" />
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul class="footer__links">
              <li *ngFor="let l of links.quickLinks"><a [routerLink]="l.path">{{ l.label }}</a></li>
            </ul>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul class="footer__links">
              <li *ngFor="let l of links.services"><a [routerLink]="l.path">{{ l.label }}</a></li>
            </ul>
          </div>

          <div>
            <h4>Technologies</h4>
            <ul class="footer__links">
              <li *ngFor="let t of links.technologies"><a routerLink="/technologies">{{ t }}</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div class="footer__socials">
              <a *ngFor="let s of company.socials" [href]="s.url" aria-label="social link"><tn-icon [name]="s.icon" [size]="16" /></a>
            </div>
            <h4 class="footer__newsletter-title">Subscribe to our Newsletter</h4>
            <form class="footer__newsletter" (submit)="$event.preventDefault()">
              <input type="email" placeholder="Enter your email" />
              <button class="btn btn-primary btn-sm" type="submit"><tn-icon name="arrow-right" [size]="16" /></button>
            </form>
          </div>
        </div>

        <div class="footer__bottom">
          <span>&copy; {{ year }} {{ company.name }}. All rights reserved.</span>
          <div class="footer__legal">
            <a routerLink="/">Privacy Policy</a>
            <a routerLink="/">Terms &amp; Conditions</a>
            <a routerLink="/">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--gradient-navy);
      color: var(--color-text-on-dark-muted);
      padding-top: var(--space-16);
    }
    .footer__top {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-16);
      align-items: start;
      padding-bottom: var(--space-12);
    }
    .footer__heading { color: #fff; font-size: var(--fs-xl); margin-top: var(--space-3); }
    .footer__sub { margin-top: var(--space-4); line-height: var(--lh-relaxed); max-width: 420px; }
    .footer__contact { margin-top: var(--space-8); display: flex; flex-direction: column; gap: var(--space-4); }
    .footer__contact li { display: flex; align-items: center; gap: var(--space-3); }
    .footer__contact li > div { min-width: 0; overflow-wrap: break-word; word-break: break-word; }
    .footer__contact-icon {
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.08);
      color: #8fb6ff;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .footer__contact strong { display: block; color: #fff; font-size: var(--fs-sm); }
    .footer__contact small { color: var(--color-text-on-dark-muted); font-size: var(--fs-xs); }

    .footer__form {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius-lg);
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    .footer__form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
    .footer__form label { display: flex; flex-direction: column; gap: var(--space-2); font-size: var(--fs-xs); color: var(--color-text-on-dark-muted); }
    .footer__form input, .footer__form select, .footer__form textarea {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius-sm);
      padding: 10px 12px;
      color: #fff;
      font-family: inherit;
      font-size: var(--fs-sm);
      resize: none;
    }
    .footer__form input::placeholder, .footer__form textarea::placeholder { color: rgba(255,255,255,0.35); }

    .footer__divider { border-top: 1px solid rgba(255,255,255,0.08); }

    .footer__grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr 1.1fr;
      gap: var(--space-8);
      padding: var(--space-12) 0;
    }
    .footer__grid h4 { color: #fff; font-size: var(--fs-sm); margin-bottom: var(--space-4); }
    .footer__links { display: flex; flex-direction: column; gap: var(--space-3); }
    .footer__links a { font-size: var(--fs-sm); transition: color var(--transition-fast); }
    .footer__links a:hover { color: #8fb6ff; }

    .footer__brand p { margin-top: var(--space-4); font-size: var(--fs-sm); line-height: var(--lh-relaxed); }

    .footer__socials { display: flex; gap: var(--space-3); }
    .footer__socials a {
      width: 34px; height: 34px; border-radius: 50%;
      background: rgba(255,255,255,0.08);
      display: flex; align-items: center; justify-content: center;
      color: #fff;
      transition: background var(--transition-fast);
    }
    .footer__socials a:hover { background: var(--gradient-brand); }
    .footer__newsletter-title { margin-top: var(--space-6); }
    .footer__newsletter { display: flex; gap: var(--space-2); }
    .footer__newsletter input {
      flex: 1;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius-sm);
      padding: 8px 12px;
      color: #fff;
      font-size: var(--fs-xs);
    }

    .footer__bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: var(--space-6) 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: var(--fs-xs);
      flex-wrap: wrap;
      gap: var(--space-3);
    }
    .footer__legal { display: flex; gap: var(--space-6); }
    .footer__legal a:hover { color: #8fb6ff; }

    @media (max-width: 860px) {
      .footer__top { grid-template-columns: 1fr; gap: var(--space-8); }
      .footer__grid { grid-template-columns: repeat(2, 1fr); }
      /* Give the logo lockup the full row so its tagline stays legible. */
      .footer__brand { grid-column: 1 / -1; }
    }
    @media (max-width: 560px) {
      .footer__form-row { grid-template-columns: 1fr; }
      .footer__grid { grid-template-columns: 1fr 1fr; }
      .footer__bottom { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 480px) {
      /* 2-up link columns get too narrow to read comfortably once the
         viewport drops below ~480px; stack everything full-width. */
      .footer__grid { grid-template-columns: 1fr; gap: var(--space-6); }
      .footer__legal { flex-wrap: wrap; gap: var(--space-4); }
    }
  `],
})
export class FooterComponent {
  company = COMPANY;
  links = FOOTER_LINKS;
  year = new Date().getFullYear();
}
