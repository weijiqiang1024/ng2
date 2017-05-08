import { Component } from '@angular/core';

import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular2', 'http://www.baidu.com', 10),
      new Article('Html', 'http://www.baidu.com', 5),
      new Article('Css', 'http://www.baidu.com', 6),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding Article title:${title.value} and link:${link.value}`);
    if(title.value =='' && link.value == ''){
      alert("内容不能为空！");
    }else{
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
    }
  }
//文章排序
  sortedArticle():Article[]{
    return this.articles.sort((a:Article,b:Article) => b.votes - a.votes);
  }
}
