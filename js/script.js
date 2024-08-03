document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("estimateForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted");
  });
});
