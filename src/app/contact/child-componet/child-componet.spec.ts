import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponet } from './child-componet';

describe('ChildComponet', () => {
  let component: ChildComponet;
  let fixture: ComponentFixture<ChildComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
