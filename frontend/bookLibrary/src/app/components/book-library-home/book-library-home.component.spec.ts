import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLibraryHomeComponent } from './book-library-home.component';

describe('BookLibraryHomeComponent', () => {
  let component: BookLibraryHomeComponent;
  let fixture: ComponentFixture<BookLibraryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLibraryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLibraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
