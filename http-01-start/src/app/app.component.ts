import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  errorMessage: string;
  errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.errorSubscription = this.postsService.error.subscribe((error) => {
      this.errorMessage = error;
    });

    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  private fetchPosts() {
    this.isLoading = true;
    this.errorMessage = null;
    this.postsService.fetchPosts().subscribe(
      (response) => {
        this.isLoading = false;
        this.loadedPosts = response;
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        this.errorMessage = error.message;
      }
    );
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onACKError() {
    this.errorMessage = null;
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.errorMessage = null;
    this.postsService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
