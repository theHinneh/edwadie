import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  megaMenuList: Array<any> = [
    {name: 'Hot Promotions', link: ''}, {name: 'Home, Garden &amp; Kitchen', link: ''}
  ]
  dropdownMenu: Array<string> = ['All', 'Bags', 'Shoes', 'Men', 'Women', 'Sunglasses']

  constructor() {
  }

  ngOnInit(): void {
  }

}
