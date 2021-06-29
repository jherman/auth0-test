import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      audience: `https://domain/api/v2/`,
      domain: 'domain',
      clientId: 'clientId',
      redirectUri: 'redirectUri',
      httpInterceptor: {
        allowedList: [{ uriMatcher: (uri) => uri.indexOf(`${'url'}`) === 0 }]
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
