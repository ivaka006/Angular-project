import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AboutComponent } from './static/about/about.component';
import { ContactsComponent } from './static/contacts/contacts.component';
import { CreateComponent } from './game/create/create.component';
import { CatalogComponent } from './game/create/catalog/catalog.component';
import { DetailsComponent } from './game/create/details/details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //Temporary
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'create', component: CreateComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'details', component: DetailsComponent },

    { path: '404', component: ErrorComponent},
    { path: '**', redirectTo: '/404' },
    
];
