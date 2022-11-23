import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
