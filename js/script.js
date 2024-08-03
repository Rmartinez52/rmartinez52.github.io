document.addEventListener("DOMContentLoaded", function () {
  const estimateForm = document.getElementById("estimateForm");
  const contactForm = document.getElementById("contactForm");

  if (estimateForm) {
    estimateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Submitted");
      showToast("Form submitted successfully!");
    });
  } else if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Submitted");
      contactForm.reset();
      showToast("Message Recieved! We'll get back soon");
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
