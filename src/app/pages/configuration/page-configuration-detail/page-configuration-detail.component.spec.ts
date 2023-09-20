import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfigurationDetailComponent } from './page-configuration-detail.component';

describe('PageConfigurationDetailComponent', () => {
  let component: PageConfigurationDetailComponent;
  let fixture: ComponentFixture<PageConfigurationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConfigurationDetailComponent]
    });
    fixture = TestBed.createComponent(PageConfigurationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
