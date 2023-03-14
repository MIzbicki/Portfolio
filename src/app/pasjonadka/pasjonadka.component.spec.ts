import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasjonadkaComponent } from './pasjonadka.component';

describe('PasjonadkaComponent', () => {
  let component: PasjonadkaComponent;
  let fixture: ComponentFixture<PasjonadkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasjonadkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasjonadkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
