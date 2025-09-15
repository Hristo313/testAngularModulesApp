import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { SalesType } from '../models/financial/sales-type';
import { SupportTicketsType } from '../models/crmaigenerated-data/support-tickets-type';
import { CRMAIGeneratedDataService } from '../services/crmaigenerated-data.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-support',
  standalone: false,
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public financialSales: SalesType[] = [];
  public cRMAIGeneratedDataSupportTickets: SupportTicketsType[] = [];

  constructor(
    private financialService: FinancialService,
    private cRMAIGeneratedDataService: CRMAIGeneratedDataService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialBoxOfficeRevenue = data
    );
    this.financialService.getSales().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialSales = data
    );
    this.cRMAIGeneratedDataService.getSupportTicketsList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.cRMAIGeneratedDataSupportTickets = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
