import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuIsOpen: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  isLightMode() {
    return this.themeService.isLight;
  }

  changeTheme() {
    this.themeService.changeTheme();
  }

  openMenu() {
    this.menuIsOpen = true;
  }

  closeMenu() {
    this.menuIsOpen = false;
  }
}
