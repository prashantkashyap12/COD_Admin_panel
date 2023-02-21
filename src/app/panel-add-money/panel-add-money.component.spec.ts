import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddMoneyComponent } from './panel-add-money.component';

describe('PanelAddMoneyComponent', () => {
  let component: PanelAddMoneyComponent;
  let fixture: ComponentFixture<PanelAddMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAddMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
