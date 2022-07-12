import { Component, OnInit, OnDestroy } from '@angular/core'
import { NewsService } from '../news.service'
import { Article } from '../news.model'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
    news?: Article[]
    newsSubscription?: Subscription

    constructor(private newsService: NewsService) {}

    ngOnInit(): void {
        this.newsSubscription = this.newsService
            .fetchNews()
            .subscribe((data) => {
                this.news = data.articles
                console.log(this.news)
            })
    }

    ngOnDestroy(): void {
        if (this.newsSubscription) {
            this.newsSubscription.unsubscribe()
        }
    }
}
// Subscribe in service
