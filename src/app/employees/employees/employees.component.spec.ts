import { EmployeesComponent } from './employees.component';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';


describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // let pr1Em = employees.filter( (employee) => employee.project === 1 )
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
