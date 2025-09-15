import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxTabsModule, IgxGridModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxListModule, IgxChipsModule } from '@infragistics/igniteui-angular';
import { CustomerDetailsWrapperComponent } from './customer-details-wrapper.component';

describe('CustomerDetailsWrapperComponent', () => {
  let component: CustomerDetailsWrapperComponent;
  let fixture: ComponentFixture<CustomerDetailsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDetailsWrapperComponent],
      imports: [NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxTabsModule, IgxGridModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxListModule, IgxChipsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
