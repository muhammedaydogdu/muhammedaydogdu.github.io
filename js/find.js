var posts = document.getElementsByClassName("jumbotron");
var url = new URL(window.location.href);
var search_text = url.searchParams.get("metin");
var regex = new RegExp(simplify(search_text).toLowerCase());
var notFound = document.getElementById("not-found");
var found = false;
console.log(regex);
if (search_text.length > 0) {
  for (var i = 0; i < posts.length; i += 1) {
    var name = posts[i].getElementsByTagName("a")[0].textContent;
    if (simplify(name).toLowerCase().search(regex) != -1) {
      posts[i].classList.remove("hidden");
      found = true;
    }
  }

  if (found) {
    notFound.classList.add("hidden");
  }
}
function simplify(word) {
    return word
            .replace(/İ/g, "i")
            .replace(/I/g, "ı");
}
