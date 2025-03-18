window.onload = function () {
  let objetoJogo = {
    tamanhoTabuleiro: 3,
    tabuleiroInterno: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    simboloCorrent: "X",
    jogoTerminado: false,
    fazerJogada: function (etiquetaClicada) {
      let arrayCoordenads = etiquetaClicada.id.split("-");
      let linha = arrayCoordenads[0] - 1;
      let coluna = arrayCoordenads[1] - 1;

      if (
        this.tabuleiroInterno[linha][coluna] === "" &&
        this.jogoTerminado === false
      ) {
        this.tabuleiroInterno[linha][coluna] = this.simboloCorrent;
        etiquetaClicada.innerHTML = this.simboloCorrent;
      }

      if (this.jogoTerminado === false) {
        this.jogoTerminado = this.verificarVitoria() || this.verificarEmpate();
      }
      if (this.jogoTerminado === true) {
        this.mostrarBotaoRecomecar();
      }
      this.mudarSimbolo();
    },
    mudarSimbolo: function () {
      this.simboloCorrent = this.simboloCorrent === "X" ? "O" : "X";
    },
    verificarVitoria: function () {
      let iguais = 0;
      for (let linhas = 0; linhas < this.tabuleiroInterno.length; linhas++) {
        iguais = 0;
        for (
          let colunas = 0;
          colunas < this.tabuleiroInterno.length;
          colunas++
        ) {
          if (this.tabuleiroInterno[linhas][colunas] === this.simboloCorrent) {
            iguais++;
          }
        }
        if (this.tabuleiroInterno.length === iguais) {
          alert("Win");
          return true;
        }
      }

      for (let colunas = 0; colunas < this.tabuleiroInterno.length; colunas++) {
        iguais = 0;
        for (let linhas = 0; linhas < this.tabuleiroInterno.length; linhas++) {
          if (this.tabuleiroInterno[linhas][colunas] === this.simboloCorrent) {
            iguais++;
          }
        }
        if (this.tabuleiroInterno.length === iguais) {
          alert("Win");
          return true;
        }
      }
      iguais = 0;
      for (let cell = 0; cell < this.tabuleiroInterno.length; cell++) {
        if (this.tabuleiroInterno[cell][cell] === this.simboloCorrent) {
          iguais++;
        }
        if (this.tabuleiroInterno.length === iguais) {
          alert("Win");
          return true;
        }
      }
      iguais = 0;
      for (
        let cell = 0, coluna = this.tabuleiroInterno.length - 1;
        cell < this.tabuleiroInterno.length;
        cell++, coluna--
      ) {
        if (this.tabuleiroInterno[cell][coluna] === this.simboloCorrent) {
          iguais++;
        }
        if (this.tabuleiroInterno.length === iguais) {
          alert("Win");
          return true;
        }
      }

      return false;
    },

    verificarEmpate: function () {
      let cells = 0;
      for (let linha = 0; linha < this.tabuleiroInterno.length; linha++) {
        for (let coluna = 0; coluna < this.tabuleiroInterno.length; coluna++) {
          if (this.tabuleiroInterno[linha][coluna] !== "") {
            cells++;
          }

          if (cells == 9) {
            alert("empate");
            return true;
          }
        }
      }

      return false;
    },
    mostrarBotaoRecomecar: function () {
      let recomecar = document.getElementById("recomecar");
      recomecar.style.display = "block";
    },
  };

  let quadriculas = document.getElementsByClassName("quadricula");

  for (const quadricula of quadriculas) {
    quadricula.addEventListener("click", function () {
      objetoJogo.fazerJogada(this);
    });
  }
  document.getElementById("recomecar").addEventListener("click", function () {
    objetoJogo.jogoTerminado = false;
    objetoJogo.simboloCorrent = "X";
    objetoJogo.tabuleiroInterno = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    for (const element of document.getElementsByClassName("quadricula")) {
      element.innerHTML = "";
    }
    document.getElementById("recomecar").style = "none";
  });
};
