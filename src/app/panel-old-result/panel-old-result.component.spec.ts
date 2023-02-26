import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOldResultComponent } from './panel-old-result.component';

describe('PanelOldResultComponent', () => {
  let component: PanelOldResultComponent;
  let fixture: ComponentFixture<PanelOldResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelOldResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOldResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
