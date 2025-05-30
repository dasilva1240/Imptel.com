const professores = [
  { 
    nome: "Maria Silva", 
    foto: null, 
    formacao: "Matemática - UFRJ", 
    disciplina: "Matemática", 
    coordenadorTurma: true, 
    turma: "8A Manhã",
    email: "maria.silva@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Álgebra", "Geometria"]
  },
  { 
    nome: "João Oliveira", 
    foto: null, 
    formacao: "Física - UFF", 
    disciplina: "Física", 
    coordenadorTurma: false,
    email: "joao.oliveira@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Mecânica", "Termodinâmica"]
  },
  { 
    nome: "Luiza Souza", 
    foto: null, 
    formacao: "Química - UERJ", 
    disciplina: "Química", 
    coordenadorTurma: true, 
    turma: "9B Tarde",
    email: "luiza.souza@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Química Orgânica", "Química Inorgânica"]
  },
  { 
    nome: "Pedro Martins", 
    foto: null, 
    formacao: "Biologia - UNICAMP", 
    disciplina: "Biologia", 
    coordenadorTurma: false,
    email: "pedro.martins@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Biologia Celular", "Genética"]
  },
  { 
    nome: "Ana Costa", 
    foto: null, 
    formacao: "Geografia - USP", 
    disciplina: "Geografia", 
    coordenadorTurma: true, 
    turma: "7C Manhã",
    email: "ana.costa@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Geografia Física", "Geografia Humana"]
  },
  { 
    nome: "Carlos Santos", 
    foto: null, 
    formacao: "História - UFRGS", 
    disciplina: "História", 
    coordenadorTurma: false,
    email: "carlos.santos@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["História do Brasil", "História Mundial"]
  },
  { 
    nome: "Beatriz Lima", 
    foto: null, 
    formacao: "Português - UFBA", 
    disciplina: "Português", 
    coordenadorTurma: false,
    email: "beatriz.lima@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Língua Portuguesa", "Literatura Brasileira"]
  },
  { 
    nome: "Professor 8", 
    foto: null, 
    formacao: "Formação 8", 
    disciplina: "Disciplina 8", 
    coordenadorTurma: false,
    email: "professor8@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 8"]
  },
  { 
    nome: "Professor 9", 
    foto: null, 
    formacao: "Formação 9", 
    disciplina: "Disciplina 9", 
    coordenadorTurma: true, 
    turma: "Turma 9",
    email: "professor9@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 9"]
  },
  { 
    nome: "Professor 10", 
    foto: null, 
    formacao: "Formação 10", 
    disciplina: "Disciplina 10", 
    coordenadorTurma: false,
    email: "professor10@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 10"]
  },
  { 
    nome: "Professor 11", 
    foto: null, 
    formacao: "Formação 11", 
    disciplina: "Disciplina 11", 
    coordenadorTurma: true, 
    turma: "Turma 11",
    email: "professor11@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 11"]
  },
  { 
    nome: "Professor 12", 
    foto: null, 
    formacao: "Formação 12", 
    disciplina: "Disciplina 12", 
    coordenadorTurma: false,
    email: "professor12@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 12"]
  },
  { 
    nome: "Professor 13", 
    foto: null, 
    formacao: "Formação 13", 
    disciplina: "Disciplina 13", 
    coordenadorTurma: true, 
    turma: "Turma 13",
    email: "professor13@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 13"]
  },
  { 
    nome: "Professor 14", 
    foto: null, 
    formacao: "Formação 14", 
    disciplina: "Disciplina 14", 
    coordenadorTurma: false,
    email: "professor14@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 14"]
  },
  { 
    nome: "Professor 15", 
    foto: null, 
    formacao: "Formação 15", 
    disciplina: "Disciplina 15", 
    coordenadorTurma: true, 
    turma: "Turma 15",
    email: "professor15@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 15"]
  },
  { 
    nome: "Professor 16", 
    foto: null, 
    formacao: "Formação 16", 
    disciplina: "Disciplina 16", 
    coordenadorTurma: false,
    email: "professor16@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 16"]
  },
  { 
    nome: "Professor 17", 
    foto: null, 
    formacao: "Formação 17", 
    disciplina: "Disciplina 17", 
    coordenadorTurma: true, 
    turma: "Turma 17",
    email: "professor17@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 17"]
  },
  { 
    nome: "Professor 18", 
    foto: null, 
    formacao: "Formação 18", 
    disciplina: "Disciplina 18", 
    coordenadorTurma: false,
    email: "professor18@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 18"]
  },
  { 
    nome: "Professor 19", 
    foto: null, 
    formacao: "Formação 19", 
    disciplina: "Disciplina 19", 
    coordenadorTurma: true, 
    turma: "Turma 19",
    email: "professor19@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 19"]
  },
  { 
    nome: "Professor 20", 
    foto: null, 
    formacao: "Formação 20", 
    disciplina: "Disciplina 20", 
    coordenadorTurma: false,
    email: "professor20@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 20"]
  },
  { 
    nome: "Professor 21", 
    foto: null, 
    formacao: "Formação 21", 
    disciplina: "Disciplina 21", 
    coordenadorTurma: true, 
    turma: "Turma 21",
    email: "professor21@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 21"]
  },
  { 
    nome: "Professor 22", 
    foto: null, 
    formacao: "Formação 22", 
    disciplina: "Disciplina 22", 
    coordenadorTurma: false,
    email: "professor22@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 22"]
  },
  { 
    nome: "Professor 23", 
    foto: null, 
    formacao: "Formação 23", 
    disciplina: "Disciplina 23", 
    coordenadorTurma: true, 
    turma: "Turma 23",
    email: "professor23@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 23"]
  },
  { 
    nome: "Professor 24", 
    foto: null, 
    formacao: "Formação 24", 
    disciplina: "Disciplina 24", 
    coordenadorTurma: false,
    email: "professor24@escola.com",
    telefone: "(21) 97654-3210",
    dataAdmissao: "20/08/2015",
    especialidades: ["Especialidade 24"]
  },
  { 
    nome: "Professor 25", 
    foto: null, 
    formacao: "Formação 25", 
    disciplina: "Disciplina 25", 
    coordenadorTurma: true, 
    turma: "Turma 25",
    email: "professor25@escola.com",
    telefone: "(21) 98765-4321",
    dataAdmissao: "15/03/2010",
    especialidades: ["Especialidade 25"]
  }
];

