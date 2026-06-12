const EstrategiaFrete = require("./EstrategiaFrete");

class FreteCorreios extends EstrategiaFrete {
  calcular(peso) {
    return peso * 8;
  }
}

module.exports = FreteCorreios;
