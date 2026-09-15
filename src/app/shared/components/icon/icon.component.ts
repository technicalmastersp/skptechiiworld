import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Central icon registry — every icon used anywhere in the app is defined
 * once here as a stroke-based path set, keeping visual style consistent
 * (single source of truth for iconography).
 */
@Component({
  selector: 'tn-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="strokeColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="tn-icon"
    >
      <ng-container [ngSwitch]="name">
        <ng-container *ngSwitchCase="'heart'">
          <path d="M12.1 20.3 4.6 13c-2-2-2-5.2 0-7.2 2-2 5.2-2 7.2 0l.3.3.3-.3c2-2 5.2-2 7.2 0 2 2 2 5.2 0 7.2l-7.5 7.3Z" />
        </ng-container>
        <ng-container *ngSwitchCase="'clock'">
          <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
        </ng-container>
        <ng-container *ngSwitchCase="'tag'">
          <path d="M12.6 3H6a1 1 0 0 0-1 1v6.6c0 .3.1.5.3.7l9 9c.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4l-9-9c-.2-.2-.4-.3-.7-.3Z" /><circle cx="8.5" cy="7.5" r="1.3" />
        </ng-container>
        <ng-container *ngSwitchCase="'headset'">
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="1.5" /><rect x="17.5" y="13" width="4" height="6" rx="1.5" /><path d="M20 19.5A4 4 0 0 1 16 22h-1" />
        </ng-container>
        <ng-container *ngSwitchCase="'code'">
          <path d="M9 8 4.5 12 9 16" /><path d="M15 8l4.5 4-4.5 4" />
        </ng-container>
        <ng-container *ngSwitchCase="'mobile'">
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 19h3" />
        </ng-container>
        <ng-container *ngSwitchCase="'search'">
          <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5" />
        </ng-container>
        <ng-container *ngSwitchCase="'palette'">
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 1.8-2-.1-.6-.5-1-.5-1.6 0-.8.7-1.4 1.5-1.4H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8Z" /><circle cx="7.7" cy="11" r="1" /><circle cx="9.8" cy="7.2" r="1" /><circle cx="14.2" cy="7.2" r="1" /><circle cx="16.3" cy="11" r="1" />
        </ng-container>
        <ng-container *ngSwitchCase="'cloud'">
          <path d="M7.5 18.5a4 4 0 0 1-.5-8 5 5 0 0 1 9.7-1.6A4.2 4.2 0 0 1 18 17c0 .5 0 1-.1 1.5Z" />
        </ng-container>
        <ng-container *ngSwitchCase="'monitor'">
          <rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" />
        </ng-container>
        <ng-container *ngSwitchCase="'code-brackets'">
          <path d="M9 8 4.5 12 9 16M15 8l4.5 4-4.5 4M13.5 5 10.5 19" />
        </ng-container>
        <ng-container *ngSwitchCase="'server'">
          <rect x="3.5" y="3.5" width="17" height="6" rx="1.5" /><rect x="3.5" y="14.5" width="17" height="6" rx="1.5" /><path d="M7 6.5h.01M7 17.5h.01" />
        </ng-container>
        <ng-container *ngSwitchCase="'wordpress'">
          <circle cx="12" cy="12" r="9" /><path d="M5.5 9.5 9 17M9.5 9.5 12.7 17M14.2 9.5 18 17" />
        </ng-container>
        <ng-container *ngSwitchCase="'cart'">
          <circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" /><path d="M2.5 3h2l2.2 12.2A2 2 0 0 0 8.7 17H19a2 2 0 0 0 2-1.6L22.5 7H6" />
        </ng-container>
        <ng-container *ngSwitchCase="'card'">
          <rect x="2.5" y="5.5" width="19" height="13" rx="2" /><path d="M2.5 10h19M6 14.5h4" />
        </ng-container>
        <ng-container *ngSwitchCase="'gear'">
          <circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v2.4M12 19.1v2.4M4.6 6.6l1.7 1.7M17.7 15.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 17.4l1.7-1.7M17.7 8.3l1.7-1.7" />
        </ng-container>
        <ng-container *ngSwitchCase="'briefcase'">
          <rect x="2.5" y="7.5" width="19" height="12" rx="2" /><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M2.5 12.8h19" />
        </ng-container>
        <ng-container *ngSwitchCase="'grad-cap'">
          <path d="M2.5 9.5 12 5l9.5 4.5-9.5 4.5-9.5-4.5Z" /><path d="M6 11.7v4.3c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.3" />
        </ng-container>
        <ng-container *ngSwitchCase="'chart'">
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </ng-container>
        <ng-container *ngSwitchCase="'rocket'">
          <path d="M13 3c3 0 6.5 2 7.5 7-3 1-6.5 0-8.5-2s-3-5.5-2-8.5c1.5.2 2.4.7 3 3.5Z" /><path d="M9.5 14.5 5 19M7 17l-3 1 1-3" />
        </ng-container>
        <ng-container *ngSwitchCase="'smile'">
          <circle cx="12" cy="12" r="9" /><path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2M9 9.5h.01M15 9.5h.01" />
        </ng-container>
        <ng-container *ngSwitchCase="'star'">
          <path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.9Z" />
        </ng-container>
        <ng-container *ngSwitchCase="'target'">
          <circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </ng-container>
        <ng-container *ngSwitchCase="'design'">
          <rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" />
        </ng-container>
        <ng-container *ngSwitchCase="'build'">
          <path d="M14.5 6.5 18 3l3 3-3.5 3.5M14.5 6.5 4 17v3h3L17.5 9.5M14.5 6.5l3 3" />
        </ng-container>
        <ng-container *ngSwitchCase="'deploy'">
          <path d="M12 21c4-2 7-5.4 7-10.4A7 7 0 0 0 12 3a7 7 0 0 0-7 7.6C5 15.6 8 19 12 21Z" /><circle cx="12" cy="10.5" r="2.3" />
        </ng-container>
        <ng-container *ngSwitchCase="'support'">
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="1.5" /><rect x="17.5" y="13" width="4" height="6" rx="1.5" />
        </ng-container>
        <ng-container *ngSwitchCase="'arrow-right'">
          <path d="M4 12h16M14 6l6 6-6 6" />
        </ng-container>
        <ng-container *ngSwitchCase="'check'">
          <path d="M20 6.5 9.5 17 4 11.5" />
        </ng-container>
        <ng-container *ngSwitchCase="'check-circle'">
          <circle cx="12" cy="12" r="9" /><path d="M8 12.3l2.7 2.7L16.5 9" />
        </ng-container>
        <ng-container *ngSwitchCase="'phone'">
          <path d="M6 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3c0 1-.9 1.7-1.9 1.6C11.5 19 5 12.5 4.4 5.4 4.3 4.4 5 3.5 6 3.5Z" />
        </ng-container>
        <ng-container *ngSwitchCase="'mail'">
          <rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M3.5 6.5 12 13l8.5-6.5" />
        </ng-container>
        <ng-container *ngSwitchCase="'map-pin'">
          <path d="M12 21.5s7-6.3 7-12A7 7 0 0 0 5 9.5c0 5.7 7 12 7 12Z" /><circle cx="12" cy="9.5" r="2.4" />
        </ng-container>
        <ng-container *ngSwitchCase="'menu'">
          <path d="M4 6.5h16M4 12h16M4 17.5h16" />
        </ng-container>
        <ng-container *ngSwitchCase="'close'">
          <path d="M5 5l14 14M19 5 5 19" />
        </ng-container>
        <ng-container *ngSwitchCase="'chevron-right'">
          <path d="M9 5.5 15.5 12 9 18.5" />
        </ng-container>
        <ng-container *ngSwitchCase="'chevron-down'">
          <path d="M5.5 9 12 15.5 18.5 9" />
        </ng-container>
        <ng-container *ngSwitchCase="'linkedin'">
          <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10.5v6M7.5 8v.01M12 16.5v-3.7c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2 1 2.2 2.3v3.7" />
        </ng-container>
        <ng-container *ngSwitchCase="'twitter'">
          <path d="M21 5.5c-.7.5-1.5.8-2.4 1a3.6 3.6 0 0 0-6.1 3.3A10.2 10.2 0 0 1 4 5.5s-2 4.8 2.5 7.3a10 10 0 0 1-4 .3s.5 3.3 4.5 4.1a10.4 10.4 0 0 1-6 1.3c8 4.6 17-1 17-10.4v-.9c.8-.6 1.4-1.4 2-2.3" />
        </ng-container>
        <ng-container *ngSwitchCase="'youtube'">
          <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" /><path d="M10.5 9.3v5.4L15.2 12l-4.7-2.7Z" fill="currentColor" stroke="none" />
        </ng-container>
        <ng-container *ngSwitchCase="'instagram'">
          <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </ng-container>
        <ng-container *ngSwitchCase="'facebook'">
          <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M14 21v-6.5h2.2l.4-3H14V9.3c0-.9.3-1.5 1.7-1.5H16.7V5.1c-.3 0-1.3-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.5H8v3h2.5V21" />
        </ng-container>
        <ng-container *ngSwitchCase="'lightbulb'">
          <path d="M9 18h6M10 21h4" /><path d="M12 2.5a6.5 6.5 0 0 0-3.5 12c.5.4.8 1 .8 1.6V17h5.4v-.9c0-.6.3-1.2.8-1.6a6.5 6.5 0 0 0-3.5-12Z" />
        </ng-container>
        <ng-container *ngSwitchCase="'shield'">
          <path d="M12 3 4.5 6v6c0 5 3.4 8 7.5 9 4.1-1 7.5-4 7.5-9V6L12 3Z" />
        </ng-container>
        <ng-container *ngSwitchCase="'layers'">
          <path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
        </ng-container>
        <ng-container *ngSwitchCase="'users'">
          <circle cx="8.5" cy="8" r="3" /><path d="M2.5 19c0-3 2.7-5 6-5s6 2 6 5" /><path d="M15.5 6a3 3 0 1 1 0 6M17.5 14c2.3.5 4 2.2 4 5" />
        </ng-container>
      </ng-container>
    </svg>
  `,
  styles: [`
    .tn-icon { display: block; flex-shrink: 0; }
  `],
})
export class IconComponent {
  @Input() name = '';
  @Input() size = 20;
  @Input() strokeColor = 'currentColor';
}
