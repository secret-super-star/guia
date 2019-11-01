import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7Page } from './page7.page';

describe('Page7Page', () => {
  let component: Page7Page;
  let fixture: ComponentFixture<Page7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
