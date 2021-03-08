import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrevistaPage } from './entrevista.page';

const routes: Routes = [
  {
    path: '',
    component: EntrevistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrevistaPageRoutingModule {}
