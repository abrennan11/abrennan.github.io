document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function () {
      event.preventDefault();

      if (!document.getElementById("email").value.includes("@")) {
        document.getElementById("error-zone").innerHTML =
          "Error: must input valid email address";
      } else {
        document.getElementById("error-zone").innerHTML = "";
        console.log(
          "From email: " +
            document.getElementById("email").value +
            ":\n" +
            document.getElementById("text-content").value
        );
        document.getElementById("email").value = "";

        document.getElementById("text-content").value = "";
      }
    });
});
