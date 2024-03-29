import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MembersListComponent,
      },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
      },
      { path: 'messages', component: HomeComponent },
      { path: 'lists', component: ListsComponent },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
