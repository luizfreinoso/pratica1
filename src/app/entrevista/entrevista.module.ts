import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaPageRoutingModule } from './entrevista-routing.module';

import { EntrevistaPage } from './entrevista.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EntrevistaPageRoutingModule
  ],
  declarations: [EntrevistaPage]
})
export class EntrevistaPageModule {}
