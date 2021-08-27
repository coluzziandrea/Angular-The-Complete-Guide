import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe((response) => {
      this.isLoading = false;
      this.loadedPosts = response;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deleteAllPosts();
    this.loadedPosts = [];
  }
}
