import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { AbouttabPage } from './abouttab.page';

describe('AbouttabPage', () => {
  let component: AbouttabPage;
  let fixture: ComponentFixture<AbouttabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbouttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
