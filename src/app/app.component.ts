import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call-api-get-method-in-angular';
  isDataLoaded = false;

    constructor(private service:SharedService) {

    }

    PostList:any=[];

    ngOnInit(): void {
      // this.getList();
    }

    getList() {
      this.service.getPostList().subscribe(data=> { this.PostList = data; });
    }

    onLoadData() {
      this.getList();
      this.isDataLoaded = true;
    }

}
