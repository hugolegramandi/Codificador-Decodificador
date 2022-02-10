export default function incremento() {
  let incremento = document.getElementById('divIncremento')
  let labelCifra = document.getElementById('labelCifra')
  let labelBase = document.getElementById('labelBase')

  labelCifra.addEventListener('click', function() {
      mostrarIncremento()
  })

  labelBase.addEventListener('click', function() {
      escondeIncremento()
  })

  function mostrarIncremento() {
      if (incremento.style.display = "none") {
      incremento.style.display = "flex";
    } else {
      incremento.style.display = "none"
    }
  }

  function escondeIncremento() {
      if (incremento.style.display = "flex") {
      incremento.style.display = "none";
    } else {
      incremento.style.display = "none"
    }
  }
}