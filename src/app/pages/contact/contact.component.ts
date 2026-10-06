import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { COMPANY, FAQ_ITEMS } from '../../core/data/site-data';

@Component({
  selector: 'tn-contact',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, IconComponent],
  template: `
    <tn-page-hero
      eyebrow="Get In Touch"
      title="Let's Build Something Great Together"
      subtitle="Have a project in mind? Questions? We'd love to hear from you. Reach out and our team will get back to you soon."
    />

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-info">
          <div class="card info-card">
            <span class="info-card__icon"><tn-icon name="phone" [size]="20" /></span>
            <div><h4>{{ company.phone }}</h4><p>{{ company.phoneHours }}</p></div>
          </div>
          <div class="card info-card">
            <span class="info-card__icon"><tn-icon name="mail" [size]="20" /></span>
            <div><h4>{{ company.email }}</h4><p>{{ company.emailNote }}</p></div>
          </div>
          <div class="card info-card">
            <span class="info-card__icon"><tn-icon name="map-pin" [size]="20" /></span>
            <div><h4>{{ company.address }}</h4><p>{{ company.address2 }}</p><p>{{ company.addressNote }}</p></div>
          </div>
        </div>

        <form class="card contact-form" (submit)="$event.preventDefault()">
          <h3>Send Us a Message</h3>
          <div class="contact-form__row">
            <label>Your Name *<input type="text" placeholder="Enter your name" /></label>
            <label>Email Address *<input type="email" placeholder="Enter your email" /></label>
          </div>
          <div class="contact-form__row">
            <label>Phone Number<input type="tel" placeholder="Enter your phone number" /></label>
            <label>Service Required
              <select>
                <option>Select a service</option>
                <option>Website Creation</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>E-commerce Solutions</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label>Message *<textarea rows="5" placeholder="Tell us about your project..."></textarea></label>
          <button class="btn btn-primary btn-block" type="submit">Send Message <tn-icon name="arrow-right" [size]="16" /></button>
        </form>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2 class="section-title text-center mx-auto" style="margin-bottom:var(--space-10)">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item" *ngFor="let item of faqs; let i = index" (click)="toggle(i)">
            <div class="faq-item__q">
              {{ item.q }}
              <tn-icon [name]="openIndex === i ? 'chevron-down' : 'chevron-right'" [size]="18" />
            </div>
            <p class="faq-item__a" *ngIf="openIndex === i">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: var(--space-8);
      align-items: start;
    }
    .contact-info { display: flex; flex-direction: column; gap: var(--space-5); }
    .contact-form { display: flex; flex-direction: column; gap: var(--space-4); }
    .contact-form h3 { font-size: var(--fs-lg); margin-bottom: var(--space-2); }
    .contact-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
    .contact-form label { display: flex; flex-direction: column; gap: var(--space-2); font-size: var(--fs-xs); color: var(--color-text-body); font-weight: var(--fw-medium); }
    .contact-form input, .contact-form select, .contact-form textarea {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      padding: 11px 14px;
      font-family: inherit;
      font-size: var(--fs-sm);
      color: var(--color-text-heading);
      resize: vertical;
    }
    .faq-list { max-width: 760px; margin: 0 auto; }
    @media (max-width: 860px) {
      .contact-grid { grid-template-columns: 1fr; }
      .contact-form__row { grid-template-columns: 1fr; }
    }
  `],
})
export class ContactComponent {
  company = COMPANY;
  faqs = FAQ_ITEMS;
  openIndex: number | null = 0;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
