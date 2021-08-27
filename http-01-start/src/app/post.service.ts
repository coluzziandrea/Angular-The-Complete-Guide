import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostService {
  static API_URL: string =
    "https://ng-complete-guide-728c7-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(PostService.API_URL + "posts.json", postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  deleteAllPosts() {
    this.http
      .delete<{}>(PostService.API_URL + "posts.json")
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(PostService.API_URL + "posts.json")
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }
}
