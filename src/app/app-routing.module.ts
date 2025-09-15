import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsWrapperComponent } from './customer-details-wrapper/customer-details-wrapper.component';
import { DealsComponent } from './deals/deals.component';
import { ReportsComponent } from './reports/reports.component';
import { SupportComponent } from './support/support.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'customers', component: CustomersComponent, data: { text: 'Customers' } },
  { path: 'customer-details-wrapper/:rCustomerID', component: CustomerDetailsWrapperComponent, data: { text: 'Customer-Details-Wrapper' } },
  { path: 'deals', component: DealsComponent, data: { text: 'Deals' } },
  { path: 'reports', component: ReportsComponent, data: { text: 'Reports' } },
  { path: 'support', component: SupportComponent, data: { text: 'Support' } },
  { path: 'calendar', component: CalendarComponent, data: { text: 'Calendar' } },
  { path: 'tasks', component: TasksComponent, data: { text: 'Tasks' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
