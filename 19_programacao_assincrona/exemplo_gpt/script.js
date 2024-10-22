// URL da API de usuários fictícios
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Função para buscar usuários com Promises usando fetch API
function buscarUsuarios() {
  return new Promise((resolve, reject) => {
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          reject('Erro na requisição!'); // Rejeita se houve erro na resposta
        }
        return response.json(); // Converte a resposta para JSON
      })
      .then(data => resolve(data)) // Resolve a Promise com os dados da API
      .catch(error => reject(error)); // Se ocorrer erro na requisição, rejeita a Promise
  });
}

// Função assíncrona para usar async/await
async function exibirUsuarios() {
  try {
    const usuarios = await buscarUsuarios(); // Espera a resposta da função buscarUsuarios
    const resultadosDiv = document.getElementById('resultados');

    // Exibe os usuários na página
    resultadosDiv.innerHTML = usuarios.map(usuario => `
      <p><strong>Nome:</strong> ${usuario.name}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <hr />
    `).join('');
  } catch (erro) {
    console.error('Erro:', erro); // Mostra o erro no console se houver
    document.getElementById('resultados').innerHTML = '<p>Erro ao buscar usuários.</p>';
  }
}

// Adiciona o evento ao botão para buscar usuários
document.getElementById('buscarUsuarios').addEventListener('click', exibirUsuarios);
