import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth-service/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './interceptor/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// ? Start Add Services
import { AlertifyService } from './services/alertify/alertify.service';
import { UserService } from './services/user-service/user.service';
// ?End
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './lists/lists.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MembersListComponent,
    MemberCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
