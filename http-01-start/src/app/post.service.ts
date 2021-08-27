import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostService {
  static API_URL: string =
    "https://ng-complete-guide-728c7-default-rtdb.europe-west1.firebasedatabase.app/";

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(PostService.API_URL + "posts.json", postData, {
        observe: "response",
      })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  deleteAllPosts() {
    return this.http
      .delete(PostService.API_URL + "posts.json", {
        observe: "events",
        responseType: "text",
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          } else if (event.type === HttpEventType.DownloadProgress) {
            // it can be very helpful to inform user about the status of the request
          }
          console.log(event);
        })
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    return this.http
      .get<{ [key: string]: Post }>(PostService.API_URL + "posts.json", {
        headers: new HttpHeaders({ "Custom-Header": "hello" }),
        params: searchParams,
        responseType: "json", // default
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorResponse) => {
          // send analytics to server
          return throwError(errorResponse);
        })
      );
  }
}
