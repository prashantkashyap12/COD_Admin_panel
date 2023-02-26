import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTransferMoneyComponent } from './panel-transfer-money.component';

describe('PanelTransferMoneyComponent', () => {
  let component: PanelTransferMoneyComponent;
  let fixture: ComponentFixture<PanelTransferMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTransferMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelTransferMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
