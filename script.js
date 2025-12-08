document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("dropdown").addEventListener("click", function () {
    const menu = document.getElementById("nav-buttons");

    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });

  document.getElementById("help").addEventListener("click", function () {
    const popup = document.getElementById("popup-help");

    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  });

  document.getElementById("close").addEventListener("click", function () {
    const popup = document.getElementById("popup-help");

    popup.style.display = "none";
  });

  const footer = document.getElementById("footer");
  const content = document.getElementById("content");
  const header = document.getElementById("content-header");
  const diff = content.clientHeight + header.clientHeight;
  if (diff < (window.innerHeight / 100) * 80) {
    footer.style.position = "absolute";
  }
  //buffer.style.height = "calc(80vh - " + content.clientHeight + "px)";
  console.log(content.clientHeight);
  console.log(header.clientHeight);
});
