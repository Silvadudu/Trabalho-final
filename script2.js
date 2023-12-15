function buscarTrechos() {
    const nomeMusica = document.getElementById('nomeMusica').value;

    const apiUrl = `https://api.vagalume.com.br/search.excerpt?apikey=660a4395f992ff67786584e238f501aa&q=${nomeMusica}&limit=10`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.response.docs.length > 0) {
          const trechos = data.response.docs;
          const opcoesTrechos = document.getElementById('selecionarTrecho');

          opcoesTrechos.innerHTML = '';

          trechos.forEach(trecho => {
            const option = document.createElement('option');
            option.value = trecho.id;
            option.textContent = trecho.band ? trecho.title + ' - ' + trecho.band : trecho.title;
            opcoesTrechos.appendChild(option);
          });

          document.getElementById('opcoesTrechos').style.display = 'block';
        } else {
          document.getElementById('trechoSelecionado').innerText = 'Trechos não encontrados para esta música.';
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }

  function selecionarTrecho() {
    const trechoSelecionadoId = document.getElementById('selecionarTrecho').value;

    const apiUrl = `https://api.vagalume.com.br/search.excerpt?apikey=660a4395f992ff67786584e238f501aa&id=${trechoSelecionadoId}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.response.docs.length > 0) {
          const trechoSelecionado = data.response.docs[0];
          document.getElementById('trechoSelecionado').innerHTML = `<h2>${trechoSelecionado.title}</h2><p>${trechoSelecionado.text}</p>`;
        } else {
          document.getElementById('trechoSelecionado').innerText = 'Trecho não encontrado.';
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }