function calcular(){
    alert('Mensagem completa!!!')
}

function consultamunicipio(){
    var txtv = window.document.getElementById('txtcep')
    var val = txtv.value
    var bcon = window.document.getElementById('bcon')
    var res = window.document.getElementById('res')
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${val}/municipios`;

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let author = data;
      const retornoMap = author.map((nomeAtual) => {
        return res.innerHTML += `${nomeAtual.nome} </br>`;
      })
      bcon.innerHTML = `Total de municípios..: ${data.length}`;
    })
    .catch(function(error) {
      res.innerHTML = `Você informou o cep ERRADO.`
    });
    
}