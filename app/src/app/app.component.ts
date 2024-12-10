import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './static/about/about.component';
import { ContactsComponent } from './static/contacts/contacts.component';
import { CreateComponent } from './game/create/create.component';
import { CatalogComponent } from './game/create/catalog/catalog.component';
import { DetailsComponent } from './game/create/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, LoginComponent, RegisterComponent, ErrorComponent, AboutComponent, ContactsComponent, CreateComponent, CatalogComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
