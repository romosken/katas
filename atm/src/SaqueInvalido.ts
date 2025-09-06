export class SaqueInvalido extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "SaqueInvalido";
  }
}
