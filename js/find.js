var posts = document.getElementsByClassName("jumbotron");
var url = new URL(window.location.href);
var search_text = url.searchParams.get("metin");
var regex = new RegExp(search_text, "i");
var notFound = document.getElementById("not-found");
var found = false;

if (search_text.length > 0) {
  for (var i = 0; i < posts.length; i += 1) {
    var name = posts[i].getElementsByTagName("a")[0].textContent;
    if (name.search(regex) != -1) {
      posts[i].classList.remove("hidden");
      found = true;
    }
  }

  if (found) {
    notFound.classList.add("hidden");
  }
}
