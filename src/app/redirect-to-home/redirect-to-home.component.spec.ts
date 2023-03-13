import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToHomeComponent } from './redirect-to-home.component';

describe('RedirectToHomeComponent', () => {
  let component: RedirectToHomeComponent;
  let fixture: ComponentFixture<RedirectToHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectToHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectToHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
