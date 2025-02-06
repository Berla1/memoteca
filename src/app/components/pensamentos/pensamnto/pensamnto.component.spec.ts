import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamntoComponent } from './pensamnto.component';

describe('PensamntoComponent', () => {
  let component: PensamntoComponent;
  let fixture: ComponentFixture<PensamntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensamntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
