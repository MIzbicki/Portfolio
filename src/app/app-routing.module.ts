import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormComponent } from './form/form.component';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'form-1', component: FormComponent },
  { path: 'form-2', component: UdemyFormComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
