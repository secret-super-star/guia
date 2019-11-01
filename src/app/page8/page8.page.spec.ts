import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page8Page } from './page8.page';

describe('Page8Page', () => {
  let component: Page8Page;
  let fixture: ComponentFixture<Page8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
