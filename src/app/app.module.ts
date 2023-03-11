import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyAppErrorHandler } from './my-errors-handler/app-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { FormComponent } from './form/form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTPRequestsComponent } from './http-requests/http-requests.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { PostService } from './services/post.service';
import { MyFollowersService } from './services/my-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TicTacToeComponent,
    NotFoundComponent,
    FormComponent,
    ChangePasswordComponent,
    BoardComponent,
    SquareComponent,
    UdemyFormComponent,
    ContactFormComponent,
    HTTPRequestsComponent,
    MyFollowersComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    MyFollowersService,
    {provide: ErrorHandler, useClass: MyAppErrorHandler}
  ],
  bootstrap: [
    AppComponent,
    NavbarComponent
  ]
})
export class AppModule { }
