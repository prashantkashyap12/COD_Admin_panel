import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLiveUserComponent } from './panel-live-user.component';

describe('PanelLiveUserComponent', () => {
  let component: PanelLiveUserComponent;
  let fixture: ComponentFixture<PanelLiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLiveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
