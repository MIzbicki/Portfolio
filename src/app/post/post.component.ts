import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response;
        },
        //in this place if error occurred it is throwing on Global error handler ( throw error; )
        /*
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        }*/
      );
  }

  /*
  //works correctly
  constructor(private http: HttpClient) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(response => response)
      ).subscribe(response => {
        this.posts = (response);
        console.log(typeof response);
        console.log(this.posts);
      });
  }
  */

  /*
  //doesn't works
  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        //this.posts = JSON.stringify(response);
        console.log(response);
        this.posts = response;
      });
  }*/

  addToList(myInput: any) {
    let post = { title: myInput.value };
    myInput.value = '';

    this.service.create(post)
      .subscribe(response => {
        console.log("POST: ", response);
        this.posts.splice(0, 0, response);
      },
      /*error => {
        alert('An unexpected error occurred.');
        console.log(error);
      }*/);
  }

  updatePost(post: any) {
    //put updates all object
    this.service.update(post)
      .subscribe(response => {
        console.log("PUT: ", response);
      },
      /*
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      }*/
      );
  }

  deletePost(post: any) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        /*(error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted.');
          }
          else
            throw error;
        }*/);
  }
}
