import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../page-hero/page-hero.component';
import { LEGAL_LAST_UPDATED, LegalDocument } from '../../../core/data/legal-data';

/**
 * Renders any LegalDocument (hero, "On this page" list, numbered sections).
 * Add a new policy by adding data in legal-data.ts and a one-line page
 * component — no new layout or styling needed.
 */
@Component({
  selector: 'tn-legal-document',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  template: `
    <tn-page-hero [eyebrow]="doc.eyebrow" [title]="doc.title" [subtitle]="doc.subtitle" />

    <section class="section">
      <div class="container legal">
        <p class="legal__updated">Last updated: {{ updated }}</p>

        <nav class="legal__toc" aria-labelledby="legal-toc-title">
          <h2 id="legal-toc-title" class="legal__toc-title">On this page</h2>
          <ol>
            <li *ngFor="let s of doc.sections">
              <a [routerLink]="[]" [fragment]="s.id">{{ s.heading }}</a>
            </li>
          </ol>
        </nav>

        <article class="legal__body">
          <section class="legal__section" *ngFor="let s of doc.sections; let i = index" [id]="s.id">
            <h2>{{ i + 1 }}. {{ s.heading }}</h2>
            <p *ngFor="let p of s.paragraphs">{{ p }}</p>
            <ul *ngIf="s.bullets?.length">
              <li *ngFor="let b of s.bullets">{{ b }}</li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .legal { max-width: 820px; }
    .legal__updated { font-size: var(--fs-sm); color: var(--color-text-body); margin-bottom: var(--space-6); }

    .legal__toc {
      background: var(--color-bg-alt);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-6);
      margin-bottom: var(--space-12);
    }
    .legal__toc-title { font-size: var(--fs-base); margin-bottom: var(--space-3); }
    .legal__toc ol { margin: 0; padding-left: var(--space-5); columns: 2; column-gap: var(--space-8); }
    .legal__toc li { padding: var(--space-1) 0; font-size: var(--fs-sm); break-inside: avoid; }
    .legal__toc a { color: var(--color-primary); font-weight: var(--fw-medium); }
    .legal__toc a:hover { text-decoration: underline; }

    .legal__section {
      /* keep anchored headings clear of the fixed header */
      scroll-margin-top: calc(var(--header-height) + var(--space-4));
      margin-bottom: var(--space-10);
    }
    .legal__section h2 { font-size: var(--fs-lg); margin-bottom: var(--space-3); }
    .legal__section p { line-height: var(--lh-relaxed); margin-bottom: var(--space-3); }
    .legal__section ul { list-style: disc; padding-left: var(--space-6); margin: 0 0 var(--space-3); }
    .legal__section li { line-height: var(--lh-relaxed); margin-bottom: var(--space-2); }

    @media (max-width: 640px) {
      .legal__toc { padding: var(--space-4); }
      .legal__toc ol { columns: 1; }
    }
  `],
})
export class LegalDocumentComponent {
  @Input({ required: true }) doc!: LegalDocument;
  readonly updated = LEGAL_LAST_UPDATED;
}
