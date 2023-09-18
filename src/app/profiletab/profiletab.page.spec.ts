import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ProfiletabPage } from './profiletab.page';

describe('ProfiletabPage', () => {
  let component: ProfiletabPage;
  let fixture: ComponentFixture<ProfiletabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfiletabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
