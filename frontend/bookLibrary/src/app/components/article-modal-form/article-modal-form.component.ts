import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-article-modal-form',
  templateUrl: './article-modal-form.component.html',
  styleUrls: ['./article-modal-form.component.css']
})
export class ArticleModalFormComponent implements OnInit {
  articleTypes = ['tweet', 'blog_post', 'facebook_post'];

  constructor(public dialogRef: MatDialogRef<ArticleModalFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { width: string, name: string, text: string, article_type: string }) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
