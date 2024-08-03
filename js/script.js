document.addEventListener("DOMContentLoaded", function () {
  const estimateForm = document.getElementById("estimateForm");
  const contactForm = document.getElementById("contactForm");
  const bookBtn = document.getElementById("book-btn");

  if (estimateForm) {
    estimateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Estimate Form Submitted");
      showToast("Success! You'll receive an estimate shortly.");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Contact Form Submitted");
      contactForm.reset();
      showToast("Message Received! We'll get back soon");
    });
  }

  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      console.log("Book Now Clicked");
      showToast("Appointment Booked Successfully!");
    });
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
