import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isLight: boolean;

  constructor() {
    this.isLight = true;

    this.loadPreferedTheme();
    this.setColor();
  }

  private loadPreferedTheme() {
    // Check if user selectionned a prefered theme
    if (localStorage.getItem('themeMode') != null) {
      this.isLight =
        localStorage.getItem('themeMode') === 'light' ? true : false;
      return;
    }

    // Check if user has a prefered system theme
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.isLight = false;
    }

    // Save PreferedTheme in local Storage
    this.setPreferedTheme();
  }

  private setPreferedTheme() {
    localStorage.setItem('themeMode', this.isLight ? 'light' : 'dark');
  }

  changeTheme() {
    if (this.isLight) {
      this.isLight = false;
      this.setColor();
    } else {
      this.isLight = true;
      this.setColor();
    }
    this.setPreferedTheme();
  }

  setColor() {
    if (this.isLight) {
      document.documentElement.style.setProperty(
        '--background-color',
        '#F9F9F9'
      );
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--outline', '#CFCFCF');
      document.documentElement.style.setProperty(
        '--main-background-color',
        '#F6F6F6'
      );
      document.documentElement.style.setProperty('--button-blue', '#5c9dff');
    } else {
      document.documentElement.style.setProperty(
        '--background-color',
        '#000000'
      );
      document.documentElement.style.setProperty('--text-color', '#FDFDFD');
      document.documentElement.style.setProperty('--outline', '#C4C4C4');
      document.documentElement.style.setProperty(
        '--main-background-color',
        '#0C0C0C'
      );
      document.documentElement.style.setProperty('--button-blue', '#337ce9');
    }
  }
}
