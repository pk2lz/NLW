// let = meta = {
//   value: "Ler um livro por Mês",
//   checked: true,
// };

// let = metas = [
//   meta,
//     {
//     value: "Caminhar 20 minutos",
//     checked: false,
//   },
// ];

// console.log(metas[1].value)

const { select } = require("@inquirer/prompts");

const start = async () => {
  while (true) {
    const opcao = await select({
      message: "Menu > ",
      choices: [
        {
          name: "Cadastrar Meta",
          valeu: "cadastrar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (opcao) {
      case "cadastrar":
        console.log("Vamos cadastrar")
        break

      case "listar":
        console.log("Vamos listar")
        break

      case "sair":
        console.log("Até a proxima!")
        return
    }
  }
};

start();
