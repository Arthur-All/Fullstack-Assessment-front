import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistItemComponent } from './employeelist-item.component';

describe('EmployeelistItemComponent', () => {
  let component: EmployeelistItemComponent;
  let fixture: ComponentFixture<EmployeelistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeelistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
