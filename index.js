const { select, input, checkbox } = require("@inquirer/prompts");

let meta = {
  value: "Tomar 3L de água por dia",
  checked: false,
};

let metas = [meta];

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:" });
  if (meta.length == 0) {
    console.log("A meta não pode ser vazia");
    return;
  }

  metas.push({ value: meta, checked: false });
};

const metasRealizadas = async () => {
  if (metas.length == 0) {
      mensagem = "Não existem metas!"
      return
  }

  const realizadas = metas.filter((meta) => {
      return meta.checked
  })

  if (realizadas.length == 0) {
      mensagem = 'Não existem metas realizadas! :('
      return
  }

  await select({
      message: "Metas Realizadas: " + realizadas.length,
      choices: [...realizadas]
  })
}

const metasAbertas = async () => {
  if (metas.length == 0) {
      mensagem = "Não existem metas!"
      return
  }

  const abertas = metas.filter((meta) => {
      return meta.checked != true
  })

  if (abertas.length == 0) {
      mensagem = 'Não existem metas abertas! :)'
      return
  }

  await select({
      message: "Metas Abertas: " + abertas.length,
      choices: [...abertas]
  })
}

const listarMetas = async () => {
  const respostas = await checkbox({
    message:
      "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
    choices: [...metas],
    instructions: false,
  });

  metas.forEach((m) => {
    m.checked = false;
  });

  if (respostas.lenght == 0) {
    console.log("Nenhuma meta selecionada.");
    return;
  }

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta;
    });

    meta.checked = true;
  });

  console.log("Meta(s) marcadas como concluida(s)");
};

//array
const start = async () => {
  while (true) {
    const opcao = await select({
      message: "Menu > ",
      choices: [
        {
          name: "Vamos cadastrar",
          value: "cadastrar",
        },
        {
          name: "Listar metas",
          value: "listar",
        },
        {
          name: "Metas realizadas",
          value: "realizadas",
        },

        {
          name: "Metas abertas",
          value: "abertas",
        },

        {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (opcao) {
      case "cadastrar":
        await cadastrarMeta();
        console.log(metas);
        break;

      case "cadastrar":
        console.log("Vamos cadastrar");
        break;

      case "listar":
        await listarMetas();
        break;

      case "realizadas":
        await metasRealizadas();
        break;

      case "abertas":
        await metasAbertas();
        break;

      case "sair":
        console.log("Até a proxima!");
        return;
    }
  }
};

start();
