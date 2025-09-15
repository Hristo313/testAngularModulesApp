import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxInputGroupModule, IgxGridModule, IgxPaginatorModule, IgxChipsModule, IgxActionStripModule, IgxDialogModule, IgxSnackbarModule } from '@infragistics/igniteui-angular';
import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersComponent],
      imports: [NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxInputGroupModule, IgxGridModule, IgxPaginatorModule, IgxChipsModule, IgxActionStripModule, IgxDialogModule, IgxSnackbarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
