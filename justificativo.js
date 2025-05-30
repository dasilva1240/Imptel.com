// Inicializar os campos de assinatura
let assinaturaAluno = new SignaturePad(document.getElementById('assinaturaAluno'));
let assinaturaEncarregado = new SignaturePad(document.getElementById('assinaturaEncarregado'));

function limparAssinaturaAluno() {
  assinaturaAluno.clear();
}

function limparAssinaturaEncarregado() {
  assinaturaEncarregado.clear();
}

document.getElementById('faltasForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validar se as assinaturas foram preenchidas
  if (assinaturaAluno.isEmpty() || assinaturaEncarregado.isEmpty()) {
    alert('Por favor, preencha ambas as assinaturas antes de enviar.');
    return;
  }
  
  // Aqui você pode adicionar o código para enviar os dados para o servidor
  alert('Justificação enviada com sucesso!');
  // Limpar o formulário após envio
  this.reset();
  assinaturaAluno.clear();
  assinaturaEncarregado.clear();
});

// Preview das imagens carregadas
function setupImagePreview(inputId) {
  const input = document.getElementById(inputId);
  input.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const preview = document.createElement('img');
        preview.src = e.target.result;
        preview.style.maxWidth = '200px';
        preview.style.marginTop = '10px';
        
        // Remover preview anterior se existir
        const parentDiv = input.parentElement;
        const oldPreview = parentDiv.querySelector('img');
        if (oldPreview) {
          parentDiv.removeChild(oldPreview);
        }
        
        parentDiv.appendChild(preview);
      }
      reader.readAsDataURL(file);
    }
  });
}

setupImagePreview('atestado');
setupImagePreview('pagamento');