import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLiveGammerComponent } from './panel-live-gammer.component';

describe('PanelLiveGammerComponent', () => {
  let component: PanelLiveGammerComponent;
  let fixture: ComponentFixture<PanelLiveGammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLiveGammerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLiveGammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
