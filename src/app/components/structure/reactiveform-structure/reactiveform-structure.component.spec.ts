import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformStructureComponent } from './reactiveform-structure.component';

describe('ReactiveformStructureComponent', () => {
  let component: ReactiveformStructureComponent;
  let fixture: ComponentFixture<ReactiveformStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveformStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
