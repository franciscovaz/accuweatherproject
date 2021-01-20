import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {

    const navBar = document.querySelector('.navbar') as HTMLElement;
    const navLink = document.querySelector('.navbar-links') as HTMLElement;

    navBar.classList.toggle('active');
    navLink.classList.toggle('active');
  }
}

