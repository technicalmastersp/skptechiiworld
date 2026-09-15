import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { COMPANY, NAV_LINKS } from '../../../core/data/site-data';

@Component({
  selector: 'tn-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent],
  template: `
    <header class="header">
      <div class="container header__inner">
        <a routerLink="/" class="brand" (click)="closeMenu()">
          <span class="brand__mark">TV</span>
          <span class="brand__text">
            <strong>{{ company.name }}</strong>
            <small>{{ company.tagline }}</small>
          </span>
        </a>

        <nav class="nav" [class.nav--open]="menuOpen()">
          <a
            *ngFor="let link of navLinks"
            [routerLink]="link.path"
            routerLinkActive="nav__link--active"
            [routerLinkActiveOptions]="{ exact: link.path === '/' }"
            class="nav__link"
            (click)="closeMenu()"
          >{{ link.label }}</a>

          <a routerLink="/contact" class="btn btn-primary nav__cta" (click)="closeMenu()">
            Get a Free Quote <tn-icon name="arrow-right" [size]="16" />
          </a>
        </nav>

        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          <tn-icon [name]="menuOpen() ? 'close' : 'menu'" [size]="24" />
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--color-border-soft);
      height: var(--header-height);
      display: flex;
      align-items: center;
    }
    .header__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .brand { display: flex; align-items: center; gap: var(--space-3); }
    .brand__mark {
      width: 42px; height: 42px;
      border-radius: var(--radius-md);
      background: var(--gradient-brand);
      color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: var(--fw-extrabold);
      font-size: var(--fs-sm);
      letter-spacing: -1px;
      flex-shrink: 0;
    }
    .brand__text { display: flex; flex-direction: column; line-height: 1.2; }
    .brand__text strong { font-size: var(--fs-md); color: var(--color-text-heading); font-weight: var(--fw-extrabold); }
    .brand__text small { font-size: 0.7rem; color: var(--color-text-muted); }

    .nav { display: flex; align-items: center; gap: var(--space-6); }
    .nav__link {
      font-size: var(--fs-sm);
      font-weight: var(--fw-medium);
      color: var(--color-text-body);
      transition: color var(--transition-fast);
    }
    .nav__link:hover, .nav__link--active { color: var(--color-primary); }
    .nav__cta { margin-left: var(--space-2); }
    .menu-toggle { display: none; background: none; border: none; color: var(--color-text-heading); }

    @media (max-width: 992px) {
      .nav__link { font-size: var(--fs-xs); }
      .nav { gap: var(--space-4); }
      .brand__text small { display: none; }
    }

    @media (max-width: 860px) {
      .menu-toggle { display: flex; }
      .nav {
        position: fixed;
        top: var(--header-height);
        right: 0;
        left: 0;
        background: #fff;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        padding: var(--space-4) var(--space-6) var(--space-8);
        box-shadow: var(--shadow-lg);
        transform: translateY(-8px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all var(--transition-base);
      }
      .nav--open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      .nav__link {
        width: 100%;
        padding: var(--space-3) 0;
        border-bottom: 1px solid var(--color-border-soft);
      }
      .nav__cta { margin: var(--space-4) 0 0; width: 100%; justify-content: center; }
    }
  `],
})
export class HeaderComponent {
  company = COMPANY;
  navLinks = NAV_LINKS;
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
