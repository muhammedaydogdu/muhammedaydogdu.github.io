var postList = document.getElementsByClassName("jumbotron");
for (var i = 0; i < postList.length; i += 1) {
  var readMoreLink = postList[i].getElementsByTagName("a")[1];
  if (Number(readMoreLink.getAttribute("postsize")) < Number(readMoreLink.getAttribute("postx"))) {
    readMoreLink.classList.add("hidden");
  }
}
