var carneAdulto = 400
var bebidaAdulto = 300
var carneCrianca = 200
var bebidaCrianca = 150

function calculaCarne() {
  let adultos = parseInt(document.getElementById('qtd_adultos').value)
  let criancas = parseInt(document.getElementById('qtd_crianças').value)
  let duracao = parseInt(document.getElementById('qtd_horas').value)
  let carneA = adultos * carneAdulto * duracao
  let carneC = criancas * carneCrianca * duracao
  result = carneA + carneC
  return result
}

function calculaBebida() {
  let adultos = parseInt(document.getElementById('qtd_adultos').value)
  let criancas = parseInt(document.getElementById('qtd_crianças').value)
  let duracao = parseInt(document.getElementById('qtd_horas').value)
  let bebidaA = adultos * bebidaAdulto * duracao
  let bebidaC = criancas * bebidaCrianca * duracao
  result = bebidaA + bebidaC
  return result
}

function showResults() {
  let a = document.getElementById('resultados').children[0]
  a.innerHTML = 'Para seu churrasco, você precisará de: '
  let b = document.getElementById('resultados').children[1]
  b.innerHTML = `${calculaCarne()} g de carne`
  let c = document.getElementById('resultados').children[2]
  c.innerHTML = `${calculaBebida()} ml de bebidas`
}
