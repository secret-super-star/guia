import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page6Page } from './page6.page';

describe('Page6Page', () => {
  let component: Page6Page;
  let fixture: ComponentFixture<Page6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
