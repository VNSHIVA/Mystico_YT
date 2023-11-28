const span = document.querySelector("span");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("mystico_2451", span.textContent);
    console.log(event.clipboardData.getData("mystico_2451"))
  }
});