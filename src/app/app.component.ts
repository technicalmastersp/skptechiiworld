import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'tn-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <tn-header />
    <main>
      <router-outlet />
    </main>
    <tn-footer />
  `,
})
export class AppComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.init();
  }
}
