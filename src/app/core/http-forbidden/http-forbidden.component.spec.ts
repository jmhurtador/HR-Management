import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpForbiddenComponent } from './http-forbidden.component';

describe('HttpForbiddenComponent', () => {
  let component: HttpForbiddenComponent;
  let fixture: ComponentFixture<HttpForbiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpForbiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
