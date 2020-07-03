import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsBarHorizontalComponent } from './graphics-bar-horizontal.component';

describe('GraphicsBarHorizontalComponent', () => {
  let component: GraphicsBarHorizontalComponent;
  let fixture: ComponentFixture<GraphicsBarHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsBarHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsBarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
