import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Settings } from './settings';

describe('Settings', () => {
  let component: Settings;
  let fixture: ComponentFixture<Settings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Settings],
    }).compileComponents();

    fixture = TestBed.createComponent(Settings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have accessible labels for all form controls', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nameInput = compiled.querySelector('input#name');
    const nameLabel = compiled.querySelector('label[for="name"]');
    expect(nameInput).toBeTruthy();
    expect(nameLabel).toBeTruthy();
    expect(nameLabel?.textContent).toContain('Name');

    const emailInput = compiled.querySelector('input#email');
    const emailLabel = compiled.querySelector('label[for="email"]');
    expect(emailInput).toBeTruthy();
    expect(emailLabel).toBeTruthy();
    expect(emailLabel?.textContent).toContain('Email');

    const notificationsSelect = compiled.querySelector('select#notifications');
    const notificationsLabel = compiled.querySelector('label[for="notifications"]');
    expect(notificationsSelect).toBeTruthy();
    expect(notificationsLabel).toBeTruthy();
    expect(notificationsLabel?.textContent).toContain('Notifications');

    const darkModeInput = compiled.querySelector('input#darkMode');
    const darkModeLabel = compiled.querySelector('label[for="darkMode"]');
    expect(darkModeInput).toBeTruthy();
    expect(darkModeLabel).toBeTruthy();
    expect(darkModeLabel?.textContent).toContain('Enable dark mode');
  });

  it('should display error message when email is invalid and touched', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailControl = component.settingsForm.controls.email;

    emailControl.setValue('invalid-email');
    emailControl.markAsTouched();
    fixture.detectChanges();
    await fixture.whenStable();

    const errorMessage = compiled.querySelector('#email-error');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage?.textContent).toContain('Please enter a valid email address.');

    const emailInput = compiled.querySelector('#email');
    expect(emailInput?.getAttribute('aria-invalid')).toBe('true');
  });
});

