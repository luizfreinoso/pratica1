import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.page.html',
  styleUrls: ['./entrevista.page.scss'],
})
export class EntrevistaPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = [];

  constructor(private db: DbService, public formBuilder: FormBuilder, private toast: ToastController, private router: Router) {  }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchEntrevistas().subscribe(item => {
          this.Data = item
        })
      }
    });
  
    this.mainForm = this.formBuilder.group({
      localiza: [''],
      nome: [''],
      cpf: [''],
      telefone: [''],
      n_residentes: [1],
      endereco: [''],
      numero: [0],
      dap: [''],
      especie_v: [1],
      especies: [''], 
      especie1: [''], 
      especie2: [''], 
      especie3: [''], 
      especie4: [''], 
      especie5: [''], 
      sistema: [''], 
      interesse: [1], 
      area_cultivo: [0], 
      area_disp: [0], 
      solo:[''], 
      compostagem: [1], 
      compostagem_outro: [''], 
      agua: [''], 
      reservatorio_c: [''], 
      per_sis_irrigacao: [1], 
      ponto_agua_quintal: [1], 
      per_reserva: [1], 
      situacao: [''], 
      animais: [1], 
      especie_animal1:[''], 
      especie_animal2:[''], 
      especie_animal3:['']
    })
  }

  storeData() {
    this.db.addEntrevista(
      this.mainForm.value.localiza,
      this.mainForm.value.nome,
      this.mainForm.value.cpf,
      this.mainForm.value.telefone, 
      this.mainForm.value.n_residentes,
      this.mainForm.value.endereco, 
      this.mainForm.value.numero, 
      this.mainForm.value.dap, 
      this.mainForm.value.especie_v, 
      this.mainForm.value.especies, 
      this.mainForm.value.especie1, 
      this.mainForm.value.especie2, 
      this.mainForm.value.especie3, 
      this.mainForm.value.especie4, 
      this.mainForm.value.especie5, 
      this.mainForm.value.sistema, 
      this.mainForm.value.interesse, 
      this.mainForm.value.area_cultivo, 
      this.mainForm.value.area_disp, 
      this.mainForm.value.solo, 
      this.mainForm.value.compostagem, 
      this.mainForm.value.compostagem_outro, 
      this.mainForm.value.agua, 
      this.mainForm.value.reservatorio_c, 
      this.mainForm.value.per_sis_irrigacao, 
      this.mainForm.value.ponto_agua_quintal, 
      this.mainForm.value.per_reserva, 
      this.mainForm.value.situacao, 
      this.mainForm.value.animais, 
      this.mainForm.value.especie_animal1, 
      this.mainForm.value.especie_animal2, 
      this.mainForm.value.especie_animal3

    ).then(async(res) => {
      let toast = await this.toast.create({
        message: 'Entrevista Criada!',
        duration: 2500
      });
      toast.present();
      this.mainForm.reset();
    })
  }
}
