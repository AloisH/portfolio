import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLight : boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.changeTheme();
    }
  }

  changeTheme() {

    if (this.isLight) {
      document.documentElement.style.setProperty('--background-color', '#000000');
      document.documentElement.style.setProperty('--text-color', '#FDFDFD');
      document.documentElement.style.setProperty('--outline', '#C4C4C4');
      document.documentElement.style.setProperty('--main-background-color', "#0C0C0C")

      this.isLight = false;
      return;
    }

    document.documentElement.style.setProperty('--background-color', '#F9F9F9');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--outline', '#CFCFCF');
    document.documentElement.style.setProperty('--main-background-color', "#F6F6F6")
    
    this.isLight = true;
  }

}
