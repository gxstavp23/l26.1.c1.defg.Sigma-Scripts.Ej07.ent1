export default class Cl_mPersonal {
  private _nombre: string;
  private _tipo: string; // 'O' para obrero, 'A' para administrativo
  private _sueldo: number;

  constructor({ nombre, tipo, sueldo }: { nombre: string; tipo: string; sueldo: number }) {
    this._nombre = nombre;
    this._tipo = tipo;
    this._sueldo = sueldo;
  }

  set nombre(n: string) { this._nombre = n; }
  get nombre(): string { return this._nombre; }

  set tipo(t: string) { this._tipo = t.toUpperCase(); }
  get tipo(): string { return this._tipo; }

  set sueldo(s: number) { this._sueldo = +s; }
  get sueldo(): number { return this._sueldo; }

  aumento(): number {
    if (this.tipo === "O") {
      return this.sueldo * 0.20;
    } else if (this.tipo === "A") {
      return this.sueldo * 0.10;
    } else {
      return 0;
    }
  }
}