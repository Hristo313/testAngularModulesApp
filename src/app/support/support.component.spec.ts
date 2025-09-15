import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxAvatarModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { IgxPieChartModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportComponent],
      imports: [NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxAvatarModule, IgxGridModule, IgxPieChartModule, IgxCategoryChartModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
