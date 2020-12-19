import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ColorComponent } from './color/color.component';
import { TwoComponent } from './two/two.component';
import { RecapCompoComponent } from './components/recap-compo/recap-compo.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { TestNgstyleComponent } from './directives/test-ngstyle/test-ngstyle.component';
import { WordComponent } from './word/word.component';
import { TestNgclassComponent } from './directives/test-ngclass/test-ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { TestNgIFComponent } from './components/test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './components/test-ng-for/test-ng-for.component';
import { ClubPipe } from './pipes/club.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbauchesComponent } from './embauches/embauches.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoComponent,
    RecapCompoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    TestNgstyleComponent,
    WordComponent,
    TestNgclassComponent,
    HighlightDirective,
    RainbowDirective,
    TestNgIFComponent,
    TestNgForComponent,
    ClubPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbauchesComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
