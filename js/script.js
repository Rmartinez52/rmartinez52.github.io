document.addEventListener("DOMContentLoaded", function () {
  const estimateForm = document.getElementById("estimateForm");
  const contactForm = document.getElementById("contactForm");
  const bookForm = document.getElementById("book-form");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  if (estimateForm) {
    estimateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      estimateForm.reset();
      showToast("Success! You'll receive an estimate shortly.");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.reset();
      showToast("Message Received! We'll get back soon");
    });
  }

  if (bookForm) {
    bookForm.addEventListener("submit", function (e) {
      e.preventDefault();
      bookForm.reset();
      showToast("Appointment Booked Successfully!");
    });
  }
});

function showToast(finalMessage) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.backgroundColor = "#4c81af";

  const messageSpan = document.createElement("span");
  messageSpan.textContent = "Loading...";

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
    messageSpan.textContent = finalMessage;
    toast.style.backgroundColor = "";
  }, 2000);

  setTimeout(() => {
    if (document.body.contains(toast)) {
      closeToast(toast);
    }
  }, 7000);
}

function closeToast(toast) {
  toast.classList.remove("show");
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 500);
}
