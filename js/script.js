document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("estimateForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Submitted");
      showToast("Form submitted successfully!");
    });
  } else {
    console.error("Form with id 'estimateForm' not found");
  }
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}
