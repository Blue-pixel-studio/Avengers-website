import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { ContactComponent } from './contact/contact.component';

import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports:[MatButtonModule, MatIconModule, MatSidenavModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'  },
    { provide: LocationStrategy, useClass: HashLocationStrategy },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
