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

  const messageSpan = document.createElement("span");
  messageSpan.textContent = message;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.className = "toast-close";
  closeButton.onclick = function () {
    closeToast(toast);
  };

  toast.appendChild(messageSpan);
  toast.appendChild(closeButton);

  document.body.appendChild(toast);

  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(() => {
    if (document.body.contains(toast)) {
      closeToast(toast);
    }
  }, 5000);
}

function closeToast(toast) {
  toast.classList.remove("show");
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 500);
}
