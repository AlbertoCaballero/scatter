import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewerRowComponent } from './dataviewer-row.component';

describe('DataviewerRowComponent', () => {
  let component: DataviewerRowComponent;
  let fixture: ComponentFixture<DataviewerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataviewerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