function renderProfessores() {
  const container = document.getElementById('professoresContainer');
  professores.forEach((prof, index) => {
    const card = document.createElement('div');
    card.className = 'professor-card';
    card.innerHTML = `
      <input type="file" id="fotoProfessor${index}" accept="image/*" style="display:none;">
      <img id="fotoPreview${index}" src="${prof.foto || 'sem conteudo.jvg'}" alt="${prof.nome}" onclick="mostrarDetalhesProfessor(${index})">
      <h3>${prof.nome}</h3>
      <p>${prof.disciplina}</p>
      ${prof.coordenadorTurma ? `<span class="coordenador-badge">Coordenador</span>` : ''}
      
    `;
    container.appendChild(card);
  });
}

function mostrarDetalhesProfessor(index) {
  const prof = professores[index];
  const modalContent = document.getElementById('professorModalContent');
  modalContent.innerHTML = `
    <div class="professor-modal-header">
      <img src="${prof.foto || 'default-avatar.svg'}" alt="${prof.nome}">
      <h2>${prof.nome}</h2>
    </div>
    <div class="professor-modal-body">
      <p><strong>Disciplina:</strong> ${prof.disciplina}</p>
      <p><strong>Formação:</strong> ${prof.formacao}</p>
      <p><strong>Email:</strong> ${prof.email}</p>
      <p><strong>Telefone:</strong> ${prof.telefone}</p>
      <p><strong>Data de Admissão:</strong> ${prof.dataAdmissao}</p>
      <p><strong>Especialidades:</strong> ${prof.especialidades.join(", ")}</p>
      ${prof.coordenadorTurma ? `<p><strong>Coordenador de Turma:</strong> ${prof.turma}</p>` : ''}
    </div>
  `;
  
  const modal = document.getElementById('professorModal');
  modal.style.display = 'block';
}

function uploadFoto(index) {
  const input = document.getElementById(`fotoProfessor${index}`);
  input.click();

  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const img = document.getElementById(`fotoPreview${index}`);
      img.src = event.target.result;
      professores[index].foto = event.target.result;
    };
    
    reader.readAsDataURL(file);
  });
}

function acessarTurma(nomeProfessor) {
  alert(`Acessando turma do professor ${nomeProfessor}`);
}

window.onload = function() {
  renderProfessores();
  
  const modal = document.getElementById('professorModal');
  const span = document.getElementsByClassName('close')[0];
  
  span.onclick = function() {
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.toLowerCase();
  const password = document.getElementById('password').value;

  // Updated login validation for coordinators with course and period information
  const validCredentials = {
    'maria': { 
      password: '1234', 
      turmas: ['8A Manhã'], 
      disciplina: 'Matemática', 
      nome: 'Maria Silva',
      curso: 'Informática',
      periodo: 'Manhã'
    },
    'luiza': { 
      password: '1234', 
      turmas: ['9B Tarde'], 
      disciplina: 'Química', 
      nome: 'Luiza Souza',
      curso: 'Eletrônica',
      periodo: 'Tarde'
    },
    'ana': { 
      password: '1234', 
      turmas: ['7C Manhã'], 
      disciplina: 'Geografia', 
      nome: 'Ana Costa',
      curso: 'Informática',
      periodo: 'Manhã'
    },
    'carlos': { 
      password: '1234', 
      turmas: ['Turma Carlos'], 
      disciplina: 'História', 
      nome: 'Carlos Santos',
      curso: 'Eletrônica',
      periodo: 'Tarde'
    },
    'beatriz': { 
      password: '1234', 
      turmas: ['Turma Beatriz'], 
      disciplina: 'Português', 
      nome: 'Beatriz Lima',
      curso: 'Informática',
      periodo: 'Manhã'
    }
  };

  const user = validCredentials[username];
  if (user && user.password === password) {
    // Store more detailed user info
    sessionStorage.setItem('loggedUser', JSON.stringify({
      nome: user.nome,
      turmas: user.turmas,
      disciplina: user.disciplina,
      curso: user.curso,
      periodo: user.periodo
    }));
    window.location.href = 'turmas.html';
  } else {
    alert('Credenciais inválidas');
  }
});
;