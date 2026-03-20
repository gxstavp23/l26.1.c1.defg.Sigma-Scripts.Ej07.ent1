export default class Cl_mEmpresa {
    acMontoAdicional;
    cnPersonal;
    constructor() {
        this.acMontoAdicional = 0;
        this.cnPersonal = 0;
    }
    procesarPersonal(p) {
        this.cnPersonal++;
        this.acMontoAdicional += p.aumento();
    }
    totalMontoAdicional() { return this.acMontoAdicional; }
    cantidadPersonal() { return this.cnPersonal; }
}
//# sourceMappingURL=Cl_mEmpresa.js.map