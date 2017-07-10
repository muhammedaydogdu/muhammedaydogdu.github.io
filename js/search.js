var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", function(e) {
  if (e.key == "Enter") {
    window.location.href = "/arama.html?metin=" + searchBar.value.split(" ").join("+");
  }
});
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
  window.location.href = "/arama.html?metin=" + searchBar.value.split(" ").join("+");
});
