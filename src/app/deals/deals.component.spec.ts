import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxAvatarModule, IgxInputGroupModule, IgxSelectModule, IgxButtonGroupModule } from '@infragistics/igniteui-angular';
import { DealsComponent } from './deals.component';

describe('DealsComponent', () => {
  let component: DealsComponent;
  let fixture: ComponentFixture<DealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealsComponent],
      imports: [NoopAnimationsModule, FormsModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxAvatarModule, IgxInputGroupModule, IgxSelectModule, IgxButtonGroupModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
