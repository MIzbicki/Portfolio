import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPRequestsComponent } from './http-requests.component';

describe('HTTPRequestsComponent', () => {
  let component: HTTPRequestsComponent;
  let fixture: ComponentFixture<HTTPRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTTPRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
