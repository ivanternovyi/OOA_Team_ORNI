import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-modal-form',
  templateUrl: './article-modal-form.component.html',
  styleUrls: ['./article-modal-form.component.css']
})
export class ArticleModalFormComponent implements OnInit {
  articleTypes = ['tweet', 'blog_post', 'facebook_post'];
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ArticleModalFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { width: string, name: string, text: string, article_type: string }) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data.name, [
        Validators.required,
        Validators.minLength(1)]),
      text: new FormControl(this.data.text, [
        Validators.required,
        Validators.minLength(1)]),
      article_type: new FormControl(this.data.article_type, [
        Validators.required,
        Validators.minLength(1)]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
