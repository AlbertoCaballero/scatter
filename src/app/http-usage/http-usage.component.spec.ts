import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUsageComponent } from './http-usage.component';

describe('HttpUsageComponent', () => {
  let component: HttpUsageComponent;
  let fixture: ComponentFixture<HttpUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
