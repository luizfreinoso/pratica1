import { Injectable } from '@angular/core';

export interface Entrevista{
  id: number;
  localiza: string;
  nome: string;
  cpf: number;
  telefone: number;
  n_residentes: number;
  endereco: number;
  numero: number;
  dap: string;
  especie_v: boolean;
  especies: [];
  especie1: string;
  especie2: string;
  especie3: string;
  especie4: string;
  especie5: string;
  sistema: string;
  interesse: boolean;
  area_cultivo: number;
  area_disp: number;
  solo: string;
  compostagem: boolean;
  compostagem_outro: string;
  agua: string;
  reservatorio_c: string;
  per_sis_irrigacao: boolean;
  ponto_agua_quintal: boolean;
  per_reserva: boolean;
  situacao: string;
  animais: boolean;
  especie_animal1: string;
  especie_animal2: string;
  especie_animal3: string;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
}
