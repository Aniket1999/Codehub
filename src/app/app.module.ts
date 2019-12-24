import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { NavbarComponent } from './components/navbar/navbar.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule, MatOptionModule, MatSelectModule, MatButtonModule } from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { QuesOfDayComponent } from './components/ques-of-day/ques-of-day.component';
import { DailyQuesComponent } from './components/navbar/daily-ques/daily-ques.component';
import { AddQuesComponent } from './components/navbar/add-ques/add-ques.component';
import { DqService } from './shared/services/dq.service';
import { LibTableComponent } from './components/lib-table/lib-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AdminComponent } from './components/admin/admin.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { AdminQodComponent } from './components/admin/admin-qod/admin-qod.component';
import { AdminTableComponent } from './components/admin/admin-table/admin-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    QuesOfDayComponent,
    DailyQuesComponent,
    AddQuesComponent,
    LibTableComponent,
    AdminComponent,
    AdminNavComponent,
    AdminQodComponent,
    AdminTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [AuthService, DqService],
  bootstrap: [AppComponent]
})

export class AppModule { }