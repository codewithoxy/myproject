import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlConfigurationComponent } from './control-configuration.component';

describe('ControlConfigurationComponent', () => {
  let component: ControlConfigurationComponent;
  let fixture: ComponentFixture<ControlConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlConfigurationComponent]
    });
    fixture = TestBed.createComponent(ControlConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
