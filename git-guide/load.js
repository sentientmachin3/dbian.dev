window.onload = load;

function load() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById("content").innerHTML = xhr.responseText;
      } else {
        document.getElementById("content").innerHTML = "Error loading content.";
      }
    }
  };
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/sentientmachin3/git-guide/master/web/git-guide.html",
    true,
  );
  xhr.send();
}
