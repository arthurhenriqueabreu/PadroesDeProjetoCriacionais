const EstrategiaFrete = require("./EstrategiaFrete");

class FreteJadlog extends EstrategiaFrete {
  calcular(peso) {
    return peso * 6 + 10;
  }
}

module.exports = FreteJadlog;
