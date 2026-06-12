class Comando {
  executar() {
    throw new Error("O metodo executar() precisa ser implementado.");
  }

  desfazer() {
    throw new Error("O metodo desfazer() precisa ser implementado.");
  }
}

module.exports = Comando;
