import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptorInterceptor } from './Interceptor/jwt-interceptor.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveformStructureComponent } from './components/structure/reactiveform-structure/reactiveform-structure.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ReactiveformStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
