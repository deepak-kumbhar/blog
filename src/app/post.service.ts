import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBlogPayload } from './add-post/get-blog-payload';
import { PostPayload } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8000/api/";

  //get post list
  getPostList(getBlogPayload: GetBlogPayload): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'blog/getBlogList', getBlogPayload, { headers: headers });

  }


  //save post list
  addPost(postPayload: PostPayload): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'blog/createBlog', postPayload, { headers: headers });

  }

  //get post by id
  getPostById(id: Number): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.baseUrl + 'blog/getBlogDetails/' + id, { headers: headers });

  }


  //save post list
  publishBlog(id: Number, publishBlogPayload: GetBlogPayload): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.patch(this.baseUrl + 'blog/updateBlog/' + id, publishBlogPayload, { headers: headers });

  }
}
