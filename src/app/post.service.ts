import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBlogPayload } from './add-post/get-blog-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://510fff8d0163.ngrok.io/api/";

  //get post list
  getPostList(getBlogPayload: GetBlogPayload): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'blog/getBlogList', getBlogPayload, { headers: headers });

  }
}
