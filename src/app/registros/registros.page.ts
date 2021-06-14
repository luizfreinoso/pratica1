import { Component, OnInit } from '@angular/core';
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  Data: any[] = [];

  constructor(private db: DbService, private toast: ToastController, private router: Router) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchEntrevistas().subscribe(item => {
          this.Data = item
        })
      }
    });
  }

  deleteEntrevista(id){
    this.db.deleteEntrevista(id).then(async(res) => {
      let toast = await this.toast.create({
        message: 'Entrevista deletada!',
        duration: 2500
      });
      toast.present();      
    })
  }
}
