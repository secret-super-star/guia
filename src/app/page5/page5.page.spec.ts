import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5Page } from './page5.page';

describe('Page5Page', () => {
  let component: Page5Page;
  let fixture: ComponentFixture<Page5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
