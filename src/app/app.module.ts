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
    HighlightDirective
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
