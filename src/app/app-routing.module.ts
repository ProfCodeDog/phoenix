import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'pages',
  pathMatch: 'full'
}, {
  path: 'pages',
  loadChildren: './pages/pages.module#PagesModule'
}, {
  path: 'auth',
  loadChildren: './auth/auth.module#AuthModule'
}, {
  path: '**',
  component: NotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
