export default class Cl_mPersonal {
    _nombre;
    _tipo; // 'O' para obrero, 'A' para administrativo
    _sueldo;
    constructor({ nombre, tipo, sueldo }) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._sueldo = sueldo;
    }
    set nombre(n) { this._nombre = n; }
    get nombre() { return this._nombre; }
    set tipo(t) { this._tipo = t.toUpperCase(); }
    get tipo() { return this._tipo; }
    set sueldo(s) { this._sueldo = +s; }
    get sueldo() { return this._sueldo; }
    aumento() {
        if (this.tipo === "O") {
            return this.sueldo * 0.20;
        }
        else if (this.tipo === "A") {
            return this.sueldo * 0.10;
        }
        else {
            return 0;
        }
    }
}
//# sourceMappingURL=Cl_mPersonal.js.map