let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataInscricao: new Date(2024, 2, 1, 19, 20),
      dataChekIn: new Date(2024, 2, 2, 22, 0)
    },
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataChekIn: new Date(2024, 2, 25, 22, 0)
    },
    {
      nome: "Ana Souza",
      email: "ana@gmail.com",
      dataInscricao: new Date(2024, 1, 15, 12, 30),
      dataChekIn: new Date(2024, 1, 20, 14, 0)
    },
    {
      nome: "João Silva",
      email: "joao@gmail.com",
      dataInscricao: new Date(2024, 1, 10, 9, 45),
      dataChekIn: new Date(2024, 1, 15, 10, 30)
    },
    {
      nome: "Carla Santos",
      email: "carla@gmail.com",
      dataInscricao: new Date(2024, 1, 5, 15, 0),
      dataChekIn: new Date(2024, 1, 8, 18, 0)
    },
    {
      nome: "Pedro Oliveira",
      email: "pedro@gmail.com",
      dataInscricao: new Date(2024, 2, 10, 10, 30),
      dataChekIn: new Date(2024, 2, 15, 11, 45)
    },
    {
      nome: "Maria Costa",
      email: "maria@gmail.com",
      dataInscricao: new Date(2024, 2, 5, 14, 15),
      dataChekIn: new Date(2024, 2, 10, 16, 30)
    },
    {
      nome: "Lucas Pereira",
      email: "lucas@gmail.com",
      dataInscricao: new Date(2024, 1, 20, 18, 0),
      dataChekIn: new Date(2024, 1, 25, 20, 0)
    },
    {
      nome: "Camila Lima",
      email: "camila@gmail.com",
      dataInscricao: new Date(2024, 1, 25, 9, 0),
      dataChekIn: new Date(2024, 2, 1, 11, 30)
    },
    {
      nome: "Rafael Santos",
      email: "rafael@gmail.com",
      dataInscricao: new Date(2024, 2, 15, 20, 0),
      dataChekIn: new Date(2024, 2, 20, 22, 30)
    }
  ];
  
  const criarNovoParticipante = (participante) =>{
    const dataInscricao = dayjs(Date.now())
    .to(participante.dataInscricao)
    let dataChekIn = dayjs(Date.now())
    .to(participante.dataChekIn)
  
    //condicional
    if(participante.dataChekIn == null) {
      dataChekIn = `
        <buton
        data-email="${participante.email}"
        onclik = "fazerChekIn(event)"
        >      
        Confirmar chek-in
        </buton>
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
        <td> ${participante.dataInscricao}</td>
        <td> ${participante.dataChekIn}</td>
      </tr>
    `
  }
  
  const atualizarLista = (participantes) =>{
    // estrutura de repetição
    let output =""
    for(let participante of participantes){
     output = output + criarNovoParticipante(participante) 
    }
    document
    .queryselector('tbody')
    .innerHTML = output("alo")
  }
  
  atualizarLista(participantes)
  
  const adicionarParticpante = (event) => {
    event.preventDefault()
  
    const dadosDoFormulario = new FormData(event.target)
  
    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataChekIn: null
    }
  
    //verificr se participante ja existe
    const participanteExiste = participante.find(
      (p)=> p.email = participante.email
    )
  
    participantes = [participante,...participantes]
    atualizarLista(participantes)
  
    // limpar formulario
    event.target.queryselector('[name="nome"]').value=""
    event.target.queryselector('[name="email"]').value=""
  }
  
  //alert(dadosDoFormulario.get('email')
  
  const fazerChekIn = (event) =>{
    // confirmar se realmente quer chek-in
    const mensagemConfirmacao = 'Tem certeza que quer fazer o chek-in?'
    if(confirm(mensagemConfirmacao) == false){
      return
    }
  
    // encontrar o participante dentro da lista
    const participante = participante.find((p)=> p.email == event.target.dataset.email
    )
    // atualizar o chek-in do participante
    participante.dataChekIn = new Date()
    // atualizar a Lista de participante
    atualizarlista(participantes)
  }