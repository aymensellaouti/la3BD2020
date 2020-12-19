import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { WordComponent } from './word/word.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color', component: ColorComponent },
  { path: 'word', component: WordComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
