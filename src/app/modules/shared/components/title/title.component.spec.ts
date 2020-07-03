import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { DebugElement, ChangeDetectionStrategy } from '@angular/core';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .overrideComponent(
      TitleComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When initialize the component =>', () => {
    describe('And the prop size has informed =>', () => {
      describe('And the value is "large" =>', () => {
        it('Should render span with large as class...', () => {
          component.size = 'large';
          fixture.changeDetectorRef.detectChanges();
          const el = debugEl.nativeElement.querySelector('.title') as HTMLSpanElement;
          fixture.detectChanges();
          expect(el.className).toContain('large');
        });
      });

      describe('And the value is "small" =>', () => {
        beforeEach(() => {
          component.size = 'small';
          fixture.detectChanges();
        });
        it('Should render span with small as class...', () => {
          const el = debugEl.nativeElement.querySelector('.title') as HTMLSpanElement;
          expect(el.className).toContain('small');
        });
      });
    });
  });

  describe('And the property size hasnt be informed =>', () => {
    it('Should render span with small class has default css class...', () => {
      const el = debugEl.nativeElement.querySelector('.title') as HTMLSpanElement;
      expect(el.className).toContain('small');
    });
  });
});
