import { SaqueInvalido } from "./SaqueInvalido";

export class CaixaEletronico {
  valoresDisponiveis: Array<string[]>;

  constructor() {
    this.valoresDisponiveis = [
      ["500", "nota"],
      ["200", "nota"],
      ["100", "nota"],
      ["50", "nota"],
      ["20", "nota"],
      ["10", "nota"],
      ["5", "nota"],
      ["2", "moeda"],
      ["1", "moeda"],
    ];
  }

  sacar(valor: number): string {
    let valorRestante = valor;
    let retorno = "";

    if (valor <= 0) throw new SaqueInvalido("Valor de saque inválido!");

    for (const cedulas of this.valoresDisponiveis) {
      const valorNotaMoeda = +cedulas[0];

      if (valorRestante % valorNotaMoeda === valorRestante) continue;

      if (valorRestante != valor && valorRestante != 0) retorno += "\n";

      const qtdDinhero = Math.trunc(valorRestante / valorNotaMoeda);
      valorRestante = valorRestante % valorNotaMoeda;

      retorno +=
        qtdDinhero > 1
          ? `${qtdDinhero} ${cedulas[1]}s de ${valorNotaMoeda}`
          : `${qtdDinhero} ${cedulas[1]} de ${valorNotaMoeda}`;
    }
    return retorno;
  }
}
