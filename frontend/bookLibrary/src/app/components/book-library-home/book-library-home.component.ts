import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-library-home',
  templateUrl: './book-library-home.component.html',
  styleUrls: ['./book-library-home.component.scss']
})
export class BookLibraryHomeComponent implements OnInit {
  title = 'bookLibrary';

  userName = '';

  constructor(private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.userName = localStorage.getItem('name');
  }

  // tslint:disable-next-line:typedef
  logOut() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('name');
    this.router.navigate(['/login']);
  }
}
