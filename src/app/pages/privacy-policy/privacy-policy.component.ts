import { Component } from '@angular/core';
import { LegalDocumentComponent } from '../../shared/components/legal-document/legal-document.component';
import { PRIVACY_POLICY } from '../../core/data/legal-data';

@Component({
  selector: 'tn-privacy-policy',
  standalone: true,
  imports: [LegalDocumentComponent],
  template: `<tn-legal-document [doc]="doc" />`,
})
export class PrivacyPolicyComponent {
  doc = PRIVACY_POLICY;
}
