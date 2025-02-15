import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EtudiantsService } from './services/etudiants.service';
import { DataTableEtudiantComponent } from './data-table-etudiant/data-table-etudiant.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SingleEtudiantComponent } from './data-table-etudiant/single-etudiant/single-etudiant.component';
import { EtudiantFormComponent } from './data-table-etudiant/etudiant-form/etudiant-form.component';
import { ModifyEtudiantComponent } from './data-table-etudiant/modify-etudiant/modify-etudiant.component';

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'etudiants', component: DataTableEtudiantComponent},
  {path: 'etudiants/new', component: EtudiantFormComponent},
  { path: 'etudiants/modify/:id', component: ModifyEtudiantComponent },
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  { path: '**', redirectTo: 'auth/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainNavComponent,
    EtudiantFormComponent,
    DataTableEtudiantComponent,
    SingleEtudiantComponent,
    ModifyEtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    EtudiantsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
