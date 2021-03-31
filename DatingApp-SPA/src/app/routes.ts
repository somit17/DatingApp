import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MembersListComponent } from './members-list/members-list.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MembersListComponent },
  { path: 'messages', component: HomeComponent },
  { path: 'lists', component: ListsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
