import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLiveScoreComponent } from './panel-live-score.component';

describe('PanelLiveScoreComponent', () => {
  let component: PanelLiveScoreComponent;
  let fixture: ComponentFixture<PanelLiveScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLiveScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLiveScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
