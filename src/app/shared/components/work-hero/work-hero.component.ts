import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

interface WorkHeroStyle {
  from: string;
  to: string;
  blobA: string;
  blobB: string;
  icon: string;
}

/**
 * Central registry of cover-art styling per project category (single source
 * of truth). Add a new category here and every "Our Work" card that uses it
 * automatically gets a matching hero illustration.
 */
const WORK_HERO_STYLES: Record<string, WorkHeroStyle> = {
  'E-commerce': { from: '#3b0764', to: '#4f46e5', blobA: '#f43f5e', blobB: '#a78bfa', icon: 'cart' },
  'Web App': { from: '#03122b', to: '#0b3d91', blobA: '#22d3ee', blobB: '#4f46e5', icon: 'code-brackets' },
  EdTech: { from: '#1e1b4b', to: '#3730a3', blobA: '#f59e0b', blobB: '#818cf8', icon: 'grad-cap' },
  Business: { from: '#03122b', to: '#0f2f52', blobA: '#14b8a6', blobB: '#38bdf8', icon: 'briefcase' },
  Dashboard: { from: '#03122b', to: '#134e2e', blobA: '#22c55e', blobB: '#22d3ee', icon: 'chart' },
  Startup: { from: '#3b0764', to: '#7c3aed', blobA: '#fb923c', blobB: '#f472b6', icon: 'rocket' },
};

const DEFAULT_STYLE: WorkHeroStyle = { from: '#030b1c', to: '#142a63', blobA: '#7c3aed', blobB: '#22d3ee', icon: 'layers' };

@Component({
  selector: 'tn-work-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div
      class="work-hero"
      [style.background]="'linear-gradient(135deg,' + style.from + ' 0%,' + style.to + ' 100%)'"
    >
      <span class="work-hero__blob work-hero__blob--a" [style.background]="style.blobA"></span>
      <span class="work-hero__blob work-hero__blob--b" [style.background]="style.blobB"></span>
      <span class="work-hero__grid"></span>

      <span class="work-hero__badge">{{ category }}</span>

      <span class="work-hero__icon">
        <tn-icon [name]="style.icon" [size]="26" strokeColor="#fff" />
      </span>
    </div>
  `,
  styles: [`
    .work-hero {
      position: relative;
      aspect-ratio: 16 / 9;
      min-height: 140px;
      border-radius: var(--radius-md);
      overflow: hidden;
      margin-bottom: var(--space-4);
    }
    .work-hero__blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(28px);
      opacity: 0.45;
    }
    .work-hero__blob--a { width: 140px; height: 140px; top: -40px; right: -30px; }
    .work-hero__blob--b { width: 130px; height: 130px; bottom: -50px; left: -30px; opacity: 0.35; }
    .work-hero__grid {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.6px);
      background-size: 16px 16px;
      opacity: 0.5;
    }
    .work-hero__badge {
      position: absolute;
      top: var(--space-3);
      left: var(--space-3);
      z-index: 1;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.22);
      backdrop-filter: blur(4px);
      color: #fff;
      font-size: var(--fs-xs);
      font-weight: var(--fw-semibold);
      padding: 4px 12px;
      border-radius: var(--radius-pill);
    }
    .work-hero__icon {
      position: absolute;
      inset: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .work-hero__icon tn-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: var(--radius-lg);
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.24);
      backdrop-filter: blur(4px);
    }
  `],
})
export class WorkHeroComponent {
  @Input() category = '';

  get style(): WorkHeroStyle {
    return WORK_HERO_STYLES[this.category] ?? DEFAULT_STYLE;
  }
}
