import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';

const routes: Routes = [
  {path:'git', component: GithubRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
