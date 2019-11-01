import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13Page } from './page13.page';

describe('Page13Page', () => {
  let component: Page13Page;
  let fixture: ComponentFixture<Page13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
