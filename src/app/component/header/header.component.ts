import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string;
  token: string;

  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem("name");
    this.token = localStorage.getItem("token");

    document.addEventListener('DOMContentLoaded', function () {
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  }

  logOut() {
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("roles");
    window.location.href = '/';
  }

}
