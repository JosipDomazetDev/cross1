import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { MaptabPage } from './maptab.page';

describe('MaptabPage', () => {
  let component: MaptabPage;
  let fixture: ComponentFixture<MaptabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaptabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
