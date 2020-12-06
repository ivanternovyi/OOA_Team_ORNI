import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ArticleModalFormComponent } from '../article-modal-form/article-modal-form.component';
import { environment } from 'src/environments/environment';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface ArticleData {
  id: string;
  name: string;
  text: string;
  article_type: string;
  updated_at: string;
  created_at: string;
  actions: string;
}

export interface Article {
  id: string;
  name: string;
  text: string;
  article_type: string;
  updated_at: string;
  created_at: string;
}


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  articlesUrl = environment.apiUrl + '/api/v1/articles/';


  displayedColumns: string[] = ['id', 'name', 'text', 'article_type', 'updated_at', 'created_at', 'actions'];
  dataSource: MatTableDataSource<ArticleData>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  articleData = {
    name: '',
    text: '',
    article_type: ''
  };


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
    public dialog: MatDialog) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const idToken = localStorage.getItem('id_token');
    this.httpOptions.headers = new HttpHeaders({
      Authorization: 'Bearer ' + idToken
    });
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.updateArticlesData();
  }

  // tslint:disable-next-line:typedef
  openAddArticleModal(data = null) {
    const config = {
      width: '400px',
      data: this.articleData
    };

    if (data) {
      config.data = data;
    }
    const dialogRef = this.dialog.open(ArticleModalFormComponent, config);

    dialogRef.afterClosed().subscribe(articleData => {
      if (articleData && articleData.name && articleData.text && articleData.article_type) {
        this.addArticle(articleData);
      }
    });
  }

  // tslint:disable-next-line:typedef
  openUpdateArticleModal(data = null) {
    const config = {
      width: '400px',
      data
    };
    const dialogRef = this.dialog.open(ArticleModalFormComponent, config);

    dialogRef.afterClosed().subscribe(articleData => {
      if (articleData && articleData.name && articleData.text && articleData.article_type) {
        this.updateArticle(data.id, articleData);
      }
    });
  }

  // tslint:disable-next-line:typedef
  updateArticlesData() {
    this.getArticles().toPromise().then(articlesArray => {
      this.dataSource = new MatTableDataSource(articlesArray);

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  getArticles(): Observable<any> {
    return this.http.get<any>(this.articlesUrl, this.httpOptions);
  }

  addArticle(article): any {
    return this.http.post<Article>(this.articlesUrl, article, this.httpOptions)
      .toPromise().then(res => {
        this.updateArticlesData();
      });
  }

  updateArticle(id, article): any {
    return this.http.put<Article>(this.articlesUrl + id, article, this.httpOptions)
      .toPromise().then(res => {
        this.updateArticlesData();
      });
  }

  // tslint:disable-next-line:typedef
  removeArticle(id) {
    const url = this.articlesUrl + id;

    return this.http.delete<Article>(url, this.httpOptions)
      .toPromise().then(() => this.updateArticlesData());
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
