import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpControlConfigurationComponent } from './pop-up-control-configuration.component';

describe('PopUpControlConfigurationComponent', () => {
  let component: PopUpControlConfigurationComponent;
  let fixture: ComponentFixture<PopUpControlConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpControlConfigurationComponent]
    });
    fixture = TestBed.createComponent(PopUpControlConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
