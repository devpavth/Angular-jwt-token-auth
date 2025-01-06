import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptorInterceptor } from './Interceptor/jwt-interceptor.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // exports: [
  //   FormsModule
  // ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([jwtInterceptorInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
