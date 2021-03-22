import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingExercisesPageComponent } from './reading-exercises-page.component';

describe('ReadingExercisesPageComponent', () => {
  let component: ReadingExercisesPageComponent;
  let fixture: ComponentFixture<ReadingExercisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingExercisesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingExercisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
