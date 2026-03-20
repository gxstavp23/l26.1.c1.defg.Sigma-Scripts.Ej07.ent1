import Cl_mPersonal from "./Cl_mPersonal.js";

export default class Cl_mEmpresa {
  private acMontoAdicional: number;
  private cnPersonal: number; 

  constructor() {
    this.acMontoAdicional = 0;
    this.cnPersonal = 0;
  }

  procesarPersonal(p: Cl_mPersonal): void {
    this.cnPersonal++;
    this.acMontoAdicional += p.aumento();
  }

  totalMontoAdicional(): number { return this.acMontoAdicional; }
  cantidadPersonal(): number { return this.cnPersonal; } 
}