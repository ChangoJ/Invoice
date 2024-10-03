import { InvoiceComponent } from './app/components/invoice/invoice.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));
