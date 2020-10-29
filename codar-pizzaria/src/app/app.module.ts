import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { PopularComponent } from './popular/popular.component';
import { DetailsComponent } from './details/details.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { RelatedComponent } from './related/related.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    CarteComponent,
    PopularComponent,
    DetailsComponent,
    FoodMenuComponent,
    RelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
