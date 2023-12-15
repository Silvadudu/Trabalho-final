function buscarLetra() {
  const nomeMusica = document.getElementById('nomeMusica').value;
  const nomeArtista = document.getElementById('nomeArtista').value;

  const apiUrl = `https://api.vagalume.com.br/search.php?art=${nomeArtista}&mus=${nomeMusica}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.type === 'exact' && data.mus[0]) {
        const letra = data.mus[0].text;
        document.getElementById('letraMusica').innerText = letra;
      } else {
        document.getElementById('letraMusica').innerText = 'Letra não encontrada.';
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}