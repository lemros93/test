// Získanie modal elementu
var modal = document.getElementById("myModal");

// Získanie elementu pre zobrazenie obrázka v modalnom okne
var modalImg = document.getElementById("img01");

// Získanie všetkých obrázkov s triedou "thumbnail"
var imgs = document.querySelectorAll(".marek");

// Pre každý obrázok pridáme udalosť kliknutia
imgs.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.id;
  }
});

// Zatvorenie modalu po kliknutí na "X"
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// Zatvorenie modalu po stlačení klávesy ESC
document.onkeydown = function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";  // Skryje modal po stlačení ESC
    }
  }