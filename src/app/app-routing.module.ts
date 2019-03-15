import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AwayComponent} from './away/away.component';

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'away', loadChildren: './lazy/lazy.module#LazyModule'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
