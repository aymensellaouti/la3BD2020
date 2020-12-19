import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { WordComponent } from './word/word.component';

// blabla
const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailPersonneComponent },
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
