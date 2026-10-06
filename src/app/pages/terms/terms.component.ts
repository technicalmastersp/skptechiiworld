import { Component } from '@angular/core';
import { LegalDocumentComponent } from '../../shared/components/legal-document/legal-document.component';
import { TERMS_AND_CONDITIONS } from '../../core/data/legal-data';

@Component({
  selector: 'tn-terms',
  standalone: true,
  imports: [LegalDocumentComponent],
  template: `<tn-legal-document [doc]="doc" />`,
})
export class TermsComponent {
  doc = TERMS_AND_CONDITIONS;
}
