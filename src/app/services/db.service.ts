import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Entrevista } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
  entrevistas = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( 
    private platform: Platform, private sqlite: SQLite, 
    private httpClient: HttpClient, private sqlPorter: SQLitePorter) { 
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'quintais.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
            this.storage = db;
            this.getFakeData();
        });
      });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchEntrevistas(): Observable<Entrevista[]> {
    return this.entrevistas.asObservable();
  }

  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql', 
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getEntrevistas();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // lista
  getEntrevistas(){
    return this.storage.executeSql('SELECT * FROM entrevistas', []).then(res => {
      let items: Entrevista[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id, 
            localiza: res.rows.item(i).localiza,
            nome: res.rows.item(i).nome,
            cpf: res.rows.item(i).cpf,
            telefone: res.rows.item(i).telefone,
            n_residentes: res.rows.item(i).n_residentes,
            endereco: res.rows.item(i).endereco,
            numero: res.rows.item(i).numero,
            dap: res.rows.item(i).dap,
            especie_v: res.rows.item(i).especie_v,
            especies: res.rows.item(i).especies,
            especie1: res.rows.item(i).especie1,
            especie2: res.rows.item(i).especie2,
            especie3: res.rows.item(i).especie3,
            especie4: res.rows.item(i).especie4,
            especie5: res.rows.item(i).especie5,
            sistema: res.rows.item(i).sistema,
            interesse: res.rows.item(i).interesse,
            area_cultivo: res.rows.item(i).area_cultivo,
            area_disp: res.rows.item(i).area_disp,
            solo: res.rows.item(i).solo,
            compostagem:res.rows.item(i).compostagem,
            compostagem_outro: res.rows.item(i).compostagem_outro,
            agua: res.rows.item(i).agua,
            reservatorio_c: res.rows.item(i).reservatorio_c,
            per_sis_irrigacao: res.rows.item(i).per_sis_irrigacao,
            ponto_agua_quintal: res.rows.item(i).ponto_agua_quintal,
            per_reserva:res.rows.item(i).per_reserva,
            situacao: res.rows.item(i).situacao,
            animais: res.rows.item(i).animais,
            especie_animal1: res.rows.item(i).especie_animal1,
            especie_animal2: res.rows.item(i).especie_animal2,
            especie_animal3: res.rows.item(i).especie_animal3
           });
        }
      }
      this.entrevistas.next(items);
    });
  }

  // Add
  addEntrevista(localiza, nome, cpf, telefone, n_residentes, endereco, numero, dap, especie_v, especies, especie1, especie2, especie3, especie4, especie5, sistema, interesse, area_cultivo, area_disp, solo, compostagem, compostagem_outro, agua, reservatorio_c, per_sis_irrigacao, ponto_agua_quintal, per_reserva, situacao, animais, especie_animal1, especie_animal2, especie_animal3) {
    let data = [localiza, nome, cpf, telefone, n_residentes, endereco, numero, dap, especie_v, especies, especie1, especie2, especie3, especie4, especie5, sistema, interesse, area_cultivo, area_disp, solo, compostagem, compostagem_outro, agua, reservatorio_c, per_sis_irrigacao, ponto_agua_quintal, per_reserva, situacao, animais, especie_animal1, especie_animal2, especie_animal3];
    return this.storage.executeSql('INSERT INTO entrevistas (localiza, nome, cpf, telefone, n_residentes, endereco, numero, dap, especie_v, especies, especie1, especie2, especie3, especie4, especie5, sistema, interesse, area_cultivo, area_disp, solo, compostagem, compostagem_outro, agua, reservatorio_c, per_sis_irrigacao, ponto_agua_quintal, per_reserva, situacao, animais, especie_animal1, especie_animal2, especie_animal3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data)
    .then(res => {
      this.getEntrevistas();
    });
  }

  // Get single object
  getEntrevista(id): Promise<Entrevista> {
    return this.storage.executeSql('SELECT * FROM entrevistas WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id, 
        localiza: res.rows.item(0).localiza,
        nome: res.rows.item(0).nome,
        cpf: res.rows.item(0).cpf,
        telefone: res.rows.item(0).telefone,
        n_residentes: res.rows.item(0).n_residentes,
        endereco: res.rows.item(0).endereco,
        numero: res.rows.item(0).numero,
        dap: res.rows.item(0).dap,
        especie_v: res.rows.item(0).especie_v,
        especies: res.rows.item(0).especies,
        especie1: res.rows.item(0).especie1,
        especie2: res.rows.item(0).especie2,
        especie3: res.rows.item(0).especie3,
        especie4: res.rows.item(0).especie4,
        especie5: res.rows.item(0).especie5,
        sistema: res.rows.item(0).sistema,
        interesse: res.rows.item(0).interesse,
        area_cultivo: res.rows.item(0).area_cultivo,
        area_disp: res.rows.item(0).area_disp,
        solo: res.rows.item(0).solo,
        compostagem:res.rows.item(0).compostagem,
        compostagem_outro: res.rows.item(0).compostagem_outro,
        agua: res.rows.item(0).agua,
        reservatorio_c: res.rows.item(0).reservatorio_c,
        per_sis_irrigacao: res.rows.item(0).per_sis_irrigacao,
        ponto_agua_quintal: res.rows.item(0).ponto_agua_quintal,
        per_reserva:res.rows.item(0).per_reserva,
        situacao: res.rows.item(0).situacao,
        animais: res.rows.item(0).animais,
        especie_animal1: res.rows.item(0).especie_animal1,
        especie_animal2: res.rows.item(0).especie_animal2,
        especie_animal3: res.rows.item(0).especie_animal3
      }
    });
  }

  // Update
  updateEntrevista(id, entrevista: Entrevista) {
    let data = [entrevista.localiza, entrevista.nome, entrevista.cpf, entrevista.telefone, entrevista.n_residentes, entrevista.endereco, entrevista.numero, entrevista.dap, entrevista.especie_v, entrevista.especies, entrevista.especie1, entrevista.especie2, entrevista.especie3, entrevista.especie4, entrevista.especie5, entrevista.sistema, entrevista.interesse, entrevista.area_cultivo, entrevista.area_disp, entrevista.solo, entrevista.compostagem, entrevista.compostagem_outro, entrevista.agua, entrevista.reservatorio_c, entrevista.per_sis_irrigacao, entrevista.ponto_agua_quintal, entrevista.per_reserva, entrevista.situacao, entrevista.animais, entrevista.especie_animal1, entrevista.especie_animal2, entrevista.especie_animal3];
    return this.storage.executeSql(`UPDATE entrevistas SET localiza = ?, nome = ?, cpf = ?, telefone = ?, n_residentes = ?, endereco = ?, dap = ?, especie_v = ?, especies = ?, especie1 = ?, especie2 = ?, especie3 = ?, especie4 = ?, especie5 = ?, sistema = ?, interesse = ?, area_cultivo = ?, area_disp = ?, solo = ?, compostagem = ?, compostagem_outro = ?, agua = ?, reservatorio_c = ?, per_sis_irrigacao = ?, ponto_agua_quintal = ?, per_reserva = ?, situacao = ?, animais = ?, especie_animal1 = ?, especie_animal2 = ?, especie_animal3 = ?,  WHERE id = ${id}`, data)
    .then(data => {
      this.getEntrevistas();
    })
  }

  // Delete
  deleteEntrevista(id) {
    return this.storage.executeSql('DELETE FROM entrevistas WHERE id = ?', [id])
    .then(_ => {
      this.getEntrevistas();
    });
  }

}
