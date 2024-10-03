import { Invoice } from '../../model/Invoice';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  invoice!:Invoice;
  
  constructor(private service:InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
