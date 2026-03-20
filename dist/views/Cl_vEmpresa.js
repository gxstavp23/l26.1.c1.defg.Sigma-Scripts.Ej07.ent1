export default class Cl_vEmpresa {
    lblMontoTotal;
    lblDetalle;
    lblCantidadPersonal;
    btNuevoPersonal;
    constructor() {
        this.btNuevoPersonal = document.getElementById("main_btNuevoPersonal");
        this.lblMontoTotal = document.getElementById("main_lblMontoTotal");
        this.lblDetalle = document.getElementById("main_lblDetalle");
        this.lblCantidadPersonal = document.getElementById("main_lblCantidadPersonal");
    }
    reportar({ aumentoIndividual, nombre, totalEmpresa, cantidad }) {
        this.lblDetalle.innerHTML += `${nombre} tiene un aumento de $${aumentoIndividual}<br>`;
        this.lblMontoTotal.innerHTML = `${totalEmpresa}`;
        this.lblCantidadPersonal.innerHTML = `${cantidad}`;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map