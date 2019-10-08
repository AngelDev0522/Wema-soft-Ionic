import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'requests', loadChildren: './requests/requests.module#RequestsPageModule' },//./login/login.module#LoginPageModule
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'item', loadChildren: './item/item.module#ItemPageModule' },
  { path: 'receive', loadChildren: './receive/receive.module#ReceivePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
