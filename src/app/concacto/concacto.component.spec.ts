import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcactoComponent } from './concacto.component';

describe('ConcactoComponent', () => {
  let component: ConcactoComponent;
  let fixture: ComponentFixture<ConcactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
