import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false
  profileMenu: boolean = false
  mobileMenu: boolean = false
  linkItems: Array<string> = ['Services', 'Categories', 'Contact']
  mobileMenuLinks: Array<string> = ['Your Profile', 'Settings', 'Sign out']

  constructor() {
  }

  ngOnInit(): void {
  }

  openProfileMenu(): void {
    this.profileMenu = !this.profileMenu
  }

  openMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu
  }
}
