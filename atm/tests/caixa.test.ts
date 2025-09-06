import { CaixaEletronico } from "../src/caixa";
import { SaqueInvalido } from "../src/SaqueInvalido";

describe("testando caixa eletronico", () => {
  it.each([0, -1, -10])("testando saque inválido", (valor) => {
    const caixa = new CaixaEletronico();

    expect(() => caixa.sacar(valor)).toThrow(SaqueInvalido);
  });

  it.each([
    [1, "1 moeda de 1"],
    [2, "1 moeda de 2"],
    [5, "1 nota de 5"],
    [10, "1 nota de 10"],
    [20, "1 nota de 20"],
    [50, "1 nota de 50"],
    [100, "1 nota de 100"],
    [200, "1 nota de 200"],
    [500, "1 nota de 500"],
    [434, "2 notas de 200\n1 nota de 20\n1 nota de 10\n2 moedas de 2"],
  ])("testando sacar", (valor, expected) => {
    const caixa = new CaixaEletronico();

    const actual = caixa.sacar(valor);
    console.log(actual)
    expect(actual).toBe(expected);
  });
});
