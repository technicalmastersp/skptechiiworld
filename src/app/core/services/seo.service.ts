import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BRAND, COMPANY, PAGE_META } from '../data/site-data';

const DEFAULT_META = PAGE_META[0];

/**
 * Updates <title>, meta description, canonical link and Open Graph/Twitter
 * tags (including the BRAND share image) on every navigation, reading from the single PAGE_META source of
 * truth in site-data.ts. Kept separate from AppComponent so it can be
 * unit-tested in isolation.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  init(): void {
    this.apply(this.router.url);
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.apply(e.urlAfterRedirects));
  }

  private apply(url: string): void {
    const path = url.split('?')[0].split('#')[0] || '/';
    const page = PAGE_META.find((p) => p.path === path) ?? DEFAULT_META;
    const canonicalUrl = `${COMPANY.domain}${page.path === '/' ? '' : page.path}`;
    // Social crawlers require an absolute image URL.
    const imageUrl = `${COMPANY.domain}${BRAND.ogImage.path}`;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: COMPANY.name });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: String(BRAND.ogImage.width) });
    this.meta.updateTag({ property: 'og:image:height', content: String(BRAND.ogImage.height) });
    this.meta.updateTag({ property: 'og:image:alt', content: BRAND.ogImage.alt });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:image:alt', content: BRAND.ogImage.alt });

    this.setCanonicalLink(canonicalUrl);
  }

  private setCanonicalLink(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
