import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BRAND, COMPANY } from '../../../core/data/site-data';

/**
 * The one place the SKP Techii World logo is rendered.
 *
 *  - `compact` (default): app icon + live-text name/tagline. For LIGHT
 *    surfaces such as the header. Live text keeps the name crisp at every
 *    DPI, selectable, and guaranteed to fit the nav's one-line budget.
 *  - `lockup`: the full icon + wordmark + tagline artwork. Its lettering is
 *    white, so it is only for DARK surfaces such as the footer.
 *
 * Asset paths/sizes come from BRAND in site-data.ts.
 */
@Component({
  selector: 'tn-brand',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a routerLink="/" class="brand" [class.brand--lockup]="variant === 'lockup'">
      <ng-container *ngIf="variant === 'lockup'; else compact">
        <img
          class="brand__lockup"
          [src]="brand.lockupDark.src"
          [attr.width]="brand.lockupDark.width"
          [attr.height]="brand.lockupDark.height"
          [alt]="company.name + ' — ' + company.tagline"
          loading="lazy"
          decoding="async"
        />
      </ng-container>

      <ng-template #compact>
        <!-- Decorative: the adjacent text already names the brand. -->
        <img
          class="brand__mark"
          [src]="brand.icon.src"
          [attr.width]="brand.icon.width"
          [attr.height]="brand.icon.height"
          alt=""
          decoding="async"
        />
        <span class="brand__text">
          <strong>{{ company.name }}</strong>
          <small>{{ company.tagline }}</small>
        </span>
      </ng-template>
    </a>
  `,
  styles: [`
    :host { display: inline-flex; }
    .brand { display: flex; align-items: center; gap: var(--space-3); border-radius: var(--radius-sm); }

    .brand__mark {
      width: 42px;
      height: 40px;
      flex-shrink: 0;
      object-fit: contain;
    }
    .brand__text { display: flex; flex-direction: column; line-height: 1.2; min-width: 0; }
    .brand__text strong {
      font-size: var(--fs-md);
      color: var(--color-text-heading);
      font-weight: var(--fw-extrabold);
      white-space: nowrap;
    }
    /* Body colour (not muted) keeps the 11px tagline above 4.5:1 on white. */
    .brand__text small { font-size: 0.7rem; color: var(--color-text-body); white-space: nowrap; }

    .brand__lockup {
      width: 280px;
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 380px) {
      .brand__text small { display: none; }
      .brand__text strong { font-size: var(--fs-sm); }
    }
  `],
})
export class BrandComponent {
  /** `compact` for light surfaces, `lockup` for dark surfaces. */
  @Input() variant: 'compact' | 'lockup' = 'compact';

  readonly brand = BRAND;
  readonly company = COMPANY;
}
