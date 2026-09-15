import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tn-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="s-head" [class.s-head--center]="center" [class.s-head--dark]="dark">
      <span class="eyebrow" [class.eyebrow--on-dark]="dark">{{ eyebrow }}</span>
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-sub" *ngIf="subtitle" [class.mx-auto]="center">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .s-head { max-width: 640px; }
    .s-head--center { max-width: 640px; margin: 0 auto; text-align: center; }
    .s-head--dark h2 { color: var(--color-text-on-dark); }
    .s-head--dark .section-sub { color: var(--color-text-on-dark-muted); }
  `],
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() center = false;
  @Input() dark = false;
}
