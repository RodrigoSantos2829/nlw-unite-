
let participantes = [
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 1, 5, 19, 23),
    dataCheckIn: new Date(2024, 1, 5, 20, 20)
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 15, 30),
    dataCheckIn: new Date(2024, 3, 11, 10, 45)
  },
  {
    nome: "Carlos Silva",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 4, 2, 12, 0),
    dataCheckIn: null
  },
  {
    nome: "Lúcia Santos",
    email: "lucia@gmail.com",
    dataInscricao: new Date(2024, 5, 15, 8, 45),
    dataCheckIn: new Date(2024, 5, 16, 11, 30)
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 6, 20, 17, 10),
    dataCheckIn: new Date(2024, 6, 21, 14, 20)
  },
  {
    nome: "Mariana Costa",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 7, 8, 10, 0),
    dataCheckIn: new Date(2024, 7, 9, 8, 30)
  },
  {
    nome: "Rafael Almeida",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 8, 19, 18, 55),
    dataCheckIn: new Date(2024, 8, 20, 20, 10)
  },
  {
    nome: "Juliana Santos",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 9, 25, 14, 20),
    dataCheckIn: new Date(2024, 9, 26, 9, 45)
  },
  {
    nome: "Luiz Pereira",
    email: "luiz@gmail.com",
    dataInscricao: new Date(2024, 10, 30, 16, 40),
    dataCheckIn: new Date(2024, 10, 31, 12, 15)
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)
  
  //condicional
  if(participante.dataCheckIn==null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
         ${participante.email}
      </small>
      </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) =>{
  let output = ""
  //estrutura de repeticao - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }

   //substituir informação do HTML
    document.querySelector('tbody')
    .innerHTML = output 
}

atualizarLista(participantes)

const adicionarParticipante = (event) =>{
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email ja cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value =""
  event.target.querySelector('[name="email"]').value =""
}

const fazerCheckIn = (event) =>{
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

    if(confirm(mensagemConfirmacao) == false){
      return
    }  


    // encontrar participante dentro da lista
 const participante = participantes.find((p)=>{
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  //atualizar a lista de participantes
  atualizarLista(participantes)
}