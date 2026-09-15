import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechStyle {
  bg: string;
  color: string;
  label: string;
}

/** Central registry of tech-stack brand colours/labels (single source of truth). */
const TECH_STYLES: Record<string, TechStyle> = {
  angular: { bg: 'linear-gradient(135deg,#dd0031,#c3002f)', color: '#fff', label: 'A' },
  react: { bg: '#e6f7ff', color: '#149eca', label: '⚛' },
  javascript: { bg: '#f7df1e', color: '#1b1b1b', label: 'JS' },
  typescript: { bg: '#3178c6', color: '#fff', label: 'TS' },
  wordpress: { bg: '#0b1330', color: '#fff', label: 'W' },
  mongodb: { bg: '#eafbea', color: '#47a248', label: '🍃' },
  mongoose: { bg: '#fdecec', color: '#c33131', label: 'M' },
  sql: { bg: '#eaf1ff', color: '#2563eb', label: 'SQL' },
  mysql: { bg: '#eaf1ff', color: '#00758f', label: 'DB' },
  nodejs: { bg: '#eafbea', color: '#3c873a', label: 'JS' },
  express: { bg: '#0b1330', color: '#fff', label: 'ex' },
};

@Component({
  selector: 'tn-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-badge">
      <span class="tech-badge__icon" [style.background]="style.bg" [style.color]="style.color">
        {{ style.label }}
      </span>
      <span class="tech-badge__name">{{ name }}</span>
    </div>
  `,
  styles: [`
    .tech-badge {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
    }
    .tech-badge__icon {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: var(--fw-extrabold);
      font-size: 1.1rem;
      box-shadow: var(--shadow-sm);
    }
    .tech-badge__name {
      font-size: var(--fs-sm);
      font-weight: var(--fw-semibold);
      color: var(--color-text-heading);
    }
  `],
})
export class TechBadgeComponent {
  @Input() techKey = '';
  @Input() name = '';

  get style(): TechStyle {
    return TECH_STYLES[this.techKey] ?? { bg: '#eef1f8', color: '#0b1330', label: '?' };
  }
}
