import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .overrideComponent(ButtonComponent, {
      set: {
        changeDetection: ChangeDetectionStrategy.Default
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When type is submit =>', () => {
    beforeEach(() => {
      component.type = 'submit';
      fixture.detectChanges();
    });
    it('Should have the attribute submit...', () => {
      expect(el.attributes.type).toEqual('submit');
    });
  });

  describe('When type is button =>', () => {
    beforeEach(() => {
      component.type = 'button';
      fixture.detectChanges();
    });
    it('Should have the attribute submit...', () => {
      expect(el.attributes.type).toContain('button');
    });
  });

  describe('When color is Blue =>', () => {
    beforeEach(() => {
      component.color = 'blue';
      fixture.detectChanges();
    });
    it('Should have the class Blue in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('blue');
    });
  });

  describe('When color is Gray =>', () => {
    beforeEach(() => {
      component.color = 'gray';
      fixture.detectChanges();
    });
    it('Should have the class gray in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('gray');
    });
  });

  describe('When color is yellow =>', () => {
    beforeEach(() => {
      component.color = 'yellow';
      fixture.detectChanges();
    });
    it('Should have the class yellow in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('yellow');
    });
  });

  describe('When color is transparent =>', () => {
    beforeEach(() => {
      component.color = 'transparent';
      fixture.detectChanges();
    });
    it('Should have the class transparent in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('transparent');
    });
  });

  describe('When size is normal =>', () => {
    beforeEach(() => {
      component.size = 'normal';
      fixture.detectChanges();
    });
    it('Should have the class normal in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('normal');
    });
  });

  describe('When size is auto =>', () => {
    beforeEach(() => {
      component.size = 'auto';
      fixture.detectChanges();
    });
    it('Should hace the class auto in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('auto');
    });
  });

  describe('When size is none =>', () => {
    beforeEach(() => {
      component.size = 'none';
      fixture.detectChanges();
    });
    it('Should hace the class none in the component...', () => {
      const subject = el.nativeElement as HTMLButtonElement;
      expect(subject.className).toContain('none');
    });
  });
});
